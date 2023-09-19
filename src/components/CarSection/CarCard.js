import React from "react";
import { CardHolder } from "./CarSection-Styles";
import { BiCurrentLocation } from 'react-icons/bi';

const CarCard = ({ item }) => {
  const {
    id,
    price,
    img,
    Location,
    Mileage,
    mode,
    Cyclinder,
    description,
    brand,
    car_color,
    name,
  } = item;
  return (
    <CardHolder className="CardHolder">
      <div className="img-folder">
        <img src={img} />
      </div>
      <div>
        <article>
          <h6> {name} </h6>
          <div className="mode-details">
            <h5>{mode} </h5>
            <h5>{Mileage} </h5>
            <h5>{Cyclinder} </h5>
          </div>
          <hr />
          <div className="price-location">
            <h5> $ {price} </h5>
            <h6> <span>< BiCurrentLocation /></span>  {Location} </h6>
            
          </div>
          <>
            <button>Contact dealer</button>
          </>
        </article>
      </div>
    </CardHolder>
  );
};

export default CarCard;
