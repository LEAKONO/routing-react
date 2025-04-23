import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Navbar from './components/Navbar'


function App() {
  return(
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route element={<Home/>} path='/'/>
    <Route element={<About/>} path='/about'/>
    <Route element={<Services/>} path='/services'/>
    <Route element={<Contact/>} path='/contact'/>
    </Routes>
    </BrowserRouter>
  )
}
export default App
