import { useContext, useState } from "react";

import AuthContext from "../../contexts/authContext";
import { Link } from "react-router-dom";

export default function Login() {
  const { loginSubmitHandler, loginError } = useContext(AuthContext)
  const [loginInfo, setLoginInfo] = useState({ email: '', password: '' })

  const onChange = (e) => {
    setLoginInfo(state => ({ ...state, [e.target.name]: e.target.value }))
  }

  const onLoginSubmit = (e) => {
      e.preventDefault()
      const userData = Object.fromEntries(new FormData(e.currentTarget));
  
      loginSubmitHandler(userData)
  }

  return (
    <div style={{
      backgroundImage: "url(./assets/img/register.jpg)",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      paddingTop: '10em',
      paddingBottom: '10em',
    }}>
      <div className="row py-5">
        <form style={{
          backgroundColor: 'white',
          padding: '2em 2em',
          borderRadius: '10px'
        }}
          className="col-md-9 m-auto" onSubmit={onLoginSubmit}>
          <h2 style={{ color: '#702963', paddingBottom: '1em' }}>Login</h2>
          <div className="row">
            <div className="form-group mb-3">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control mt-1"
                id="email"
                name="email"
                placeholder="Email"
                onChange={onChange}
                value={loginInfo.email}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control mt-1"
                id="password"
                name="password"
                placeholder="Password"
                onChange={onChange}
                value={loginInfo.password}
                required
              />
            </div>
            {loginError && (  
              <span style={{color: 'red'}}>{loginError}</span>
            )}
          </div>
          <div className="row">
            <div className="col text-start mt-2">
              <button type="submit" className="btn btn-success btn-lg px-3">Login</button>
            </div>
            <div className="col text-end mt-2">
              <p><Link style={{ color: '#656565' }} className="text-decoration-none" to="/register">If you don't have a profile click <strong className='text-success'>HERE</strong></Link></p>
            </div>

          </div>

        </form>

      </div>
    </div>
  );
}