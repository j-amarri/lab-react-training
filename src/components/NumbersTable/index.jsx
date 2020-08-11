import React from 'react';
import './style.css';

function generateArray(limit) {
  const arr = [];
  for (let i = 1; i < limit + 1; i++) {
    arr.push(i);
  }
  return arr;
}

const NumbersTable = (props) => {
  const numArray = generateArray(props.limit);
  return (
    <div className="NumbersTable">
      {numArray.map((num) => {
        if (num % 2 === 0) {
          return (
            <p
              className="NumberBox"
              style={{
                backgroundColor: 'red',
              }}
              key={num}
            >
              {num}
            </p>
          );
        } else {
          return (
            <p className="NumberBox" key={num}>
              {num}
            </p>
          );
        }
      })}
    </div>
  );
};

export default NumbersTable;
