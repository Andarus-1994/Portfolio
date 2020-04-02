import React from 'react';
import '../App.css';




function contentProjects({title,img,url,url1}){

    return(


<div className="Project">
<h2>{title}</h2>
<img src={require(`./${img.toLowerCase()}.jpg`)} alt="project1"></img>


<a href={url} title={title}>Demo</a>
<a href={url1} title={title+ " code"}>Code</a>

</div>

);
}

export default contentProjects;