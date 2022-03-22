import React from "react";
import './App.css';
import SignIn from "./Components/SignIn";
import WrongPassword from "./Components/WrongPassword";
import Welcome from "./Components/Welcome";
import Error from "./Components/Error";
import Password from "./Components/Password";
import Address from './Components/Address';
import GetStarted from "./Components/GetStarted";
import Tell from "./Components/Tell";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
      
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/wrong-password" element={<WrongPassword />} />
          <Route path="/welcome" element={<Welcome />} />
         <Route path="/sluge:" element={<Error/>} />
         <Route path="/password" element={<Password />} />
         <Route path="/address" element={<Address />} />
         <Route path="/get-started" element={<GetStarted />} />
         <Route path="/tell" element={<Tell />} />
          

          



         

        </Routes>
      </Router>
    </>
  );
}

export default App;
