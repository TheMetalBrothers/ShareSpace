//import { useState } from "react";
import "../App.css"
import catPic from "../assets/catto.jpg"
import heart from "../assets/hearticon.jpeg"
import comment from "../assets/chat.png"

const Feed = () => {
    return (
        <div className="Feed">
          <a className="userName">Username</a>
          <a className="userDesc">Description</a>
            <img
            src={catPic}
            width="300"
            height="445"
            className="feedImage"
            alt=""
          />
          <img
            src={heart}
            width="50"
            height="50"
            className="feedButton"
            alt=""
          />
          <img
            src={comment}
            width="50"
            height="50"
            className="feedButton"
            alt=""
          />
        </div>
    )
}

export default Feed;
