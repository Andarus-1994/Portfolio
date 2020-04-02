import React from 'react';
import '../App.css';
import ProjectContent from './ProjectContent';

function projects(){

  const projects = [{ id:0 , title:"Project Test", img:"bms2", url:"https://andarus-1994.github.io/Website1/", url1:"https://github.com/Andarus-1994/Website1"},
  {id:1 , title:"Project 2", img:"bms2", url:"https://andarus-1994.github.io/Website1/"},
  {id:2 , title:"Project 3", img:"Project1", url:"https://andarus-1994.github.io/Website1/"},
  {id:3 , title:"Project 4", img:"project3", url:"https://andarus-1994.github.io/Website1/"}]
 

  return(

    <div className="projects">
    <div className="containerProjects">
    {projects.map(project =>(
     <div key={project.id}>
    <ProjectContent  title={project.title} img={project.img} url={project.url} url1={project.url1} />
    </div>
   ))}
   
  

  
    </div>

    </div>
    
  
  );
}

export default projects;