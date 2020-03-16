import React from 'react';
import '../App.css';
import img1 from './bms2.jpg';


function projects(){

 

  return(

    <div className="projects">
    <div className="containerProjects">
    <div className="Project">
    <img src={img1} alt="project1"></img>
    
    <button>Demo</button>
    <button>Code</button>
    
    </div>
    <div className="Project">
    <img src={img1} alt="project1"></img>
    <button>Demo</button>
    <button>Code</button>
    </div>

    <div className="Project">
    <img src={img1} alt="project1"></img>
    <button>Demo</button>
    <button>Code</button>
    </div>
    <div className="Project">
    <img src={img1} alt="project1"></img>
    <button>Demo</button>
    <button>Code</button>
    </div>
    <div className="Project">
    <img src={img1} alt="project1"></img>
    <button>Demo</button>
    <button>Code</button>
    </div>
    </div>

    </div>
    
  
  );
}

export default projects;