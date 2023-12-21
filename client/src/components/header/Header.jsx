import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from "react";

import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faUser } from '@fortawesome/free-solid-svg-icons'

import AuthContext from "../../contexts/authContext";
import Profile from "../profile/Profile";


export default function Header() {
  const {
    isAuthenticated,
  } = useContext(AuthContext)

  const [showProfile, setShowProfile] = useState(false);

  const handleShowProfile = () => setShowProfile(true)

  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow">
      {/*Navigation*/}
      <div className="container d-flex justify-content-between align-items-center">
        <Link className="navbar-brand text-success logo h1 align-self-center" to="/">
          Gem Posts
        </Link>
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="templatemo_main_nav">
          <div className="flex-fill">
            <ul className="nav navbar-nav d-flex justify-content-evenly mx-lg-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/gems">Gem Posts</NavLink>
              </li>
              {isAuthenticated && (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/create-post">Create Post</NavLink>
                </li>
              )}
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contacts">Contacts</NavLink>
              </li>

              {/* Logged out */}
              {!isAuthenticated && (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/login">Login</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/register">Register</NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
          <div className="navbar align-self-center d-flex">

            {/* Logged in */}
            {isAuthenticated && (
              <>
                <li className="nav-link">
                  <Dropdown className="d-inline mx-2">

                    <Dropdown.Toggle id="dropdown-autoclose-true" style={{ border: '0px', backgroundColor: 'white', color: '#853075', fontSize: '1em' }}>
                      Profile Settings
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="/logout">Logout</Dropdown.Item>
                    </Dropdown.Menu>

                  </Dropdown>

                  <NavLink className="nav-icon position-relative text-decoration-none"
                    onClick={handleShowProfile}>
                    <FontAwesomeIcon icon={faUser} style={{ color: '#702963' }} />
                  </NavLink>

                  <NavLink className="nav-icon position-relative text-decoration-none" to={`/favorites`}>
                    <FontAwesomeIcon icon={faHeart} style={{ color: '#702963' }} />
                  </NavLink>
                </li>
                {showProfile && (
                  <Profile setShowProfile={setShowProfile}/>
                )}

              </>
            )}
          </div>
        </div>

      </div>
    </nav>
  )
}