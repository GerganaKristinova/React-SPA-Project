import Categories from "./Categories"
import Footer from "../footer/Footer"
import Header from "../header/Header"
import HeroBanner from "./HeroBanner"
import Navigation from "../navigation/Navigation"
import Reviews from "./Reviews"

export default function Home() {

  return (
      <>
        <Navigation />
        
        <Header />

        <HeroBanner />
          
        <Categories />

        <Reviews />

        <Footer />
    </>
  )
}