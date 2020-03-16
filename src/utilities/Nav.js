import React from 'react';
import '../App.css';
import {NavLink} from 'react-router-dom';
import Logo from '../utilities/logo.png';



function Nav(){


 



  return(

    <nav>
  <img src={Logo} alt=""></img> 
   <ul className="nav-links">
   <NavLink to="/" exact activeClassName="active" className="inactive"  >
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

    
  
  );
}

export default Nav;