import React from 'react';
import './style.css';

const Random = (props) => {
  let randomNumber = Math.floor(Math.random() * Math.floor(props.max));
  return (
    <p className="RandomNumber">
      Random value between: {props.min} and {props.max} = {randomNumber};
    </p>
  );
};

export default Random;
