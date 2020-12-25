import React from "react";
import { FaPlus, FaTag } from "react-icons/lib/fa";

import Coffee from "../assets/images/portfolio/coffee2.jpg";
import Console from "../assets/images/portfolio/console2.jpg";
import Judah from "../assets/images/portfolio/judah3.jpg";
import IntoTheLight from "../assets/images/portfolio/into-the-light2.jpg";
import Farmerboy from "../assets/images/portfolio/farmerboy2.jpg";
import Girl from "../assets/images/portfolio/girl2.jpg";
import Origami from "../assets/images/portfolio/origami2.jpg";
import Retrocam from "../assets/images/portfolio/retrocam2.jpg";

import CoffeeModal from "../assets/images/portfolio/modals/m-coffee2.jpg";
import ConsoleModal from "../assets/images/portfolio/modals/m-console2.jpg";
import JudahModal from "../assets/images/portfolio/modals/m-judah3.jpg";
import IntoTheLightModal from "../assets/images/portfolio/modals/m-intothelight2.jpg";
import FarmerboyModal from "../assets/images/portfolio/modals/m-farmerboy2.jpg";
import GirlModal from "../assets/images/portfolio/modals/m-girl2.jpg";
import OrigamiModal from "../assets/images/portfolio/modals/m-origami2.jpg";
import RetrocamModal from "../assets/images/portfolio/modals/m-retrocam2.jpg";

const Portfolio = () => (
  <section id="portfolio">
    <div className="row">
      <div className="twelve columns collapsed">
        <h1>Check Out Some of My Works.</h1>

        <div
          id="portfolio-wrapper"
          className="bgrid-quarters s-bgrid-thirds cf"
        >
          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="#modal-01" title="">
                <img alt="" src={Coffee} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>
                      Potential Strategies to prepare a unique RFQ–The Indian
                      Valve Sourcing and Expediting Series
                    </h5>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="#modal-02" title="">
                <img alt="" src={Console} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>
                      Role of Various Accentuated Parameters in Extenuating
                      Tedious Experimental Analysis for Customized Centrifugal
                      Pumps
                    </h5>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="#modal-03" title="">
                <img alt="" src={Judah} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>
                      Computational Investigations on Ducting for HVAC system: A
                      case study
                    </h5>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="#modal-04" title="">
                <img alt="" src={IntoTheLight} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Analysis of Nano-coated bullet proof vest</h5>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="#modal-05" title="">
                <img alt="" src={Farmerboy} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Motorized welding slag remover</h5>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="#modal-06" title="">
                <img alt="" src={Girl} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Sewage Sludge cleaner</h5>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="#modal-07" title="">
                <img alt="" src={Origami} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Optimized Bimetallic Heatsink</h5>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="#modal-08" title="">
                <img alt="" src={Retrocam} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Electrical and Lighting Audit</h5>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div id="modal-01" className="popup-modal mfp-hide">
        <img className="scale-with-grid" src={CoffeeModal} alt="" />

        <div className="description-box">
          <h4>
            Potential Strategies to prepare a unique RFQ–The Indian Valve
            Sourcing and Expediting Series
          </h4>
          <p>
            International Journal of Advanced Research and Innovation, Volume
            07, Issue 03 (2019), pp. 270-273
          </p>
          <span className="categories">
            <FaTag /> Paul Gregory F, Gokul R
          </span>
        </div>

        <div className="link-box">
          <a
            target="_black"
            href="https://ijari.org/assets/papers/7/3/IJARI-ME-19-09-124.pdf"
          >
            Details
          </a>
          <a href="#portfolio" className="popup-modal-dismiss">
            Close
          </a>
        </div>
      </div>

      <div id="modal-02" className="popup-modal mfp-hide">
        <img className="scale-with-grid" src={ConsoleModal} alt="" />

        <div className="description-box">
          <h4>
            Role of Various Accentuated Parameters in Extenuating Tedious
            Experimental Analysis for Customized Centrifugal Pumps
          </h4>
          <p>
            International Research Journal of Multidisciplinary Technovation
            (IRJMT), Mar,2020.
          </p>
          <span className="categories">
            <FaTag />
            F. Paul Gregory, R. Gokul, C.M. Balamurugan
          </span>
        </div>

        <div className="link-box">
          <a
            target="_blank"
            href="https://www.mapletreejournals.com/index.php/irjmt/article/download/381/249"
          >
            Details
          </a>
          <a href="#portfolio" className="popup-modal-dismiss">
            Close
          </a>
        </div>
      </div>

      <div id="modal-03" className="popup-modal mfp-hide">
        <img className="scale-with-grid" src={JudahModal} alt="" />

        <div className="description-box">
          <h4>
            Computational Investigations on Ducting for HVAC system: A case
            study
          </h4>
          <p>
            46 th National conference on Fluid Mechanics and Fluid Power 2019,
            Dec. 11, 2019.
          </p>
          <span className="categories">
            <FaTag />
            Gokul R, Vijai kaarthi V, Babu S
          </span>
        </div>

        <div className="link-box">
          <a href="#portfolio" className="popup-modal-dismiss">
            Close
          </a>
        </div>
      </div>

      <div id="modal-04" className="popup-modal mfp-hide">
        <img className="scale-with-grid" src={IntoTheLightModal} alt="" />

        <div className="description-box">
          <h4>Into the Light</h4>
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit.
          </p>
          <span className="categories">
            <FaTag />
            Photography
          </span>
        </div>

        <div className="link-box">
          <a href="http://www.behance.net">Details</a>
          <a href="#portfolio" className="popup-modal-dismiss">
            Close
          </a>
        </div>
      </div>

      <div id="modal-05" className="popup-modal mfp-hide">
        <img className="scale-with-grid" src={FarmerboyModal} alt="" />

        <div className="description-box">
          <h4>Analysis of Nano-coated bullet proof vest</h4>
          <p>
            A Nano fiber coated vest instead of a plated vest to increase the
            strength to weight ratio and also provide flexibility for the
            soldier. It is then compared with ordinary vest and feasibility
            results are predicted. The regular vest is better on cost and Nano
            fiber vest is less weight and flexible.
          </p>
          <span className="categories">
            <FaTag />
            Gokul R
          </span>
        </div>

        <div className="link-box">
          <a href="#portfolio" className="popup-modal-dismiss">
            Close
          </a>
        </div>
      </div>

      <div id="modal-06" className="popup-modal mfp-hide">
        <img className="scale-with-grid" src={GirlModal} alt="" />

        <div className="description-box">
          <h4>Motorized welding slag remover</h4>
          <p>
            A wire brush connected to the shaft which is fitted to the crank.
            The crank shaft is connected to the motor through which it can be
            operated. It can be used for cleaning of welded parts in batch
            production.
          </p>
          <span className="categories">
            <FaTag />
            Gokul R
          </span>
        </div>

        <div className="link-box">
          <a href="#portfolio" className="popup-modal-dismiss">
            Close
          </a>
        </div>
      </div>

      <div id="modal-07" className="popup-modal mfp-hide">
        <img className="scale-with-grid" src={OrigamiModal} alt="" />

        <div className="description-box">
          <h4>Sewage Sludge Cleaner</h4>
          <p>
            A helical cutter attached to a shaft which is enclosed in a
            partially open cylindrical casing. The cutter-shaft is rotated by a
            belt drive. The sludge accumulated is transferred through a screw
            pump. The depth of the setup can be adjusted using lead screw.
          </p>
          <span className="categories">
            <FaTag />
            Gokul R
          </span>
        </div>

        <div className="link-box">
          <a href="#portfolio" className="popup-modal-dismiss">
            Close
          </a>
        </div>
      </div>

      <div id="modal-08" className="popup-modal mfp-hide">
        <img className="scale-with-grid" src={RetrocamModal} alt="" />

        <div className="description-box">
          <h4>Optimized Bimetallic Heatsink</h4>
          <p>
            Copper base is sandwiched over an Aluminium Heatsink and four
            voltage regulators are mounted over the heatsink from which the heat
            is to be dissipated. The heatsink fin is optimized to maintain the
            chip below 85°C. Fin height, Fin thickness and Fin spacing are
            optimized to improve the efficient heat transfer.
          </p>
          <span className="categories">
            <i className="fa fa-tag" />
            Gokul R
          </span>
        </div>

        <div className="link-box">
          <a href="#portfolio" className="popup-modal-dismiss">
            Close
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Portfolio;
