import React from 'react'
import Circle from './Circle';
import Image from './Image';
import Info from './Info';

const properties ={
    rightTitle: "Get started",
    rightDescription: "Whethter you're just starting out or ready to grow your nonprofit's funcraising, we've got it covered",
    leftTitle: "Accept our monthly recurring donations"
}
function GetStarted() {
  return (
    <div className='get-started'>
    <Image leftTitle={properties.leftTitle}/>
    <Info rightTitle={properties.rightTitle}
    rightDescription={properties.rightDescription}
    />
    <Circle/>
    </div>
  )
}

export default GetStarted;