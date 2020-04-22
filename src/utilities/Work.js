import React from 'react';
import '../App.css';
import Footer from './Footer';
import Projects from './Projects';
import DarkMode from './DarkMode';
import Fade from 'react-reveal/Fade';
function work(){

 

  return(

    <div className="work">
   <DarkMode />
   <Fade>
    <h1>My Projects</h1>
    <div className="gap"></div>
   
   <Projects/>
</Fade>
   <div className="gap"></div>
   <Footer/>
    </div>
    
  
  );
}

export default work;