import React from 'react'

function Input(props) {
    const {rightTitle, rightDescription, firstButton, secondButton}=props;
  return (
    <div className="Righty">
    
    <h1 className="header">{rightTitle}</h1>
    <p className="password">{rightDescription}</p>
  <input placeholder="Email address" className="top-input"></input>
  <input placeholder="Password"></input>

     <p className="forgot">Forgot password</p>
     <button className="first-btn">{firstButton}</button>
     <button className="second-btn">{secondButton} </button>
    </div>
  )
}

export default Input;