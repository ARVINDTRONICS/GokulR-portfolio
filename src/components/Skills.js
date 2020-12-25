import React from "react";

const Skills = () => (
  <div className="row skill">
    <div className="three columns header-col">
      <h1>
        <span>Skills</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <p>Modelling, Analysis and Energy Tools</p>
      <div className="bars">
        <ul className="skills">
          <li>
            <span className="bar-expand photoshop" />
            <em>AutoCAD, Creo, Solid Works</em>
          </li>
          <li>
            <span className="bar-expand illustrator" />
            <em>Ansys Fluent, FloTHERM</em>
          </li>
          <li>
            <span className="bar-expand wordpress" />
            <em>Dialux, PVsyst, Ductulator, Symphonie NRG</em>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Skills;
