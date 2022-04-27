import React from 'react';
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';
import Calendar from './Components/Calendar';
import RegisterForm from './Components/Accounts/RegisterForm/RegisterForm';
import LoginForm from "./Components/Accounts/LoginForm/LoginForm";
import Popup from "./Components/Calendar/Popup/Popup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';


export default class App extends React.Component {
  
  state = {
    date: new Date()
  }
  updateDate = (sentdate) => {
    this.setState({date:sentdate});
  }
  handleDateChange = date => {
    this.setState({date});

  };


  render() {
    return(
    <div className="App">
      
      <Router>
        
        <Header />
          <Routes>
            <Route exact path="/" element={<Calendar date={this.state.date} onChange={this.handleDateChange}/>} />
         
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/login" element={<LoginForm />} />
          </Routes>
          
      
        <Footer />
      </Router> 
    
    </div>
  )};
}

