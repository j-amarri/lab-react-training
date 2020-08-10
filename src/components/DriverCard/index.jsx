import React from 'react';
import './style.css';
import Rating from './../../components/Rating';

const DriverCardComponent = (props) => {
  return (
    <div className="DriverCard">
      <img src={props.img} alt="" />
      <div className="DriverDetails">
        <h3>{props.name}</h3>
        <Rating rating={props.rating} />
        <p>
          {props.car.model} - {props.car.licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCardComponent;
