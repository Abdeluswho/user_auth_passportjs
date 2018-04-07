import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ReactDom from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';
import { browserHistory, BrowserRouter as Router, Route, } from 'react-router';


import HomePage from './components/HomePage.jsx';
import Header from './components/Header.jsx';



class App extends Component {
  render() {
    return (
        <div className='container'>
          <div className="row">
              <div className='col-xs-10 col-xs-offset-1'>
                  <Header/>
              </div>
          </div>
          <div className="row">
              <div className='col-xs-10 col-xs-offset-1'>
                  <HomePage/>
              </div>
          </div>
        </div>
      
    );
  }
}

export default App;
