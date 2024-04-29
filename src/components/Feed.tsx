import { useState } from "react";
import "../App.css"
import heart from "../assets/hearticon.jpeg"
import comment from "../assets/chat.png"
import samplePosts from '../data/samplePosts.json'
import arrow from '../assets/arrow.png'

const Feed = () => {
  // eslint-disable-next-line prefer-const
  let [feedIndex, setFeedIndex] = useState(0)
  const [showComment, setShowComment] = useState(true)

  const nextFeed = () => {
    setFeedIndex(feedIndex = feedIndex + 1)
    console.log(feedIndex)
  }

  const lastFeed = () => {
    setFeedIndex(feedIndex = feedIndex - 1)
    console.log(feedIndex)
  }

  const likeImage = () => {
    //todo
    //send put request to add username to "likes" array
  }

  const toggleComment = () => {
    setShowComment(!showComment)
    console.log('toggling comment?')
  }

    return (
        <div className="Feed">
          <a className="userName">{samplePosts[feedIndex].username}</a>
          <a className="userDesc">{samplePosts[feedIndex].description}</a>
            <img
            src={samplePosts[feedIndex].url}
            width="300"
            height="445"
            className="feedImage"
            alt=""
          />
          <img onClick = {likeImage}
            src={heart}
            width="50"
            height="50"
            className="feedLike"
            alt=""
          />
          <img onClick={toggleComment}
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
          { showComment && <div className="commentSection">
            <a className="commentUsername">
            {samplePosts[feedIndex].comments[0].username}
            </a>
            <a className="commentText">
            {samplePosts[feedIndex].comments[0].text}
            </a>
            <a className="commentUsername2">
            {samplePosts[feedIndex].comments[1].username}
            </a>
            <a className="commentText2">
            {samplePosts[feedIndex].comments[1].text}
            </a>
          </div>}
        </div>
    )
}

export default Feed;
