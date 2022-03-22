import React from 'react';

function Info(props) {
  const{rightTitle, rightDescription}=props;
  return (
    <div className="Righty">
    
    <h1 className="info-title">{rightTitle}</h1>
    <p className="info-description"> {rightDescription}</p>
    <select className="top-input" name='Address' value="city">Address</select>
    <input  className="top-input" placeholder="Landmark"></input>
    <input className="top-input" placeholder="City"></input>
    <input  className="top-input" placeholder="Local Government"></input>
    <select className="select-input" name='State' value="state">State</select>
    <select className="select-input" name='Coountry' value="country">Country</select>
    <button className="back-btn">Back</button>
    <button className="info-btn">Create account</button>
    </div>
  )
}

export default Info;