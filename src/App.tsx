//import { useState } from 'react'
// import imagePath from "./assets/catto.jpg"
import NavBar from './components/Navbar'
import './App.css'
import Sidebar from './components/Sidebar'
import Feed from './components/Feed' //temp removed for testing
import Profile from './components/Profile'

function App() {
  return (
    <>
    <div>
      <NavBar/>
      <Sidebar/>
      
      <Profile/>
    </div>
    </>
  )
}

export default App
