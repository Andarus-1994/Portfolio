import React from 'react';
import '../App.css';
import Img from '../utilities/right.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDownload} from '@fortawesome/free-solid-svg-icons';
import HeadShake from 'react-reveal/HeadShake';
import Fade from 'react-reveal/Fade';
import CV from '../utilities/CV.docx';

function info({text,text2}){
return(
  <div className="infoAbout">
    
    <div className="containerAbout">

    <img src={Img}  alt="img"></img>
   <Fade>
    <p className="titleDescriptionAbout">Junior Web Developer</p>
    <p className="hi"><span>Hi!</span> My name is <b>Andrei</b>{text} <b>Web Developer.</b></p>
   <p className="focus"> My <b>focus</b> at the moment is to grow my skills in the <b>Web 
   Programming Languages</b> that I know and also to exceed my limits by learning new ones.</p>
   </Fade>
   <HeadShake>
   <div className="download"><a href={CV} download="CV.docx">Download CV <FontAwesomeIcon icon={faDownload}     /></a></div>
   </HeadShake>
   </div>
    </div>
 

);
}

export default info;