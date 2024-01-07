import { Link } from "react-router-dom";
import { useContext, useState } from "react";

import AuthContext from "../../contexts/authContext";
import styles from "./RegisterValidation.module.css"

export default function Register() {
    const { registerSubmitHandler, registerError } = useContext(AuthContext);

    const initialValues = {
        username: '',
        email: '',
        password: '',
        'confirm-password': '',
        imageUrl: '',
        description: '',
    }

    const [registerInfo, setRegisterInfo] = useState(initialValues)
    const [blurredInput, setBlurredInput] = useState({})

    const onChange = (e) => {
        setRegisterInfo(state => ({ ...state, [e.target.name]: e.target.value }))
    }

    const onRegisterSubmit = (e) => {
        confirm('confirm')
        e.preventDefault()
        registerSubmitHandler(Object.fromEntries(new FormData(e.currentTarget)))
    }

    const onFocusHandler = (e) => {
        setBlurredInput(state => ({ ...state, [e.target.name]: false }))
    }

    const onBlurHandler = (e) => {
        setBlurredInput(state => ({ ...state, [e.target.name]: true }))
    }

    const onKeyDown = (e) => {
        if (e.key === "Enter") {
            setBlurredInput(state => ({ ...state, [e.target.name]: true }))
            const form = e.target.form;
            const index = [...form].indexOf(e.target);
            form[index + 1].focus();
            e.preventDefault();
        }
    }

    const onInvalidHandler = (e) => {
        e.preventDefault()
    }

    return (
        <div className="wrapper" style={{
            backgroundImage: "url(./assets/img/register.jpg)",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            paddingTop: '10em',
            paddingBottom: '10em'
        }}>
            <div className="row py-5">
                <form style={{
                    backgroundColor: 'white',
                    padding: '2em 2em',
                    borderRadius: '10px',
                }}
                    className="col-md-9 m-auto" onSubmit={onRegisterSubmit}>
                    <h2 style={{ color: '#702963', paddingBottom: '1em' }}>Register</h2>
                    <div className="row">
                        <div className="form-group mb-3">
                            <label htmlFor="username">Username <strong style={{ color: '#9e1985' }}>*</strong></label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                id="username"
                                name="username"
                                placeholder="Username"
                                value={registerInfo.username}
                                blurred={blurredInput.username?.toString()}
                                required
                                pattern="^[a-zA-Z0-9]{3,16}$"
                                onChange={onChange}
                                onBlur={onBlurHandler}
                                onFocus={onFocusHandler}
                                onKeyDown={onKeyDown}
                                onInvalid={onInvalidHandler}
                            />
                            <span className={styles.required}>Username is required</span>
                            <span className={styles.validation}>Username should be 3-16 characters and should include only letters and numbers</span>
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="email">Email <strong style={{ color: '#9e1985' }}>*</strong></label>
                            <input
                                type="email"
                                className="form-control mt-1"
                                id="email"
                                name="email"
                                placeholder="Email"
                                onChange={onChange}
                                value={registerInfo.email}
                                blurred={blurredInput.email?.toString()}
                                required
                                onBlur={onBlurHandler}
                                onFocus={onFocusHandler}
                                onKeyDown={onKeyDown}
                                onInvalid={onInvalidHandler}
                            />
                            <span className={styles.required}>Email is required</span>
                            <span className={styles.validation}>Email should be in the following format: name@example.com</span>
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="password">Password <strong style={{ color: '#9e1985' }}>*</strong></label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                id="password"
                                name="password"
                                placeholder="Password"
                                onChange={onChange}
                                value={registerInfo.password}
                                blurred={blurredInput.password?.toString()}
                                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$"
                                required
                                onBlur={onBlurHandler}
                                onFocus={onFocusHandler}
                                onKeyDown={onKeyDown}
                                onInvalid={onInvalidHandler}
                            />
                            <span className={styles.required}>Password is required</span>
                            <span className={styles.validation}>Password should be should be 8 or more characters and contain at least one uppercase letter, one lowercase letter, and one number</span>
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="confirm-password">Confirm Password <strong style={{ color: '#9e1985' }}>*</strong></label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                id="confirm-password"
                                name="confirm-password"
                                placeholder="Confirm Password"
                                onChange={onChange}
                                value={registerInfo['confirm-password']}
                                pattern={registerInfo.password}
                                blurred={blurredInput['confirm-password']?.toString()}
                                required
                                onBlur={onBlurHandler}
                                onFocus={onFocusHandler}
                                onKeyDown={onKeyDown}
                                onInvalid={onInvalidHandler}
                            />
                            <span className={styles.required}>Confirming your password is required</span>
                            <span className={styles.validation}>Passwords should match</span>
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="imageUrl">Profile Picture <span style={{ color: '#9e1985' }}>(Optional)</span></label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                id="imageUrl"
                                name="imageUrl"
                                placeholder="Profile Picture"
                                onChange={onChange}
                                onKeyDown={onKeyDown}
                                value={registerInfo.imageUrl}
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="description">Description <span style={{ color: '#9e1985' }}>(Optional)</span></label>
                            <textarea
                                className="form-control mt-1"
                                id="description"
                                name="description"
                                placeholder="Description"
                                rows="4"
                                onChange={onChange}
                                onKeyDown={onKeyDown}
                                value={registerInfo.description}
                            />
                        </div>
                        {registerError && (
                            <span className={styles.error}>{`${registerError}, try logging in instead, or use another email`}</span>
                        )}
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