import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';




function FHome({title,message,left,background}){

   const [isShown, setIsShown] = useState(false);
   const mystyle = {
  position: "absolute",
  top:"-2%",
  left:"-1%",
  height:"50px",
  width:"50px",
  color:"rgb(26, 100, 153)",
  backgroundColor: "rgb(14, 57, 88)",
  borderRadius: "50%",
  padding: "7px",
  zIndex: "5",
  
    };
   
    const divStyle1 = {
      backgroundColor:background,
      
    };
    


return(

     
    <div className="test"  style={divStyle1}  onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}>
    {isShown && (
        <div style={mystyle}>
        
        <FontAwesomeIcon icon={faStar} size="2x"     />
        </div>
      )}


   
    <div className="wrapBox">
    <h1 className="titleBox">{title}</h1>
   
    </div>
    <p>{message} </p>

    </div>
  


);
}
export default FHome;