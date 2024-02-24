import React from 'react';
import logo from '../../Assets/images/Logo.png';
import './style.css'


const Loading = () => {
  return (
    <div className="loading">
        <img src={logo}/>
    </div>
  );
}

export default Loading;
