import React from 'react';
import logo from '../../Assets/images/logo.png';
import './style.css'


const Loading = () => {
  return (
    <div className="loading">
      <img src={logo} alt='Dolce frutii' />
    </div>
  );
}

export default Loading;
