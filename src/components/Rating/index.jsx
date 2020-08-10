import React from 'react';
import './style.css';

const RatingComponent = (props) => {
  let rating = [];
  for (let i = 0; i < props.children; i++) {
    rating.push('★');
  }
  while (rating.length < 5) {
    rating.push('☆');
  }
  return (
    <div className="Rating">
      <p>{rating}</p>
    </div>
  );
};

export default RatingComponent;
