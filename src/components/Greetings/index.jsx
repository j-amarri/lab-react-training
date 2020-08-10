import React from 'react';
import './style.css';

const GreetingsComponent = (props) => {
  let helloLang;
  switch (props.lang) {
    case 'de':
      helloLang = 'Hallo';
      break;
    case 'en':
      helloLang = 'Hello';
      break;
    case 'es':
      helloLang = 'Hola';
      break;
    case 'fr':
      helloLang = 'Bonjour';
      break;
    default:
      helloLang = 'Hello';
  }
  return (
    <div className="Greetings">
      <p>
        {helloLang} {props.children}
      </p>
    </div>
  );
};

export default GreetingsComponent;
