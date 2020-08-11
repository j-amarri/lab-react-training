import React from 'react';
import './style.css';

class LikeButton extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
    };
    console.log(this);
  }

  handleIncrementClick = () => {
    this.setState({
      value: this.state.value + 1,
    });
  };

  render() {
    return (
      <div className="LikeButton">
        <button onClick={this.handleIncrementClick}>
          {this.state.value} Likes
        </button>
      </div>
    );
  }
}

export default LikeButton;
