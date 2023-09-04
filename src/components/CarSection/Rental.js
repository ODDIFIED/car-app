import React, { useState } from "react";
import { RentalAPI } from "../../Data";

const Rental = () => {
  const [Car] = useState(RentalAPI);
  const [Value, setValue] = useState(0);
  const {  name, brand, price, img, AC, Transmission, Fuel } = Car[Value];
  return (
    <div>
      <h4>Collections</h4>
      <h2>Our rental fleet</h2>
      <div className="rent-fold">
        <div className="btn-folder">
          {Car.map((item, id) => {
            return (
              <button className="rent-btn" onClick={() => setValue(id)}>
                {item.fullname}
              </button>
            );
          })}
        </div>
        <div className="rent-img">
          <img src={img} alt={name} />
        </div>
        <div className="car-data">
          <h5 className="rent-price">{price}/ rent per day</h5>
          <h5>Model - {name}</h5>
          <h5>Brand - {brand}</h5>
          <h5>Transmission - {Transmission}</h5>
          <h5>AC - {AC}</h5>
          <h5>Fuel - {Fuel}</h5>
        </div>
      </div>
    </div>
  );
};

export default Rental;
