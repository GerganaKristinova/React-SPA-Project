import Categories from "./categories/Categories"
import Footer from "../footer/Footer"
import Header from "../header/Header"
import HeroBanner from "./hero-banner/HeroBanner"
import Navigation from "../navigation/Navigation"
import Reviews from "./reviews/Reviews"

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