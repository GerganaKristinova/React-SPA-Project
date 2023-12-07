import { Link, NavLink, Outlet } from "react-router-dom";

export default function GemsNavigation() {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-3">
                    <h1 className="h2 pb-2 text-center mb-4">Categories</h1>
                    <ul style={{marginLeft: '1em'}} className="list-unstyled templatemo-accordion">
                        <li className="gems-li">
                            <NavLink style={{border: '1px solid #702963', borderRadius: '1em', paddingTop: '0.5em', paddingBottom: '0.5em', marginBottom: '0.5em'}} className="collapsed d-flex justify-content-center h3 text-decoration-none visited" to="/gems">
                                All
                            </NavLink>
                        </li>
                        <li className="gems-li"> 
                            <NavLink style={{border: '1px solid #702963', borderRadius: '1em', paddingTop: '0.5em', paddingBottom: '0.5em', marginBottom: '0.5em'}} className="collapsed d-flex justify-content-center h3 text-decoration-none visited" to="/gems/raw-gems">
                                Raw 
                            </NavLink>
                        </li>
                        <li  className="gems-li">
                            <NavLink style={{border: '1px solid #702963', borderRadius: '1em', paddingTop: '0.5em', paddingBottom: '0.5em', marginBottom: '0.5em'}} className="collapsed d-flex justify-content-center h3 text-decoration-none visited" to="/gems/tumbled-gems">
                                Tumbled
                            </NavLink>
                        </li>
                        <li className="gems-li">
                            <NavLink style={{border: '1px solid #702963', borderRadius: '1em', paddingTop: '0.5em', paddingBottom: '0.5em', marginBottom: '0.5em'}} className="collapsed d-flex justify-content-center h3 text-decoration-none visited" to="/gems/shaped-gems">
                                Shaped
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-9">
                    <Outlet />
                </div>
            </div>
        </div>

    )
}