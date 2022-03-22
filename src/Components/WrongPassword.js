import React from 'react';
import Image from './Image';
import WrongMessage from './WrongMessage';

const property ={
 firstButton: "Login",
 secondButton: "Don't have an account, Sign Up",
 rightDescription: "Log in with the email and password used during your account registration",
 rightTitle:"Welcome back!",
 leftTitle: "Accept our recurring donations ",
 leftDescription: "lorem ipsum doloit dissit almadjl hkju site lori acnmin dedai  hdcnkuon home sit ckie nalndk didl rtheisn "
}

function WrongPassword() {
 
  return (
    
    <div className='wrong-password'>
    
    <Image leftTitle={property.leftTitle}
    leftDescription={property.leftDescription}
    />

    <WrongMessage/>
    
   
    </div>
  )
}

export default WrongPassword;