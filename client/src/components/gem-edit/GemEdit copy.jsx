import { useContext, useEffect, useState } from "react";

import * as authService from '../../services/authService'
import AuthContext from "../../contexts/authContext";

export default function ProfileEdit() {
    const { userId } = useContext(AuthContext)
    const [profile, setProfile] = useState({
        username: '',
        imageUrl: '',
        description: '',
    })

    useEffect(() => {
        authService.getOneProfile
            .then(setProfile)
    }, [])

    console.log(profile);

    const editProfileSubmitHandler = async (e) => {
        e.preventDefault();

        const profileData = Object.fromEntries(new FormData(e.currentTarget))

        await authService.editProfile(userId, profileData)
    }

    const onChange = (e) => {
        setProfile(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <div className="container py-5">
            <div className="row py-5">
                <form className="col-md-9 m-auto" onSubmit={editProfileSubmitHandler}>
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
                                value={profile.username}
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
                                value={profile.imageUrl}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description">Description</label>
                            <textarea
                                className="form-control mt-1"
                                id="description"
                                name="description"
                                placeholder="Description"
                                rows="4"
                                onChange={onChange}
                                value={profile.description}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}