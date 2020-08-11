import React from 'react';
import './style.css';

// class because we need to save some states
class Dice extends React.Component {
  constructor() {
    super();
    this.state = {
      image: this.pickRandomImage(),
      rolling: false,
    };
  }

  handleDiceClick = () => {
    console.log('Dice was clicked');
    this.setState({
      image: 'img/dice-empty.png',
      rolling: true,
    });
    if (!this.state.rolling) {
      setTimeout(() => {
        this.setState({
          image: this.pickRandomImage(),
          rolling: false,
        });
      }, 1000);
    }
  };

  pickRandomImage() {
    const dots = Math.ceil(Math.random() * 6);
    return `img/dice${dots}.png`;
  }

  render() {
    return (
      <div className="Dice">
        <img src={this.state.image} alt="Dice" onClick={this.handleDiceClick} />
      </div>
    );
  }
}

export default Dice;

// create class
// render image
//
