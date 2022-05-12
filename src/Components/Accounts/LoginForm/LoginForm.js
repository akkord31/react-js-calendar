import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

export default function LoginForm (props) {

  let navigate = useNavigate();
  const [login, setLogin] = useState('');
  // const [password, setPassword] = useState('');
  const onLoginClick = (event) => {
    event.preventDefault();
    props.handleLoginClick(true);
    props.setUsername(login);
    navigate("/");
  }  
  const loginChanged = (event) => {
    setLogin(event.target.value);
}
  return (
    <div className="login__form">
        <h1>Welcome back</h1>
        <p>Please, input your data below</p>
        
        <form onSubmit={onLoginClick}>
        <table className='login__form__table'>
            <tr>
                <td>login:</td>
                <td><input name="login" type="text" className="input" onChange={event => loginChanged(event)}></input></td>
            </tr>
            <tr>
                <td>password:</td>
                <td><input type="text" className="input"></input></td>
            </tr>
            <tr>
                <td colSpan="2"><button type='submit' className="btn">Login</button></td>
            </tr>
        </table>
        </form>
    </div>
  )
}