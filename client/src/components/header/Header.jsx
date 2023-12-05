import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";

import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faUser } from '@fortawesome/free-solid-svg-icons'

import AuthContext from "../../contexts/authContext";

export default function Header() {
  const {
    isAuthenticated,
    username
  } = useContext(AuthContext)
  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow">
      <div className="container d-flex justify-content-between align-items-center">

        <Link className="navbar-brand text-success logo h1 align-self-center" to="/">
          Gem Posts
        </Link>

        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="templatemo_main_nav">
          <div className="flex-fill">
            <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/raw-gems">Crystal Posts</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/create-post">Create Post</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contacts">Contacts</NavLink>
              </li>
            </ul>
          </div>
          {/* Search */}
            {/* <div className="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
              <div className="input-group">
              <input type="text" className="form-control" id="inputMobileSearch" placeholder="Search ..." />
              <div className="input-group-text">
              <i className="fa fa-fw fa-search"></i>
              </div>
              </div>
            </div> */}
            <div className="navbar align-self-center d-flex">

            {/* Logged in */}
            {isAuthenticated && (
              <li className="nav-link">
                <Dropdown className="d-inline mx-2">
                  <Dropdown.Toggle id="dropdown-autoclose-true" style={{ border: '0px', backgroundColor: 'white', color: '#853075', fontSize: '1em' }}>
                    Manage Profile
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="/logout">Logout</Dropdown.Item>
                    <Dropdown.Item href="/profile/edit">Edit Profile</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
            )}

            {/* Logged out */}
            {!isAuthenticated && (
            <li className="nav-link">
              <Dropdown className="d-inline mx-2">
                <Dropdown.Toggle id="dropdown-autoclose-true" style={{ border: '0px', backgroundColor: 'white', color: '#702963', fontSize: '1em'}}>
                  Manage Profile
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="/login">Login</Dropdown.Item>
                  <Dropdown.Item href="/register">Register</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            )}

            {/* Search */}
            {/* <NavLink className="nav-icon d-none d-lg-inline" to="#" data-bs-toggle="modal" data-bs-target="#templatemo_search">
              <i className="fa fa-fw fa-search text-dark mr-2"></i>
            </NavLink> */}
            {isAuthenticated && (
            <span style={{ marginRight: '1em', color: '#853075', fontWeight: '400' }}>{`${username}'s`}</span>
            )}
            <NavLink className="nav-icon position-relative text-decoration-none" to="#">
              <FontAwesomeIcon icon={faUser} style={{ color: '#702963' }} />
            </NavLink>
            <NavLink className="nav-icon position-relative text-decoration-none" to="#">
              <FontAwesomeIcon icon={faHeart} style={{ color: '#702963' }} />
            </NavLink>

          </div>
        </div>

      </div>
    </nav>
  )
}