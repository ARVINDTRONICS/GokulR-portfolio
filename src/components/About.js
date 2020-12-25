import React from "react";
import { FaCloudDownload } from "react-icons/lib/fa";

import profilePic from "../assets/images/profilePic.jpeg";

const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src={profilePic} alt="" />
      </div>
      <div className="nine columns main-col">
        <div className="row">
          <div className="columns contact-details">
            <h2>Contact Details</h2>
            <p className="address">
              <span>gokulrajendran19@gmail.com</span>
              <br />
              <span>+91-8903442989</span>
              <br />
            </p>
          </div>
          <div className="columns download">
            <p>
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1bwTeh3xjLcMef-FGlEc2ohHXOIXkXC3-/view?usp=sharing"
                className="button"
              >
                <FaCloudDownload /> Download Resume
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
