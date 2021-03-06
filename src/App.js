import React from 'react';
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';
import RegisterForm from './Components/Accounts/RegisterForm/RegisterForm';
import LoginForm from "./Components/Accounts/LoginForm/LoginForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainWindow from "./Components/Calendar/MainWindow";
import WeekCalendar from './Components/Calendar/WeekCalendar/WeekCalendar';
import AddEventForm from './Components/Calendar/Events/AddEventForm';
import EditEventForm from "./Components/Calendar/Events/EditEventForm";
import './App.css';

export default class App extends React.Component {
  
  state = {
    date: new Date(),
    isLoged: false,
    username: "",
    choosenEvent: new Object(),
  }

  handleChoosenEventChange = (param) => {
    this.setState({choosenEvent: param});
  }

  handleCurrentDataChange = (param) => {
    this.setState({date: param});
  }

  updateDate = (sentdate) => {
    this.setState({date: sentdate});
  }

  handleDateChange = date => {
    this.setState({date});
  }

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
            <Route path="/" element={<MainWindow handleCurrentDataChange={this.handleCurrentDataChange} choosenEvent={this.state.choosenEvent} handleChoosenEventChange={this.handleChoosenEventChange} isLoged={this.state.isLoged}/>}></Route>
            <Route path="/week" element={<WeekCalendar isLoged={this.state.isLoged}/>}></Route>
            <Route path="/register" element={<RegisterForm handleLoginClick={this.handleLoginClick}/>} />
            <Route path="/login" element={<LoginForm setUsername={this.setUsername} handleLoginClick={this.handleLoginClick}/>} />
            <Route path="/addevent" element={<AddEventForm currentData = {this.state.date}/> } />
            <Route path="/editevent" element={<EditEventForm choosenEvent={this.state.choosenEvent}/> } />
          </Routes>
          
      
        <Footer isLoged={this.state.isLoged} username={this.state.username} />
      </Router> 
    
    </div>
  )};
}

