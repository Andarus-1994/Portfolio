import React from 'react';
import '../App.css';
import Footer from './Footer';
import Projects from './Projects';

function work(){

 

  return(

    <div className="work">
    <h1>My Projects</h1>
    <div className="gap"></div>
   
   <Projects/>

   <div className="gap"></div>
   <Footer/>
    </div>
    
  
  );
}

export default work;