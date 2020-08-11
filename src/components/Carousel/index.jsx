import React from 'react';

class Carousel extends React.Component {
  constructor() {
    super();
    this.state = {
      index: 0,
    };
  }

  /*   handleClickRight = () => {
    this.setState({
      index:
        this.state.index === this.props.imgs.length - 1
          ? 0
          : this.state.index - 1,
    });
  };

  handleClickLeft = () => {
    this.setState({
      index:
        this.state.index === 0
          ? this.props.imgs.length - 1
          : this.state.index - 1,
    });
  }; */

  handleClickRight = () => {
    this.navigate(1);
  };

  handleClickLeft = () => {
    this.navigate(-1);
  };

  navigate(value) {
    const currentIndex = this.state.index;
    const index =
      (currentIndex + value + this.props.imgs.length) % this.props.imgs.length;
    this.setState({
      index,
    });
  }

  render() {
    return (
      <div className="carousel">
        <button onClick={this.handleClickLeft}>{'<'}</button>
        <button onClick={this.handleClickRight}>{'>'}</button>
        <img src={this.props.imgs[this.state.index]} alt="Carousel" />
      </div>
    );
  }
}

export default Carousel;
