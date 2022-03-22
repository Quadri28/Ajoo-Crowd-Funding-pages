import React from 'react'


function Image(props) {
  const {leftTitle, leftDescription}= props;
      return (
    <div className="Lefty">
     <img className="image-one" src="images/image 1.png" alt="Brand"/>
     <img className="group-65" src="images/Group 65.png" alt="Vector"/>
     <img className="image-nine" src="images/image 9.png" alt="lady"/>
     <div className="quick"><h1 className='title'> {leftTitle}</h1>
     <p className='leftDescription'>{leftDescription}</p>
     </div>
     <div className="horizontal">
     <hr/>
     <hr className="middle-horizontal"/>
     <hr/>
     </div>
     </div>
  )
}

export default Image;