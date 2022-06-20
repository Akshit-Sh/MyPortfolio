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
          href="#"
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
      {/*  eslint-disable-next-line */}
      {/* <marquee behavior="" direction="">Developed with ❤️ by Arsh</marquee> */}
    </>
  );
}

export default Footer;
