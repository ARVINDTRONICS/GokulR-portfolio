import React from "react";
import SocialLinks from "./SocialLinks";

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">I am Gokul Rajendran !</h1>
      <h3>
        I'm a <span>Mechanical</span> and
        <span> Energy Engineering</span> enthusiast from{" "}
        <span>Tiruppur,India</span>.My<span> Areas of Interest</span> include{" "}
        <span>
          Heat Transfer, Refrigeration &amp; AirConditioning, Energy
          Conservation Audit and Solar Thermal Energy.{" "}
        </span>
        Let's start scrolling and learn more about me .
      </h3>
      <hr />
      <SocialLinks />
    </div>
  </div>
);

export default Banner;
