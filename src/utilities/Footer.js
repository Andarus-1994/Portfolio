import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    
    faFacebook,
    faTwitter,
    faInstagram,
    faGithub
    
  } from "@fortawesome/free-brands-svg-icons";



function Bottom(){
return(
  <div className="footer">

  <div className="footer-content">
    <ul className="footer-social-links"> 
       <li ><a href="no" className="facebook"><FontAwesomeIcon icon={faFacebook} size="3x"  /> </a></li>
       <li ><a href="so"  className="instagram"><FontAwesomeIcon icon={faInstagram} size="3x"  /> </a></li>
        <li><a href=""  className="twitter"><FontAwesomeIcon icon={faTwitter} size="3x"  /> </a></li>
        <li><a href="https://github.com/Andarus-1994"  className="gitHub"><FontAwesomeIcon icon={faGithub} size="3x"  /> </a></li>
    </ul>

  </div>

  
  <div className="footer-bottom">
    &copy; Andarus.com | Copyrights reserved from 2020 made by Andrei
  </div>
  
  
  
  </div>
);
}

export default Bottom;