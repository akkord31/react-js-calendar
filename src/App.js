import React from 'react';
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';
import Calendar from './Components/Calendar';
import RegisterForm from "./Components/Accounts/RegisterForm";
import LoginForm from "./Components/Accounts/LoginForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';


export default class App extends React.Component {

  render() {
    return(
    <div className="App">

      <Router>
        <Header />
          <Routes>
            <Route exact path="/" element={<Calendar />}></Route>
            <Route path="register" element={<RegisterForm />}></Route>
            <Route path="login" element={<LoginForm />}></Route>
          </Routes>
        
        <Footer />
      </Router> 
    
    </div>
  )};
}

