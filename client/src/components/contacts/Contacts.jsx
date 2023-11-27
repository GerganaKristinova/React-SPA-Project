import Footer from "../footer/Footer";
import Header from "../header/Header";
import Navigation from "../navigation/Navigation";
import ContactsBanner from "./contacts-banner/ContactsBanner";
import ContactsMap from "./contacts-map/ContactsMap";

export default function Contacts() {
    return(
        <>
        <Navigation />

        <Header />

        <ContactsBanner />

        <ContactsMap />
        
        <Footer />
    </>
    )
}