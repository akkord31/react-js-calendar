import React from 'react';
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';
import Calendar from './Components/Calendar';
import RegisterForm from './Components/Accounts/RegisterForm/RegisterForm';
import LoginForm from "./Components/Accounts/LoginForm/LoginForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';


export default class App extends React.Component {
  
  state = {
    date: new Date(),
    isLoged: false,
    username: ""
  }
  updateDate = (sentdate) => {
    this.setState({date: sentdate});
  }
  handleDateChange = date => {
    this.setState({date});
  };
  handleLoginClick = (param) => {
    this.setState({isLoged: param})
  }
  setUsername = (inputUsername) => {
    this.setState({username: inputUsername})
  }
  render() {
    return(
    <div className="App">
      
      <Router>

        <Header isLoged = {this.state.isLoged}/>
          <Routes>
            <Route exact path="/" element={<Calendar isLoged={this.state.isLoged} date={this.state.date} onChange={this.handleDateChange}/>} />
         
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/login" element={<LoginForm setUsername={this.setUsername} handleLoginClick={this.handleLoginClick}/>} />
          </Routes>
          
      
        <Footer isLoged={this.state.isLoged} username={this.state.username} />
      </Router> 
    
    </div>
  )};
}

