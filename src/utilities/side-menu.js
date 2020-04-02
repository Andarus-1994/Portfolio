import React from 'react';
import '../App.css';
import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight,faHome, faBriefcase, faInfo} from '@fortawesome/free-solid-svg-icons';




function SideMenu(){



  return(

   
    

    <div className="side-menu">
        <ul>
        <li><FontAwesomeIcon icon={faArrowRight} size="2x" className="arrow"  /></li>
        <NavLink to="/Portfolio" exact activeClassName="active" className="inactive"  >
            <li>  <FontAwesomeIcon icon={faHome} size="2x"  /> <span className="home">Home</span> 
</li>
            </NavLink>

            <NavLink to="/about" exact activeClassName="active" className="inactive"  >
            <li><FontAwesomeIcon icon={faInfo} size="2x" className="infoIcon"  /><span className="info">About </span></li>
            </NavLink>

            <NavLink to="/work" exact activeClassName="active" className="inactive"  >
            <li> <FontAwesomeIcon icon={faBriefcase} size="2x"  /><span className="work">Work</span></li>
            </NavLink>
            

        </ul>
    </div>
  
  );
}

export default SideMenu;





