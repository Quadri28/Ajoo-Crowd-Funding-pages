import React from 'react'
import Input from './Input';

const property ={
    firstButton: "Login",
    secondButton: "Don't have an account, Sign Up",
    rightDescription: "Log in with the email and password used during your account registration",
    rightTitle:"Welcome back!",
    leftTitle: "Accept our recurring donations ",
    leftDescription: "lorem ipsum doloit dissit almadjl hkju site lori acnmin dedai  hdcnkuon home sit ckie nalndk didl rtheisn "
   }

function WrongMessage() {
  return (
    <div >
    <p className='wrongTitle'> Wrong email address and password        <span>X</span></p>
    
    <Input 
    rightTitle={property.rightTitle}
    rightDescription={property.rightDescription}
    wrongTitle={property.wrongTitle}
    firstButton={property.firstButton}
    secondButton={property.secondButton}/>
    </div>
  )
}

export default WrongMessage;