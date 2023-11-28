import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Recent Events!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/que.jpeg'
              text='✨ QUERENCIA 2022 ✨'
              label='23 Sept'
              path='/services'
            />
            <CardItem
              src='images/yuktii.jpeg'
              text='Yukti 2023, Poster Presentation'
              label='18 Sept'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/wat.jpeg'
              text='Two Days Workshop on Drone Designing and Manufacturing'
              label='5 Sept'
              path='/services'
            />
            <CardItem
              src='images/watmetallon.webp'
              text='Wat Metallon 2023'
              label='28 Aug'
              path='/products'
            />
            <CardItem
              src='images/2day.jpeg'
              text='Two Days Workshop on "Advanced Software in Civil Engineering-BIM"'
              label='15 Aug'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
      <h1>Recent News!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/research.jpeg'
              text='Prominent Researchers From Mgit Engage In Collaborative Meetings At Dmrl'
              label='31 Oct'
              path='/services'
            />
            <CardItem
              src='images/mgitg.jpg'
              text='G-hack: Annual Hackathon 2023 (gitam University)'
              label='27 Oct'
              path='/services'
            />
            <CardItem
              src='images/cigniti.jpg'
              text='Mgit Delegation’s Insightful Visit To Iit-hyderabad Bolsters R&d Prospects'
              label='21 Oct'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/mechanical.jpeg'
              text='Cigniti Convcation Program'
              label='19 Oct'
              path='/services'
            />
            <CardItem
              src='images/host.jpg'
              text=' Mgit Successfully Hosts Internal Hackathon For Smart India Hackathon 2023'
              label='28 Sept'
              path='/products'
            />
            <CardItem
              src='images/DBS.jpg'
              text='Expert Talk On Education 4.0: Embracing Artificial Intelligence In Education'
              label='16 Sept'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;