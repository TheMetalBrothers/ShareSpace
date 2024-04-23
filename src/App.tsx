import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { useState } from 'react
import NavBar from './components/Navbar'

import './App.css'
import Sidebar from './components/Sidebar'
import Feed from './components/Feed' //temp removed for testing
import Profile from './components/Profile'

function App() {

  return (
    <header>
          <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    <>

    <div>
      <NavBar/>
      <Sidebar/>
      
      <Profile/>
    </div>

    </>
    </header>
  )
}
export default App