import React from 'react'

import './RegisterForm.css';

export default function RegisterForm () {
  return (
    <div className="register__form">
        <h1>Create new account:</h1>
        <p>Please, input your data below</p>
        <form >
        <table className='register__form__table'>
            <tr>
                <td>login:</td>
                <td><input type="text"  className="input"></input></td>
            </tr>
            <tr>
                <td>password: </td>
                <td><input type="text"  className="input"></input></td>
            </tr>
            <tr>
                <td>repeat password:</td>
                <td><input type="text"  className="input"></input></td>
            </tr>
            <tr>
                <td colSpan="2"><button className="btn">Register me!</button></td>
            </tr>
        </table>
        </form>
    </div>
  )
}