import React from 'react';
import '../App.css';


function Board(props){
    const drop = e => {
        e.preventDefault();
        const card_id = e.dataTransfer.getData('card_id');
        const card = document.getElementById(card_id);
        
        card.style.display = 'block';
       // card.draggable=false;
      
      
       if(e.target.className==="board")
       {
        const board=e.target
        e.target.style.backgroundColor='rgba(27, 53, 68, 0.637)';
  
          board.appendChild(card)
       }
      else
      
      {
        e.target.closest(".board").appendChild(card)
       }

    }


    const dragOver = e => {
        e.preventDefault();
        if(e.target.className==="board")
        e.target.style.backgroundColor ='rgb(13, 49, 70)';
    }

  

    const leave = e =>{
      if(e.target.className==='board')
      {
      e.target.style.backgroundColor='rgba(27, 53, 68, 0.637)';
      }
    }

  



  return(
   
    <div id={props.id}
        onDragLeave={leave}
        onDrop={drop}
        onDragOver={dragOver}
        className={props.className}
       
      >
       <h1 style={{left:`${props.left}`}}>{props.title}</h1>
      {props.children}
        
       
    </div>
  
   
  );
}

export default Board;