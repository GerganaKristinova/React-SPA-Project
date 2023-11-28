import { Link } from "react-router-dom";

export default function Categories() {
    return (
        <div className="col-lg-3">
            <h1 className="h2 pb-4">Categories</h1>
            <ul className="list-unstyled templatemo-accordion">
                <li className="pb-3">
                    <Link className="collapsed d-flex justify-content-between h3 text-decoration-none" to="/crystals/raw-gems">
                        Raw Gems
                    </Link>

                </li>
                <li className="pb-3">
                    <Link className="collapsed d-flex justify-content-between h3 text-decoration-none" to="/crystals/tumbled-gems">
                        Tumbled Gems
                    </Link>
                </li>
                <li className="pb-3">
                    <Link className="collapsed d-flex justify-content-between h3 text-decoration-none" to="/crystals/shaped-gems">
                        Shaped gems
                    </Link>
                </li>
            </ul>
        </div>
    )
}