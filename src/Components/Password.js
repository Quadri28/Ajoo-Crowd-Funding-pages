import React from "react";
import Image from "./Image";
import Input from "./Input";

const properties = {
  leftDescription:
    "Join us to day and enjoy our recurring monthly donations and have a joyous life",
  leftTitle: "Accept monthly recuring donations",
  rightDescription:
    "Enter a new password and reset the password to your account",
  rightTitle: "Reset password",
  firstButton: "Send Password reset Link",
  secondButton: "Already have an account, Login"
};

function Password() {
  return (
    <div className="container">
      <Image
        leftDescription={properties.leftDescription}
        leftTitle={properties.leftTitle}
      />

      <Input
        rightDescription={properties.rightDescription}
        rightTitle={properties.rightTitle}
        firstButton={properties.firstButton}
        secondButton={properties.secondButton}
      />
    </div>
  );
}

export default Password;
