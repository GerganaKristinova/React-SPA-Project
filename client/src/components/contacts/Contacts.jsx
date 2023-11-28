import ContactsMap from "./ContactsMap";

export default function Contacts() {
    return (
        <>
            <div className="container-fluid bg-light py-5">
                <div className="col-md-6 m-auto text-center">
                    <h1 className="h1">Contact Us</h1>
                    <p>
                        While you wait to hear back from our team, don't forget to browse our Frequently Asked Questions for possible solutions.
                    </p>
                    <ul className="list-unstyled text-light contacts-link-list">
                        <li>
                            <i className="fas fa-map-marker-alt fa-fw"></i>
                            <a className="text-decoration-none" href="earth">Earth</a>
                        </li>
                        <li>
                            <i className="fa fa-phone fa-fw"></i>
                            <a className="text-decoration-none" href="tel:010-020-0340">089 020 0340</a>
                        </li>
                        <li>
                            <i className="fa fa-envelope fa-fw"></i>
                            <a className="text-decoration-none" href="mailto:info@company.com">gemposts@gmail.com</a>
                        </li>
                    </ul>
                </div>
            </div>

            <ContactsMap />
        </>
    )
}