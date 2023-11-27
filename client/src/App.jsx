import { Route, Routes } from 'react-router-dom'

import Home from './components/home/Home'
import About from './components/about/About'
import Crystals from './components/crystals/Crystals'
import Contacts from './components/contacts/Contacts'
import Create from './components/create/Create'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/crystals' element={<Crystals />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/create-post' element={<Create />} />
      </Routes>
    </>
  )
}

export default App
