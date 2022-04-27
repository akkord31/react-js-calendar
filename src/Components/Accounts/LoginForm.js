import React from 'react'

export default function LoginForm () {
  return (
    <div className="form">
        <h2>Welcome back</h2>
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
                
            <input type="submit" className="btn">Sign in</input>
        </form>
    </div>
  )
}