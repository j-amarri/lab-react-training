import React from 'react';
import './style.css';

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
}

function rgbToHex(r, g, b) {
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

const BoxColorComponent = (props) => {
  const hexColor = rgbToHex(props.r, props.g, props.b);
  return (
    <div
      style={{
        backgroundColor: 'rgb(' + props.r + ',' + props.g + ',' + props.b + ')',
      }}
      className="BoxColor"
    >
      <p>
        rgb({props.r},{props.g},{props.b}){hexColor}
      </p>
    </div>
  );
};

export default BoxColorComponent;
