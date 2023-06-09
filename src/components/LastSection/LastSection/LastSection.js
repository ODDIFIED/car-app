import React from "react";
import lamborgini from "../images/lamgbogini blue view 1.png";
import corvette from "../images/2019_chevrolet_corvette-zr1-coupe_2019.png";
import { Container } from "../LastSection/LastSection-Styles";
import { AiFillCustomerService } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineHighQuality } from "react-icons/md";
import Footer from "../../Footer/Footer";

const LastSection = () => {
  return (
    <Container>
      <h2>Why Choose Us!</h2>
      <div className="pic-folder">
        <img id="lamborginiTwo" src={lamborgini} alt="lamborgini" />
        <img id="corvette" src={corvette} alt="corvette" />
      </div>
      <div className="Content">
        <div className="left">
          <h4>Why Choose Us?</h4>
          <h5>We give you the best value for your money</h5>
          <h6>
            We have tailored our services around what our community needs.
            ODDICARS is an excellent choice for European Vehicles, Fast Cars,
            Mercedes Sprinter Vans as well as all Domestic Vehicles.
          </h6>
          <button>More Details</button>
        </div>
        <div className="right">
          <div className="confold">
            <div>
              <AiFillCustomerService className="icon" color="#530093" size={"9vh"} />
            </div>
            <div>
              <h4>Our Customer Service</h4>
              <h5>
                We have a friendly expert team who have a combined industry
                experience to answer all your questions and all vehicle
                requirements.
              </h5>
            </div>
          </div>
          <div className="confold">
            <div>
              <TbTruckDelivery className="icon" color="#530093" size={"10vh"} />
            </div>
            <div>
              <h4>Fast Delivery</h4>
              <h5>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                sollicitudin diam leo, ut mattis felis placerat eget.
              </h5>
            </div>
          </div>
          <div className="confold">
            <div>
              <MdOutlineHighQuality className="icon" color="#530093" size={"10vh"} />
            </div>
            <div className="small-write">
              <h4>High Quality/Standard Vehicles</h4>
              <h5>
                Morbi accumsan nec magna ac tincidunt. Morbi non varius risus.
                Integer et augue eu erat lacinia elementum nec sed orci.
                
              </h5>
            </div>
          </div>
        </div>
      </div>

    </Container>
  );
};

export default LastSection;
