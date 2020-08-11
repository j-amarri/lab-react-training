import React from 'react';
import './style.css';
// composition to nest one component inside the other
import Rating from './../../components/Rating';

const DriverCardComponent = (props) => {
  console.log(props.rating);
  return (
    <div className="DriverCard">
      <img src={props.img} alt="" />
      <div className="DriverDetails">
        <h3>{props.name}</h3>
        <Rating>{props.rating}</Rating>
        <p>
          {props.car.model} - {props.car.licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCardComponent;
