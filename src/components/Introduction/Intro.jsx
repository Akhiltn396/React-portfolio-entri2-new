import React from "react";
import "./Intro.css";
import Me from "../../img/Akhil_photo-removebg-preview_adobe_express.png";
import DownloadButton from "../resume/DownloadButton";
import { Link } from "react-router-dom";
const Intro = () => {
  return (
    <div>
      <div className="intro">
        <div className="i-left">
          <DownloadButton/>
          <div className="i-left-wrapper">
            <h2 className="i-intro">Hello, My name is</h2>
            <h2 className="i-name">Akhil T N</h2>

            <div className="i-title">
              <div className="i-title-wrapper">
                <div className="i-title-item">Front End Developer</div>
                <div className="i-title-item">Back End Developer</div>
                <div className="i-title-item">MERN Stack Developer</div>
                <div className="i-title-item">Full Stack Developer</div>
              </div>
            </div>
            <div className="i-desc">
              I design and develop web applications of all sizes,keen to learn
              more in creating stylish and modern websites.Specialized in
              frontend and backend with Javascript frameworks.
            </div>
          </div>
        </div>
        <div className="i-right">
          <div className="i-bg"></div>
          <img src={Me} alt="" className="i-img" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
