import React from 'react';
import Home from './utilities/Home';
import Work from './utilities/Work';
import About from './utilities/About';
import Nav from './utilities/Nav';
import './App.css';
import SideMenu from './utilities/side-menu';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';




function App(){



  

  return(
   <Router>
    <div className="app">
    <Nav />
    <SideMenu />
    <Switch>
    
    <Route path="/about" component={About}/>
    <Route path="/work" component={Work}/>
    <Route path="/" exact component={Home}/>
    </Switch>
   
    </div>
    </Router>
  );
}

export default App;