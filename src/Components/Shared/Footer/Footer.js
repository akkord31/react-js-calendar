import React from "react";


import './Footer.css'

export default function Footer(props){
  return(
    <div className="footer">
      {props.isLoged 
      ? <p>Hello, {props.username}</p> 
      : <p>You cannot view events because you are not logged into your account!</p>}
   
    </div>
  );
}
