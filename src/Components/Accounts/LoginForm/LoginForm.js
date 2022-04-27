import React from 'react'

import './LoginForm.css';

export default function LoginForm () {
  return (
    <div className="login__form">
        <h1>Welcome back</h1>
        <p>Please, input your data below</p>
        
        <form>
        <table className='login__form__table'>
            <tr>
                <td>login:</td>
                <td><input type="text" className="input"></input></td>
            </tr>
            <tr>
                <td>password:</td>
                <td><input type="text"  className="input"></input></td>
            </tr>
            <tr>
                <td colSpan="2"><button className="btn">Login</button></td>
            </tr>
        </table>
        </form>
    </div>
  )
}