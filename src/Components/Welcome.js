import React from "react";
import Image from "./Image";
import Input from "./Input";


const properties={
  leftDescription:"",
  leftTitle :"Let us Easily and Quickly Fundraise for you",
  rightDescription:"Log in with the Email and password used during your account registration",
  rightTitle:"Welcome back!",
  firstButton:"Login",
  secondButton:"Don't have an account, Sign Up",
}


function Welcome(props) {
  return (
    <div className="container">
    
     
      <Image leftTitle= {properties.leftTitle}/>
      
     <div>
      <Input 
      rightTitle={properties.rightTitle}
      rightDescription={properties.rightDescription}
      firstButton={properties.firstButton}
      secondButton={properties.secondButton}
      />
      </div>
    </div>
  );
}

export default Welcome;
