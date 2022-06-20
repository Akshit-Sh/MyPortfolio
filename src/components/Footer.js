import React from "react";

function Footer(props) {

  
  const {setProgress} = props;

  return (
    <>
      <div className="container socialSection">
        <a
          target="__blank"
          className="socialLinks"
          href="https://youtube.com/c/AkshitProductions"
          onClick={() => setProgress(100)}
        >
          <div className="social" id="fb"></div>
        </a>
        <a
          target="__blank"
          className="socialLinks"
          href="https://www.instagram.com/theakshitsharma_/"
          onClick={() => setProgress(100)}
        >
          <div className="social" id="insta"></div>
        </a>
        <a
          target="__blank"
          className="socialLinks"
          href="https://www.linkedin.com/in/akshit-2302/"
          onClick={() => setProgress(100)}
        >
          <div className="social" id="linkedIn"></div>
        </a>
        <a
          target="__blank"
          className="socialLinks"
          href="https://github.com/Akshit-Sh"
          onClick={() => setProgress(100)}
        >
          <div className="social" id="Github"></div>
        </a>
      </div>
    </>
  );
}

export default Footer;
