import React from "react";
import { FootCon, FootNav } from "./Footer-Style";
import {
  AiFillApple,
  AiFillCar,
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FootCon>
      <div id="black-footer">
        <FootNav>
          <div className="icons-fold">
            <AiFillCar className="car-icon" size={"35px"} color="var(--voilet)" />
            <h1>
              Odd<span>Cars</span>
            </h1>
          </div>
          <div className="fold">
            <Link>About Us</Link>
            <Link>Resources</Link>
            <Link>Contacts</Link>
          </div>
          <div className="social-link">
            <AiFillInstagram className="icon" color="grey" size={"20px"} />
            <AiOutlineTwitter className="icon" color="grey" size={"20px"} />
            <FaFacebookF className="icon" color="grey" size={"20px"} />
            <FaWhatsapp className="icon" color="grey" size={"20px"} />
          </div>
        </FootNav>

        <div id="blue-footer">
          <div className="overall">
            <div className="content">
              <h2>Partronize OddiCars Today !</h2>
              <h5>
                Get the app to explore the world of premium cars,get fast and
                easy access to many exclusive services for both sales and rent
              </h5>
            </div>
            <div className="download">
              <button>
                <span>
                  <AiFillApple className="download" size={"20px"} />
                </span>
                Download app
              </button>
            </div>
          </div>
        </div>
      </div>
    </FootCon>
  );
};

export default Footer;
