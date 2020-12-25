import React from "react";

const Education = () => (
  <div className="row education">
    <div className="three columns header-col">
      <h1>
        <span>Education</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>PSG College of Technology, Coimbatore.</h3>
          <p className="info">
            M.E Energy Engineering
            <span>&bull;</span>
            <em className="date">2020</em>
            <span>&bull;</span>
            <em className="date">82.5%</em>
          </p>

          <p>
            PSG College of Technology is an autonomous, government aided,
            private engineering college in Coimbatore, India. It is affiliated
            with Anna University. It is affiliated to PSG and Sons Charities
            Trust. Among engineering colleges in India, PSG College of
            Technology was ranked 6th in private engineering colleges by India
            Today in 2018.
          </p>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3>Jansons institute of technology, Coimbatore.</h3>
          <p className="info">
            B.E Mechanical Engineering
            <span>&bull;</span>
            <em className="date">2017</em>
            <span>&bull;</span>
            <em className="date">79%</em>
          </p>

          <p>
            Jansons Institute of Technolgy(JIT) is a world class Engineering
            College established in 2009 and the second venture of the Jansons
            Foundation in the field of Higher Education. JIT has been promoted
            by the Jansons Business Group which comprises 14 operating companies
            in five business sectors, predominantly in the Textile sector
            connecting 40 countries across the world and other sectors are
            Granite, Retail, Medicare and Education.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Education;
