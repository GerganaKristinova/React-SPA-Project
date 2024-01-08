import ContactsMap from "./ContactsMap";
import { useScrollTo } from '../../hooks/useScrollTo'

export default function Contacts() {
    useScrollTo(0,0)
    
    return (
        <>
            <div style={{backgroundColor: '#702963'}} className="container-fluid py-5">
                <div className="col-md-6 m-auto text-center">
                    <h1 style={{color: 'white'}}>Contact Us</h1>
                    <p style={{color: 'white'}}>
                        We will be with you shortly!
                    </p>
                    <ul className="list-unstyled text-light contacts-link-list">
                        <li>
                            <i className="fas fa-map-marker-alt fa-fw"></i>
                            <a style={{color: 'white'}} className="text-decoration-none" href="earth">Earth</a>
                        </li>
                        <li>
                            <i className="fa fa-phone fa-fw"></i>
                            <a style={{color: 'white'}} className="text-decoration-none" href="tel:010-020-0340">089 999 9999</a>
                        </li>
                        <li>
                            <i className="fa fa-envelope fa-fw"></i>
                            <a style={{color: 'white'}} className="text-decoration-none" href="mailto:info@company.com">gemposts@gmail.com</a>
                        </li>
                    </ul>
                </div>
            </div>

            <ContactsMap />
        </>
    )
}