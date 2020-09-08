import React from 'react';
import { HashRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

import Logo from '../assets/components/Logo';
import Nav from '../assets/components/Nav';
import Routes from './Routes';
import Footer from '../assets/components/Footer';

function App() {
  return (
    <HashRouter>
      <div className="app">
        <Logo/>
        <Nav/>
        <Routes/>
        <Footer/>
      </div>
    </HashRouter>
  );
}

export default App;
