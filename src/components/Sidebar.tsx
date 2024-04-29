import "../App.css"
import profileIcon from "../assets/profileicon.webp"

const Sidebar = () => {

  
    return (
        <div className="sidebarItems">
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
