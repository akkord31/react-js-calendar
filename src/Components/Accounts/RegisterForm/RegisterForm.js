import React, { useState, useEffect } from 'react'
import { observer } from 'mobx-react-lite';
import EventsStorage from '../../../store/EventsStorage';
import axios from 'axios';
import { useNavigate  } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import './RegisterForm.css';

const url = 'http://localhost:3001/registration'

const RegisterForm = observer((props) => {

    const [login, setLogin] = useState();
    const [password, setInputtedPass1] = useState();
    const [password2, setInputtedPass2] = useState();



    let navigate = useNavigate();
    let btnClass = "btn__class";

    useEffect(() => {
        if(password == password2) {
            document.getElementById("btn__register").disabled = false; 
        } else {
            document.getElementById("btn__register").disabled = true; 
        }
    },[password, password2])

    const handleSubmit = (event) => {
        event.preventDefault();
        const id = uuid();
        try{
            (async () => {
                const response = await axios.post(url, {id, login, password})
            })();
            EventsStorage.currentId = id;
            navigate("/");
        } catch(err) {
            console.log("ошибка")
        }
        props.handleLoginClick(true);
    }
    
    return (
        <div className="register__form">
            <h1>Create new account:</h1>
            <p>Please, input your data below</p>
            <form onSubmit={handleSubmit}>
            <table className='register__form__table'>
                <tr>
                    <td>login:</td>
                    <td><input type="text" onChange={e => setLogin(e.target.value)} className="input"></input></td>
                </tr>
                <tr>
                    <td>password: </td>
                    <td><input type="text" onChange={e => setInputtedPass1(e.target.value)} className="input"></input></td>
                </tr>
                <tr>
                    <td>repeat password:</td>
                    <td><input type="text" onChange={e => setInputtedPass2(e.target.value)} className="input"></input></td>
                </tr>
                <tr>
                    <td colSpan="2"><button id="btn__register">Register me!</button></td>
                </tr>
            </table>
            </form>
        </div>
    )
})
export default RegisterForm;