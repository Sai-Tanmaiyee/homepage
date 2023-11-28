import React from 'react';
import './home.css';
import { Button } from './Button';
import './HeroSection.css';
import styled from "styled-components";
import { Redirect } from 'react-router-dom';

function HeroSection(props) {
  return (
    <div className='hero-container'>
     {/* <div> { props.user && <Redirect to="/home" /> } </div>
      <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <img src='images/mgit.jpg' alt='' />
      <h1>Mahatma Gandhi Institute of Technology</h1>
      <p>Alumni</p>
      <div className='hero-btns'> 
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >Let's connect
        </Button>  
      </div>
    </div>
  );
}


export default HeroSection;

