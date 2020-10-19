import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Landing from './Components/Landing/LandingPage';
import * as serviceWorker from './serviceWorker';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer'
ReactDOM.render(
  <React.StrictMode>
    <NavBar/>
    <Landing/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
