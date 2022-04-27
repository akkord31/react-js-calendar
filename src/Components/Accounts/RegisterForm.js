import React from 'react'

export default function RegisterForm () {
  return (
    <div className="form">
        <h2>Create new account:</h2>
        <form >
            <p>Name: <input 
                type="username"
                id="username"
                name="username"
  
            /></p>

            <p>Email: <input 
                type="email"
                id="email"
                name="email"

                formNoValidate
            /></p>

            <p>Password: <input 
                type="password"
                id="password"
                name="password"

            /></p>

            <p>Repeat password: <input 
                type="password"
                id="password2"
                name="password2"

                /></p>
                
            <input type="submit" className="btn">Sign up</input>
        </form>
    </div>
  )
}