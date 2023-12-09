import { Route, Routes } from 'react-router-dom'

import { AuthProvider } from './contexts/authContext'

import Home from './components/home/Home'
import About from './components/about/About'
import Contacts from './components/contacts/Contacts'
import GemCreate from './components/gem-create/GemCreate'
import Gems from './components/gems/Gems'
import GemDetails from './components/gem-details/GemDetails'
import Login from './components/login/Login'
import Logout from './components/logout/Logout'
import Register from './components/register/Register'
import GemsNavigation from './components/gems/gems-navigation/GemsNavigation'
import GemEdit from './components/gem-edit/GemEdit'
import PageNotFound from './components/page-not-found/PageNotFound'
import Layout from './components/layout/Layout'
import Favorites from './components/favorites/Favorites'

function App() {

  return (
    <AuthProvider>
        <>
          <Routes>
            <Route element={<Layout />}>
              <Route path='/' element={<Home />} />
              <Route path='/create-post' element={<GemCreate />} />

              <Route path='/gems' element={<GemsNavigation />}>
                <Route index element={<Gems />} />
                <Route path='raw-gems' element={<Gems />} />
                <Route path='tumbled-gems' element={<Gems />} />
                <Route path='shaped-gems' element={<Gems />} />
                <Route path=':gemType/:gemId' element={<GemDetails />} />
              </Route>
              <Route path='/gems/:gemType/edit/:gemId' element={<GemEdit />} />
              <Route path='/favorites' element={<Favorites />} />
              <Route path='/contacts' element={<Contacts />} />
              <Route path='/about' element={<About />} />
              <Route path='/login' element={<Login />} />
              <Route path='/logout' element={<Logout />} />
              <Route path='/register' element={<Register />} />
            </Route>
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </>
    </AuthProvider >
  )
}

export default App
