import React from 'react';
import './style.css';

class ClickablePicture extends React.Component {
  constructor() {
    super();
    this.state = {
      toggle: false,
    };
  }

  handleClickablePictureClick = () => {
    this.setState({
      toggle: !this.state.toggle,
    });
  };

  render() {
    return (
      <div className="ClickablePicture">
        <img
          onClick={this.handleClickablePictureClick}
          src={
            this.state.toggle
              ? './../../img/persons/maxence.png'
              : './../../img/persons/maxence-glasses.png'
          }
          alt="Maxence"
        />
        ;
      </div>
    );
  }
}

export default ClickablePicture;
