import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import NavBar from './components/Navbar'
import { useState } from 'react';
import './App.css'
import Sidebar from './components/Sidebar'
import Feed from './components/Feed' //temp removed for testing
import Profile from './components/Profile'

function App() {

  const [showButton, setShowButton] = useState(true);
  const [showProfile, setShowProfile] = useState(false);
  const [showFeed, setShowFeed] = useState(true);
  const [showButton2, setShowButton2] = useState(false);



  const toggleButton = () => {
    setShowProfile(!showProfile);
    setShowFeed(!showFeed);
    setShowButton(!showButton)
    setShowButton2(!showButton2)
  };


  return (
    <header>
          
    <>
    <div>
      <NavBar/>
      <Sidebar />
       <a className="clerkButton"><SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn></a>
      {showButton && <button className="toggleButton" onClick={toggleButton}>Profile</button>}
      {showButton2 && <button className="toggleButton" onClick={toggleButton}>Home</button>}
      {showProfile && <Profile/>}
      {showFeed && <Feed/>}
      
    </div>

    </>
    </header>
  )
}
export default App