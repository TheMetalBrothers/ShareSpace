import "../App.css"
import homeIcon from "../assets/homeicon.png"
import profileIcon from "../assets/profileicon.webp"

const Sidebar = () => {

  
    return (
        <div className="sidebarItems">
            <ul><img
            src={homeIcon}
            width="40"
            height="40"
            className="homeIcon"
            alt=""
          />Home</ul>
            <img
            src={profileIcon}
            width="40"
            height="40"
            className="profileIcon"
            alt=""></img>
            <div className="signInNotif">
                <ul><button className="logInButton">Log In</button></ul>
                <a className="loginText">Login to like, follow users, and view comments</a>
            </div>
        </div>
    )
}

export default Sidebar;
