
import './App.css';
import Header from './components/Header.js';
import MainContent from './components/MainContent';
import CountryBar from './components/CountryBar';
import Footer from './components/Footer';
import React from 'react';

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <Header />
        <MainContent />
        <CountryBar />
        <Footer /> 
      </div>
    );
  }
}

export default App;

// react Project from Group Zeus for the SideHustle Internship
// credits: Google HomePage, StackOverFlow, ww3schools, javatpoint.com, 
// ibasiclogic.com, ubalt.edu, freecodecamp.org, etc