import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-dark" id="tempaltemo_footer">
            <div className="container">
                <div className="row">

                    <div className="col-md-4 pt-5">
                        <h2 className="h2 text-success border-bottom pb-3 border-light logo">Gems Shop</h2>
                        <ul className="list-unstyled text-light footer-link-list">
                            <li>
                                <i className="fas fa-map-marker-alt fa-fw"></i>
                                <Link className="text-decoration-none" to="/contacts">Earth</Link>
                            </li>
                            <li>
                                <i className="fa fa-phone fa-fw"></i>
                                <Link className="text-decoration-none" to="/contacts">089 020 0340</Link>
                            </li>
                            <li>
                                <i className="fa fa-envelope fa-fw"></i>
                                <Link className="text-decoration-none" to="/contacts">gemposts@gmail.com</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-4 pt-5">
                        <h2 className="h2 text-light border-bottom pb-3 border-light">Categories</h2>
                        <ul className="list-unstyled text-light footer-link-list">
                            <li><Link className="text-decoration-none" to="/gems">All Gems</Link></li>
                            <li><Link className="text-decoration-none" to="/gems/raw-gems">Raw Gems</Link></li>
                            <li><Link className="text-decoration-none" to="/gems/tumbled-gems">Tumbled Gems</Link></li>
                            <li><Link className="text-decoration-none" to="/gems/shaped-gems">Shaped gems</Link></li>
                        </ul>
                    </div>

                    <div className="col-md-4 pt-5">
                        <h2 className="h2 text-light border-bottom pb-3 border-light">Further Info</h2>
                        <ul className="list-unstyled text-light footer-link-list">
                            <li><Link className="text-decoration-none" to="/about">About</Link></li>
                            <li><Link className="text-decoration-none" to="/contacts">Contacts</Link></li>
                        </ul>
                    </div>

                </div>

                <div className="row text-light mb-4">
                    <div className="col-12 mb-3">
                        <div className="w-100 my-3 border-top border-light"></div>
                    </div>
                    <div className="col-auto me-auto">
                        <ul className="list-inline text-left footer-icons">
                            <li className="list-inline-item border border-light rounded-circle text-center">
                                <Link className="text-light text-decoration-none" target="_blank" to="http://facebook.com/"><i className="fab fa-facebook-f fa-lg fa-fw"></i></Link>
                            </li>
                            <li className="list-inline-item border border-light rounded-circle text-center">
                                <Link className="text-light text-decoration-none" target="_blank" to="https://www.instagram.com/"><i className="fab fa-instagram fa-lg fa-fw"></i></Link>
                            </li>
                            <li className="list-inline-item border border-light rounded-circle text-center">
                                <Link className="text-light text-decoration-none" target="_blank" to="https://twitter.com/"><i className="fab fa-twitter fa-lg fa-fw"></i></Link>
                            </li>
                            <li className="list-inline-item border border-light rounded-circle text-center">
                                <Link className="text-light text-decoration-none" target="_blank" to="https://www.linkedin.com/"><i className="fab fa-linkedin fa-lg fa-fw"></i></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="w-100 bg-black py-3">
                <div className="container">
                    <div className="row pt-2">
                        <div className="col-12">
                            <p className="text-left text-light">
                                Copyright &copy; 2025 Gem Posts
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    )
}