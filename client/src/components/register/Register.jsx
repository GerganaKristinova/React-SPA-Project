import { Link } from "react-router-dom";
import { useContext, useState } from "react";

import AuthContext from "../../contexts/authContext";

export default function Register() {
    const { registerSubmitHandler } = useContext(AuthContext);
    const [registerInfo, setRegisterInfo] = useState({
        username: '',
        email: '',
        password: '',
        'confirm-password': '',
        imageUrl: '',
    })

    const onChange = (e) => {
        setRegisterInfo(state => ({ ...state, [e.target.name]: e.target.value }))
    }

    const onRegisterSubmit = (e) => {
        e.preventDefault()
        const userData = Object.fromEntries(new FormData(e.currentTarget));

        registerSubmitHandler(userData)
    }

    return (
        <div className="container py-5">
            <div className="row py-5">
                <form className="col-md-9 m-auto" onSubmit={onRegisterSubmit}>
                    <div className="row">
                        <div className="form-group mb-3">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                id="username"
                                name="username"
                                placeholder="Username"
                                onChange={onChange}
                                value={registerInfo.username}
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                id="email"
                                name="email"
                                placeholder="Email"
                                onChange={onChange}
                                value={registerInfo.email}
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
                                value={registerInfo.password}
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="confirm-password">Confirm Password</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                id="confirm-password"
                                name="confirm-password"
                                placeholder="Confirm Password"
                                onChange={onChange}
                                value={registerInfo['confirm-password']}
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="imageUrl">Profile Picture</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                id="imageUrl"
                                name="imageUrl"
                                placeholder="Profile Picture"
                                onChange={onChange}
                                value={registerInfo.imageUrl}
                            />
                        </div>


                    </div>
                    <div className="row">
                        <div className="col text-start mt-2">
                            <button type="submit" className="btn btn-success btn-lg px-3">Register</button>
                        </div>
                        <div className="col text-end mt-2">
                            <p><Link style={{ color: '#656565' }} className="text-decoration-none" to="/login">If you already have a profile click <strong className='text-success'>HERE</strong></Link></p>
                        </div>

                    </div>

                </form>

            </div>
        </div>
    )
}