import React from "react";
import { HeroCon } from "./HeroStyles";

export const Hero = () => {
  return (
    <HeroCon>
      <div className="content">
        <div className="hero-text">
          <h2>
            Search for best cars which are available for sales and rentals
          </h2>
          <h5>
            Find cars for sale, local dealers, and advice. Also, our
            price-badging and price-drop notifications keep you informed of
            potential deals.
          </h5>
          <div className="hero-btn">
            <>
            <button>
                Book Now
            </button>
            </>

            <>
            <button>
                Buy Now
            </button>
            </>
          </div>
        </div>
      </div>
    </HeroCon>
  );
};
export default Hero;
