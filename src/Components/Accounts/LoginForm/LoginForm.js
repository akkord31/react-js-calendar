import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import './LoginForm.css';

const url = 'http://localhost:3001/login'

export default function LoginForm (props) {

  const [login, setLogin] = useState();
  const [password, setInputtedPass1] = useState();

  let navigate = useNavigate();

  const loginChanged = (event) => {
    setLogin(event.target.value);
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    try{
        (async () => {
            const response = await axios.post(url,{login, password})
              .then( await function (response) {
                props.setUsername(login);
                props.handleLoginClick(true);
                navigate("/");
              })
              .catch(function (error) {
                console.log("error");
              })
        })();


    } catch (e){
        alert("Ошибка")
    }
  }
  return (
    <div className="login__form">
        <h1>Welcome back</h1>
        <p>Please, input your data below</p>
        
        <form onSubmit={handleSubmit}>
        <table className='login__form__table'>
            <tr>
                <td>login:</td>
                <td><input name="login" type="text" className="input" onChange={e => setLogin(e.target.value)}></input></td>
            </tr>
            <tr>
                <td>password:</td>
                <td><input type="text" onChange={e => setInputtedPass1(e.target.value)} className="input"></input></td>
            </tr>
            <tr>
                <td colSpan="2"><button type='submit' className="btn">Login</button></td>
            </tr>
        </table>
        </form>
    </div>
  )
}
