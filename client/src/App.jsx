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
import GemDetails from './components/gem-details/GemDetails'
import Login from './components/login/Login'
import { AuthProvider } from './contexts/authContext'
import Logout from './components/logout/Logout'
import Register from './components/register/Register'

function App() {

  return (
    <AuthProvider>
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
        <Route path='/raw-gems/:gemType/:gemId' element={<GemDetails />} />
        <Route path='/tumbled-gems/:gemType/:gemId' element={<GemDetails />} />
        <Route path='/shaped-gems/:gemType/:gemId' element={<GemDetails />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/register' element={<Register />} />
      </Routes>

      <Footer />
    </>
    </AuthProvider>
  )
}

export default App
