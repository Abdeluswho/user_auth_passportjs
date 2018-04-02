import React from 'react';
import ReactDom from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route, } from 'react-router';
import routes from './routes.js';
import Base from './components/Base.jsx';
import HomePage from './components/HomePage.jsx';
import LoginPage from './containers/LoginPage.jsx';
import SignUpPage from './containers/SignUpPage.jsx';


injectTapEventPlugin();

ReactDom.render((
<MuiThemeProvider muiTheme={getMuiTheme()}>
    <Router>    
        <Route exact path= '/' component = {HomePage}/>       
        <Route exact path= '/login' component = {LoginPage}/>       
        <Route exact path= '/signup' component = {SignUpPage}/>
    </Router>
</MuiThemeProvider>), document.getElementById('react-app'));

