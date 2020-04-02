import React from 'react';
import '../App.css';
import {NavLink} from 'react-router-dom';
import Logo from '../utilities/logo2.png';




function Nav(){






  return(
<div>
    <nav>
  <img src={Logo} alt=""></img> 
   <ul className="nav-links">
   <NavLink to="/Portfolio"  exact activeClassName="active" className="inactive"  >
   <li>   Home </li>
       </NavLink> 
       <NavLink to="/about" activeClassName="active" className="inactive"  >
   <li>   About</li>
       </NavLink> 
       <NavLink to="/work"  activeClassName="active" className="inactive"  >
   <li>   Work</li>
       </NavLink> 
   </ul>
   
    </nav>

      

        </div>
  
  );
}

export default Nav;