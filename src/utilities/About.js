import React, {useState, useEffect} from 'react';
import '../App.css';
import Footer from './Footer';


function About(){

    const imgStyle  = {

        width:250,
        height:200,
        
        
    };

    useEffect(() => {
        fetchItems();
    },[]);

    const [items, setItems] = useState([]);

    const fetchItems =  async() => {
        const data = await fetch('https://api.thecatapi.com/v1/images/search');
        const items = await data.json();
        console.log(items);
        setItems(items);
    }

  return(

    <div className="About">
    <center><h1>About</h1>
   
   {items.map(item =>(
       <img style={imgStyle} src={item.url} alt="Cat" ></img>
      
   ))}
   </center>
   <div className="gap"></div>
   <Footer/>
    </div>
    
  
  );
}

export default About;