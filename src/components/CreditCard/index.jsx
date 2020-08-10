import React from 'react';
import './style.css';

const CreditCardComponent = (props) => {
  return (
    <div
      style={{ backgroundColor: props.bgColor, color: props.color }}
      className="CreditCard"
    >
      <div className="CardType">
        <h4>{props.type}</h4>
      </div>
      <h5>{props.number}</h5>
      <p>{props.owner}</p>
      <div className="CardDetails">
        <p>
          Expires on {props.expirationMonth}/{props.expirationYear}
        </p>
        <p>{props.bank}</p>
      </div>
    </div>
  );
};

export default CreditCardComponent;
