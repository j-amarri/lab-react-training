import React from 'react';
import './style.css';

const IdCardComponent = (props) => {
  return (
    <div className="IdCard">
      <img height="150px" src={props.picture} alt="" />
      <div className="IdInfo">
        <p>
          <strong>Last name: </strong>
          {props.lastName}
        </p>
        <p>
          <strong>First name: </strong>
          {props.firstName}
        </p>
        <p>
          <strong>Gender: </strong>
          {props.gender}
        </p>
        <p>
          <strong>Height: </strong>
          {props.height / 100}m
        </p>
        <p>
          <strong>Birth date: </strong>
          {props.birth.toDateString()}
        </p>
      </div>
    </div>
  );
};

export default IdCardComponent;
