import React from 'react';
import Home from './utilities/Home';
import Work from './utilities/Work';
import About from './utilities/About';
import Nav from './utilities/Nav';
import './App.css';
import SideMenu from './utilities/side-menu';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';




const NoMatch = () => <h1 className="noMatch">404 Not Found</h1>




function App(){


 
 
  return(
    
   <Router >

    <div className="app">
    


    <Nav />
    <SideMenu />
    
         
   <Switch>
    
    <Route path="/about" component={About}/>
    <Route path="/work" component={Work}/>
    <Route path="/Portfolio"  exact component={Home}/>
    <Route component={NoMatch} />
   
  
    </Switch>
   
    
   
    </div>
    </Router>
  );
}



export default App;