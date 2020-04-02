import React, {Component} from 'react';
import '../App.css';
import Board from './Board';
import Card from './Card';



class BoardDisplay extends Component {

    
 

    constructor() {
		super();
		this.state = {
			show: true,
        };
    }
    
   handleClick =() => {
    
        this.setState({show:!this.state.show});
        console.log(this.state.show);
        
      }
 

      render(){
        const { show} = this.state;

        return(
            <div>
     

    
    
   
    <div className="flexbox" >
    <Board id="board-1" className="board"   title="Languages" left="20%" >
    <h3 disabled>Move!</h3>
    
    <Card id={show? 'card-1':'card-11'}  className="card" draggable="true"  >
    <p >HTML</p>    
    
    </Card>
 
    <Card  id={show ? 'card-6' : 'card-61'} className="card" draggable="true">
    <p>CSS</p>    
    
    </Card>
    <Card id={show ? 'card-5' : 'card-51'} className="card" draggable="true">
    <p>JAVASCRIPT</p>    
    
    </Card>
    <Card id={show ? 'card-8' : 'card-81'} className="card" draggable="true">
    <p>PHP</p>    
    
    </Card>

    </Board>

    <Board id="board-2" className="board" title="Frameworks">
    <Card id={show ? 'card-2' : 'card-21'} className="card" draggable="true" bounds="parent">
    <p>React</p>  
    </Card>
    <Card id={show ? 'card-9' : 'card-91'} className="card" draggable="true" bounds="parent">
    <p>Laravel</p>  
    </Card>

    </Board>

    <Board id="board-3" className="board" title="Plans to learn" left="10%">
    <Card id={show ? 'card-3' : 'card-31'} className="card" draggable="true" bounds="parent">
    Angular
    </Card>
    <Card id={show ? 'card-4' : 'card-41'} className="card" draggable="true" bounds="parent">
    <p>ASP.Net</p>    
    </Card>

    <Card id="card-7" className="card" draggable="true">
 
   </Card>

    </Board>

        </div>
        
        <button onClick={this.handleClick} >Press me!</button>
       
          </div>
          
        );
      }

    }



export default BoardDisplay;