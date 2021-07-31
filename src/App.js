import './App.css';
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Header from './components/header';
import Footer from "./components/footer";
import {DataProvider} from './components/context'
import Section from './components/Section';



class App extends React.Component{
  render(){
  return (
    <DataProvider>
    <div className="container">
    <Router>
      <Header />
      {/* <Options/> */}
      <Section/>
      <Footer/>
      </Router>
    </div>
    </DataProvider>
  );
}}

export default App;
