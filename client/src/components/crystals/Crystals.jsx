import Footer from "../footer/Footer";
import Header from "../header/Header";
import Navigation from "../navigation/Navigation";
import CrystalsList from "./CrystalsList";

export default function Crystals() {
    return(
        <>
        <Navigation />
        
        <Header />

        <CrystalsList />

        <Footer />
    </>
    )
}