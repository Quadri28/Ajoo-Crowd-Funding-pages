import React from 'react'
import Image from "./Image";
import Info from "./Info";
import Circle from './Circle';

const properties={
    leftTitle:"Accept monthly recurring donations",
    leftDescription:"Join us today and enjoy our recurring monthly donations and have a joyous life",
    rightTitle:  "Add organization address",
    rightDescription:"This will be used as your default business address. You can always change it"
}
function Address() {
  return (
    <div className='get-started'>
    <Image 
    leftTitle={properties.leftTitle}
    leftDescription={properties.leftDescription}
    />
    <Info 
    rightTitle={properties.rightTitle}
    rightDescription={properties.rightDescription}
    />
    <Circle/>    
    </div>
  )
}

export default Address;