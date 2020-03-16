import React from 'react';
import '../App.css';



function FHome({title,message}){

return(
   
    
    <div className="test">
    <div className="wrapBox">
    <h1 className="titleBox">{title}</h1>
    </div>
    <p>{message}</p>

    </div>
   


);

}

export default FHome;