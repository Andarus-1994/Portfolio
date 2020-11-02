import React from 'react';
import bats from './halloween-png.png';
import witch from './witch.png';
import Fade from 'react-reveal/Fade';
import {useSelector, useDispatch} from 'react-redux';
import {decorate} from '../actions';
import '../App.css';


 function Decorate(){
   const Switch = useSelector(state=>state.decor);
   const dispatch = useDispatch();
   
   function turnOff(){
      dispatch(decorate());
   }
    return <div className="Decorations"> 
    <button className={Switch ? "decorateON" : "decorateOFF"} title={Switch ? "Close" : "Open" } onClick={()=>turnOff()}>{Switch ? "X" : " " }</button>
    {Switch && 
    <div>
    <Fade>
    <div className="Decorate1"><img src={bats} alt="bats"></img></div>
    <div className="Decorate2"><img src={witch} alt="witch"></img></div>
 
    </Fade>
    </div> }
    </div>
 }


 export default Decorate;