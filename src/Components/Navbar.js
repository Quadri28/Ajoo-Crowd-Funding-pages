import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <ul className="Navbar">
        
          <li>
            <Link to="/">Ajoo</Link>
          </li>
          <li> <Link to ="/" >Our Solution</Link></li>
          <li> <Link to ="/" >Our Support</Link></li>
          <li> <Link to ="/" >Developer</Link></li>
           <li> <Link to ="/" >Company</Link></li>
           <li> <Link to ="/" >Pricing</Link></li>
           <li> <Link to ="/" >Start a Campaign</Link></li>
        <div className="NavBtn">
          <li>
           <Link to ="/"> <button>Sign In</button> </Link>
          </li>
          <li>
            <Link to ="/"> <button>Donate</button> </Link>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
