import React from 'react';
import '../App.css';
import Board from './Board';
import Card from './Card';
import {useSelector, useDispatch} from 'react-redux';
import {click} from '../actions';
import {CSSTransition} from 'react-transition-group';


function BoardDisplay(){

  const opener = useSelector(state=>state.opener)
  const dispatch = useDispatch();
  var visible;
  if(opener===true){
   visible='visible'
  };
  if(opener===false){
  visible='hidden';
  };
  const divParagraph = {
    visibility:visible,
    margin:"0 auto",
    width:"215px",
    color:"rgb(30, 85, 117)",
    pointerEvents:"none"
  };

   const containerP = {
     marginTop:"30px", 
    width:"100%",
    height:"50px",
  }
 
 
  

        return(
            <div>
     

    <div className="flexbox" >
    <Board id="board-1" className="board"   title="Languages" left="-5%" >
    <h3 disabled>Move!</h3>
    
    <Card id={opener? 'card-1':'card-11'}  className="card" draggable="true"  >
    <p >HTML</p>    
    
    </Card>
 
    <Card  id={opener ? 'card-6' : 'card-61'} className="card" draggable="true">
    <p>CSS</p>    
    
    </Card>
    <Card id={opener ? 'card-5' : 'card-51'} className="card" draggable="true">
    <p>JAVASCRIPT</p>    
    
    </Card>
    <Card id={opener ? 'card-8' : 'card-81'} className="card" draggable="true">
    <p>PHP</p>    
    
    </Card>

    </Board>

    <Board id="board-2" className="board" title="Frameworks" left="-3%">
    <Card id={opener ? 'card-2' : 'card-21'} className="card" draggable="true" bounds="parent">
    <p>React</p>  
    </Card>
    <Card id={opener ? 'card-9' : 'card-91'} className="card" draggable="true" bounds="parent">
    <p>Laravel</p>  
    </Card>

    </Board>

    <Board id="board-3" className="board" title="Plans to learn" left="-5%">
    <Card id={opener ? 'card-3' : 'card-31'} className="card" draggable="true" bounds="parent">
    Angular
    </Card>
    <Card id={opener ? 'card-4' : 'card-41'} className="card" draggable="true" bounds="parent">
    <p>ASP.Net</p>    
    </Card>

    <Card id="card-7" className="card" draggable="true">
 
   </Card>

    </Board>

        </div>
        
        <button className="btnDisplay" onClick={()=> dispatch(click())} >Press me!</button>
       <div style={containerP}>
        <CSSTransition
  in={opener}
  timeout={350}
  classNames="example"
  unmountOnExit
>
         <p style={divParagraph}>You can press the button...</p>

         </CSSTransition>
         </div>
          </div>
         
        );
      }

   



export default BoardDisplay;