import React from 'react'
import profilePic from './images/pro-pic.jpeg'

function About() {
    return (
      <div>
      <div id="aboutComp" className="aboutPlacement my-5" >
      <div  className="aboutResposive d-flex ">
      <div
        className="
        col-md-3
          my-2
          d-flex
          align-items-center
          justify-content-center
        "
      >
        <img id="profile-pic" src={profilePic} alt="" />
      </div>
      <div className="col-md-9 px-3 py-3 my-2 mx-5">
        <h2>
          I'm
          <b className="boldFont"> Akshit Sharma </b>
          , a <strong className="boldFont" > full stack web developer </strong>.
        </h2>
        <p className="fontStyle" >
          currently pursuing
          my bachelor's in Computer Science & Engineering.
          Also works as a freelancer and always try to learn something new.
          You can also check me out on <a href="https://www.fiverr.com/web_devloper2?up_rollout=true" target="__blank"> Fiverr</a> and <a href="https://www.freelancer.in/u/akshitsh" target="__blank">Freelancer.com </a>
        </p>
      </div>
    </div>
    </div>
    </div>
    )
}

export default About
