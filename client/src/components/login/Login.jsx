import { useContext, useEffect, useState } from "react";

import AuthContext from "../../contexts/authContext";
import { Link } from "react-router-dom";

export default function Login() {
  const { loginSubmitHandler } = useContext(AuthContext)
  const [loginInfo, setLoginInfo] = useState({ email: '', password: '' })

  const onChange = (e) => {
    setLoginInfo(state => ({ ...state, [e.target.name]: e.target.value }))
  }

  const onLoginSubmit = (e) => {
    e.preventDefault()
    const loginData = Object.fromEntries(new FormData(e.currentTarget));

    loginSubmitHandler(loginData)
  }

  return (
    <div className="container py-5" style={{marginBottom: '18rem'}}>
      <div className="row py-5">
        <form className="col-md-9 m-auto" onSubmit={onLoginSubmit}>
          <div className="row">
            <div className="form-group mb-3">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control
                mt-1"
                id="email"
                name="email"
                placeholder="Email"
                onChange={onChange}
                value={loginInfo.email}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control
                mt-1"
                id="password"
                name="password"
                placeholder="Password"
                onChange={onChange}
                value={loginInfo.password}
              />
            </div>
          </div>
          <div className="row">
            <div className="col text-start mt-2">
              <button type="submit" className="btn btn-success btn-lg px-3">Login</button>
            </div>
            <div className="col text-end mt-2">
              <p><Link style={{color: '#656565'}}className="text-decoration-none" to="/register">If you don't have a profile click <strong className='text-success'>HERE</strong></Link></p>
            </div>
          
          </div>
        
        </form>

      </div>
    </div>
  );
}
