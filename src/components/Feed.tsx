//import { useState } from "react";
import "../App.css"
import catPic from "../assets/catto.jpg"
import harleyDarling from '../assets/harleydarling.jpeg'
import heart from "../assets/hearticon.jpeg"
import comment from "../assets/chat.png"
import samplePosts from '../data/samplePosts.json'
import arrow from '../assets/arrow.png'

const Feed = () => {
  let index = 0;

  const nextFeed = () => {
    console.log(index)
    index++;
  }

  const lastFeed = () => {
    index--;
  }

    return (
        <div className="Feed">
          <a className="userName">{samplePosts[index].username}</a>
          <a className="userDesc">{samplePosts[index].description}</a>
            <img
            src={samplePosts[index].url}
            width="300"
            height="445"
            className="feedImage"
            alt=""
          />
          <img
            src={heart}
            width="50"
            height="50"
            className="feedLike"
            alt=""
          />
          <img
            src={comment}
            width="50"
            height="50"
            className="feedComment"
            alt=""
          />
           <img onClick={nextFeed}
            src={arrow}
            width="60"
            height="55"
            className="nextArrow"
            alt=""
          />
          <img onClick={lastFeed}
            src={arrow}
            width="60"
            height="55"
            className="lastArrow"
            alt=""
          />
        </div>
    )
}

export default Feed;
