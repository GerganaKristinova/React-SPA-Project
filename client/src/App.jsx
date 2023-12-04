import { Route, Routes } from 'react-router-dom'

import Home from './components/home/Home'
import About from './components/about/About'
import Contacts from './components/contacts/Contacts'
import Navigation from './components/navigation/Navigation'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import CrystalCreate from './components/create/CrystalCreate'
import RawGems from './components/gems/raw-gems/RawGems'
import ShapedGems from './components/gems/shaped-gems/ShapedGems'
import TumbledGems from './components/gems/tumbled-gems/TumbledGems'
import RawGemDetails from './components/gem-details/RawGemDetails'
import ShapedGemDetails from './components/gem-details/ShapedGemDetails'
import TumbledGemDetails from './components/gem-details/TumbledGemDetails'

function App() {

  return (
    <>
      <Navigation />

      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/create-post' element={<CrystalCreate />} />
        <Route path='/raw-gems' element={<RawGems />} />
        <Route path='/tumbled-gems' element={<TumbledGems />} />
        <Route path='/shaped-gems' element={<ShapedGems />} />
        <Route path='/raw-gems/:rawGemId' element={<RawGemDetails />} />
        <Route path='/tumbled-gems/:tumbledGemId' element={<TumbledGemDetails />} />
        <Route path='/shaped-gems/:shapedGemId' element={<ShapedGemDetails />} />

      </Routes>

      <Footer />
    </>
  )
}

export default App
