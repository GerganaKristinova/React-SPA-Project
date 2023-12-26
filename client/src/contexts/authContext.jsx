import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as authService from '../services/authService'
import usePersistedState from "../hooks/usePersistedState";

const AuthContext = createContext();

AuthContext.displayName = 'AuthContext'

export const AuthProvider = ({
  children,
}) => {
  const navigate = useNavigate();
  const [auth, setAuth] = usePersistedState('auth', {});
  const [loginError, setLoginError] = useState(null)
  const [registerError, setRegisterError] = useState(null)

  const loginSubmitHandler = async (values) => {
    try {
      const result = await authService.login(values.email, values.password)

      setAuth(result)

      localStorage.setItem('accessToken', result.accessToken)

      navigate('/')
    } catch (error) {
      setLoginError(error.message)
    }
  }

  const registerSubmitHandler = async (values) => {
    try {
      const result = await authService.register(values.email, values.password, values.username, values.imageUrl, values.description)

      setAuth(result)

      localStorage.setItem('accessToken', result.accessToken)

      navigate('/')
    } catch (error) {
      setRegisterError(error.message)
    }

  }

  const logoutHandler = () => {
    setAuth({})
    localStorage.removeItem('accessToken');
  }

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    profile: auth,
    username: auth.username,
    email: auth.email,
    imageUrl: auth.imageUrl,
    userId: auth._id,
    isAuthenticated: !!auth.accessToken,
    loginError: loginError,
    registerError: registerError,
  }

  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;