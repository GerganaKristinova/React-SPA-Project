import Footer from "./components/Footer"
import Header from "./components/Header"
import HeroBanner from "./components/HeroBanner"
import Modal from "./components/Modal"
import Navigation from "./components/Navigation"
import Reviews from "./components/Reviews"
import TopSellers from "./components/TopSellers"

function App() {

  return (

    <div>
      
      <Navigation />

      <Header />

      <Modal />

      <HeroBanner />
        
      <TopSellers />

      <Reviews />

      <Footer />
      
    </div>
  )
}

export default App
