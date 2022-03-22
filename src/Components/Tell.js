import React from 'react'
import Circle from './Circle';
import Image from './Image';
import Info from './Info';

const properties ={
    rightTitle: "Tell us more about the organization",
    rightDescription: "We will help you get started based on your feedback",
    leftTitle: "Accept our monthly recurring donations",
    leftDescription:'lorem ipsum doloit supit mollit get help sita hous jummu ahsmd dool somhow houw jump sit stair'
}
function Tell() {
  return (
    <div className='get-started'>
    <Image leftTitle={properties.leftTitle}
    leftDescription={properties.leftDescription}
    />
    <Info rightTitle={properties.rightTitle}
    rightDescription={properties.rightDescription}/>
    <Circle/>
    
    
    </div>
  )
}

export default Tell;