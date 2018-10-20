import React, { Component } from 'react';
import logo from './logo.svg';
import fireImg from './fire.png';
import cameraImg from './photo-camera.png'
import menu from './menu-1.png'
import { Link } from 'react-router-dom';
import { Route, NavLink} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="main-div">
      <header className="header-menu">
        <img src={menu} className="menu-img"/>
      </header>
        <section className="home-container">
        <h2 className="fire-title">FIRE<span className="fire-dash">-</span>WIRE</h2>
        <img src={fireImg} className='fire-img'/>
        <h2 className="report-fire">Report a Fire</h2>
        <NavLink to='/information' className='nav'><img src={cameraImg} className='camera-img'/></NavLink>
        </section>
      </div>
    );
  }
}

export default App;
