//import { useState } from "react";
import "../App.css"
import profilePic from "../assets/harleydarling.jpeg"

const Profile = () => {
    return (
        <div className="Profile">
            <ul><img
            src={profilePic}
            width="250"
            height="225"
            className="profilePic"
            alt=""
          /></ul>
          <text className="profileUsername">SahilMetal</text>
          <text className="profileStats">4 Posts - 48 Followers - 53 Following</text>
          <text className="Bio">Lorium Ipsum Set Dolor Amet</text>
        </div>
    )
}

export default Profile;