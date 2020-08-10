import React from 'react';
import './style.css';

const IdCardComponent = (props) => {
  return (
    <div className="IdCard">
      <img height="150px" src={props.picture} alt="" />
      <div className="IdInfo">
        <p>Last name: {props.lastName}</p>
        <p>First name: {props.firstName}</p>
        <p>Gender: {props.gender}</p>
        <p>Height: {props.height}</p>
        <p>Birth: {props.birth.toString()}</p>
      </div>
    </div>
  );
};

export default IdCardComponent;
