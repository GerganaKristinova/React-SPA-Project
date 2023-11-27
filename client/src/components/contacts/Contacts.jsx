import Footer from "../footer/Footer";
import Header from "../header/Header";
import Navigation from "../navigation/Navigation";
import ContactsBanner from "./ContactsBanner";
import ContactsMap from "./ContactsMap";

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