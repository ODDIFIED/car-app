import React from "react";
import { Link } from "react-router-dom";
import { Navcon } from "./NavbarStyles";
import { AiFillCar, AiFillApple } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [extend, setExtend] = useState(false);

  return (
    <Navcon>
      <div className="icons-fold" extend={extend}>
        <AiFillCar className="car-icon" size={"35px"} color="var(--voilet)" />
        <h1>
          Odd<span>Cars</span>
        </h1>
      </div>
     
      <div className="link-con">
        <div className="fold">
          <Link>About</Link>
          <Link>
            <select>
              <option>Features</option>
              <option value="Toyota">Toyota</option>
              <option value="Lexus">Lexus</option>
              <option value="mercedes">Mercedes</option>
              <option value="Chevrolet">Chevrolet</option>
            </select>
          </Link>
          <Link>Resources</Link>
          <Link>Contacts</Link>
          <div className="responsive-btn">
            <button
              onClick={() => {
                setExtend((curr) => !curr);
              }}
            >
              {extend ? <>&#10005;</> : <>&#8801;</>}{" "}
            </button>
          </div>
        </div>
      </div>

        <div className="download">
          <button>
            <span>
              <AiFillApple size={"18px"} />
            </span>
            Download app
          </button>
        </div>
      {extend &&  ( <extendedCon>
      <div className="fold-active">
        <Link>About</Link>
          <Link>
            <select>
              <option>Features</option>
              <option value="Toyota">Toyota</option>
              <option value="Lexus">Lexus</option>
              <option value="mercedes">Mercedes</option>
              <option value="Chevrolet">Chevrolet</option>
            </select>
          </Link>
          <Link>Resources</Link>
          <Link>Contacts</Link>
          <div className="download">
          <button>
            <span>
              <AiFillApple size={"18px"} />
            </span>
            Download app
          </button>
        </div>
        </div>
        </extendedCon>)}
    </Navcon>
  );
};
export default Navbar;
