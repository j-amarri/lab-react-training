import React from 'react';
import './style.css';

const BoxColorComponent = (props) => {
  return (
    <div
      style={{
        backgroundColor: 'rgb(' + props.r + ',' + props.g + ',' + props.b + ')',
      }}
      className="BoxColor"
    >
      <p>
        rgb({props.r},{props.g},{props.b})
      </p>
    </div>
  );
};

export default BoxColorComponent;
