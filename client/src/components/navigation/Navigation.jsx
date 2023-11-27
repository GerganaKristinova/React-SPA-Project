import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block" id="templatemo_nav_top">
            <div className="container text-light">
                <div className="w-100 d-flex justify-content-between">
                    <div>
                        <i className="fa fa-envelope mx-2"></i>
                        <Link className="navbar-sm-brand text-light text-decoration-none" to="/">gemposts@gmail.com</Link>
                        <i className="fa fa-phone mx-2"></i>
                        <Link className="navbar-sm-brand text-light text-decoration-none" to="/">089 020 0340</Link>
                    </div>
                    <div>
                        <Link className="text-light" to="/" target="_blank" rel="sponsored"><i className="fab fa-facebook-f fa-sm fa-fw me-2"></i></Link>
                        <Link className="text-light" to="/" target="_blank"><i className="fab fa-instagram fa-sm fa-fw me-2"></i></Link>
                        <Link className="text-light" to="/" target="_blank"><i className="fab fa-twitter fa-sm fa-fw me-2"></i></Link>
                        <Link className="text-light" to="/" target="_blank"><i className="fab fa-linkedin fa-sm fa-fw"></i></Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}