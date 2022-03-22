import React from "react";
import { Link } from "react-router-dom";
import {
  FaRocket,
  FaRegClone,
  FaVirus,
  FaEnvelopeOpenText,
  FaHouseUser,
  FaUserFriends,
  FaBus, 
  FaReceipt,
  FaVolumeUp,
  FaRegSun,
  FaAngleRight,
  FaUser,
  FaPaperPlane
} from "react-icons/fa";
function SignIn() {
  return (
    <>
    
    <div className="wrapper">
      <div className="right-onboarding">
      <div className='right-header'><h3>Organization Name   <FaAngleRight/></h3>
      <p>783992835</p>
      </div>
        <Link to="/">
          <FaRocket className="icons" />Get started
        </Link>
        <Link to="/">
        <FaHouseUser className="icons"/>
           Dash Board
        </Link>
         <Link to="/">
          <FaEnvelopeOpenText className="icons"/>
           Donations
        </Link>
        <Link to="/">
        <FaUserFriends className="icons"/>
            Donors
        </Link>
      <Link to="/">
          <FaReceipt className="icons"/>
            Payouts
        </Link>
        <Link to="/">
         <FaRegClone className="icons"/> Disputes
        </Link>
        <Link to="/">
           <FaBus className="icons"/> Plans
        </Link>
        <Link to="/">
           <FaVirus className="icons"/> Audit Log
        </Link>
        <Link to="/">
          <FaVolumeUp className="icons"/> Campaign
        </Link>
        <Link to="/" className="distance">
          <FaRegSun className="icons "/>
          Settings
        </Link>
        <Link to="/">
          <FaUser className="icons "/>
          Profile
        </Link>
        <Link to="/">
          <FaPaperPlane className="icons "/>
          Log out
        </Link>
      </div>
     
      <div className="left-onboarding">
      <div className="onboarding-header">
      <div>
    <h1 className="onboarding-title">Get started</h1>
      <p className="onboarding-description"> Whether you're just starting out or ready to grow your nonprofit fundraising we've got it covered</p>
      </div>
      <div><input class="semicircle" type="" name="" value="" placeholder="4/8"/></div>
      </div>
      <div className="lefty-onboarding">
        <div className="onboarding-body">
        <div className="left-icons"> <FaEnvelopeOpenText  className="icon"/> </div> 
         <p> Add CAC documents</p>
          <button className="left-button">Add CAC details</button>
        </div>
        <div className="onboarding-body">
        <div className="left-icons"> <FaEnvelopeOpenText className="icon"/> </div>
          <p>Set up teams</p>
          <button className="left-button">Add a member</button>
        </div>

        <div className="onboarding-body">
        <div className="left-icons"> 
        <FaEnvelopeOpenText className="icon" /> </div>
         <p> Add business logo</p>
          <button className="left-button">Add bank account</button>
        </div>
        <div className="onboarding-body">
        <div className="left-icons"> 
        <FaEnvelopeOpenText className="icon"/> </div>
          <p>API Documentation</p>
          <button className="left-button">Add a logo</button>
        </div>
        <div className="onboarding-body">
         <div className="left-icons"> 
         <FaEnvelopeOpenText className="icon"/> </div>
          <p>Set up bank account</p>
          <button className="left-button">View API keys</button>
        </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default SignIn;
