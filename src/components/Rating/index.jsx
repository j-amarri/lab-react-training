import React from 'react';
import './style.css';

const RatingComponent = (props) => {
  let stars = Math.round(parseFloat(props.children));
  console.log(stars);
  let rating = [];
  for (let i = 0; i < stars; i++) {
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
