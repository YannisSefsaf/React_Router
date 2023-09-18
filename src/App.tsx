import './App.css'
import Home from './components/Home'
import About from './components/About'
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom"
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Router>
        <header>
        <nav>
          <NavLink className='logo' to="/">
            #VANLIFE
          </NavLink>
          <div>
            <NavLink className={({ isActive, isPending }) =>
    isPending ? "pending link" : isActive ? "active link" : "link"
  } to="/about">About</NavLink>
            <NavLink className={({ isActive, isPending }) =>
    isPending ? "pending link" : isActive ? "active link" : "link"
  } to="/vans">Vans</NavLink>
          </div>
        </nav>
        </header>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>} />
      </Routes>
      </Router>
      <Footer/>
    </>
  )
}

export default App
