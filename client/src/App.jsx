import { Route, Routes } from 'react-router-dom'

import Home from './components/home/Home'
import About from './components/about/About'
import Contacts from './components/contacts/Contacts'
import Navigation from './components/navigation/Navigation'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import GemCreate from './components/gem-create/GemCreate'
import Gems from './components/gems/Gems'
import GemDetails from './components/gem-details/GemDetails'
import Login from './components/login/Login'
import Logout from './components/logout/Logout'
import Register from './components/register/Register'
import { AuthProvider } from './contexts/authContext'
import GemsNavigation from './components/gems/gems-navigation/GemsNavigation'
import GemEdit from './components/gem-edit/GemEdit'
import PageNotFound from './components/page-not-found/PageNotFound'

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
          <Route path='/create-post' element={<GemCreate />} />
          <Route path='/gems' element={<GemsNavigation />}>
            <Route index element={<Gems />} />
            <Route path='raw-gems' element={<Gems />} />
            <Route path='tumbled-gems' element={<Gems />} />
            <Route path='shaped-gems' element={<Gems />} />
            <Route path=':gemType/:gemId' element={<GemDetails />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/register' element={<Register />} />
          <Route path='/gems/:gemType/edit/:gemId' element={<GemEdit />}/>
          <Route path='*' element={<PageNotFound />} />
        </Routes>

        <Footer />
      </>
    </AuthProvider>
  )
}

export default App
