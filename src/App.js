import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ReactDom from 'react-dom';
import Button from 'material-ui/Button'
import injectTapEventPlugin from 'react-tap-event-plugin';
import {  BrowserRouter as Router, Route } from 'react-router-dom';


import HomePage from './components/HomePage.jsx';
import Header from './components/Header.jsx';



class App extends Component {
  render() {
    return (
    <Router>
        <div className='container'>
          <div className="row">
              <div className='col-xs-10 col-xs-offset-1'>
                  <Header/>
              </div>
          </div>
          <div className="row">
              <div className='col-xs-10 col-xs-offset-1'>
                   <Route exact path="/" component={HomePage} />
                   <Route exact path="/header" component={Header} />
                  
              </div>
          </div>
          <hr/>
          <div className="row">
              <div className='col-xs-10 col-xs-offset-1'>
                <Button variant="raised" color="primary">
                    Hello World
                </Button>
              </div>
          </div>
          
        </div>
    </Router>

        //****   <Router>
//     <div className ="container">
//     
//     <Route exact path="/" component={Home} />
//     <Route exact path="/about" component={About} />
//     <Route exact path="/Search" component={Search} />
//     <Route path="/contact" component={Contact} />
//   </div>
// </Router>
// */

      
    );
  }
}

export default App;
