import React from 'react';
import './style.css';
import profiles from './../../data/berlin.json';

const FaceBook = () => {
  console.log(profiles);
  return (
    <div>
      {profiles.map((user) => {
        let type;
        if (user.isStudent) {
          type = 'Student';
        } else {
          type = 'Teacher';
        }
        return (
          <div key={user.img} className="FaceBookProfiles">
            <img src={user.img} alt="User" />
            <div className="FaceBookDetails">
              <p>
                <strong>First Name: </strong>
                {user.firstName}
              </p>
              <p>
                <strong>Last name: </strong>
                {user.lastName}
              </p>
              <p>
                <strong>Country: </strong>
                {user.country}
              </p>
              <p>
                <strong>Type: </strong>
                {type}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FaceBook;
