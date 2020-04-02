import React, {useState, useEffect} from 'react';
import '../App.css';
import Footer from './Footer';
import InfoAbout from './InfoAbout';
import AboutAnimate from './AboutAnimate';
import BoardDisplay from './BoardDisplay';




 function About(){

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

    const textAbout = [{ id:0 , text:" and I'm trying to become a proffesional", text2:'blablablabla' },
    ]

    
  
  /*
    const handleClick = () => {
    
   
    console.log("este "+show);
     
    }; */
    
    

  return(

    <div className="About">
<h2>About ME</h2>
{textAbout.map(text=>(
  <div key={text.id}>
    <InfoAbout text={text.text} text2={text.text2} />
    </div>
))}



  <AboutAnimate />
   <div className="gap"></div>
   
 
    
   <BoardDisplay />
    
   
   
   <div className="gap"></div>

   {items.map(item =>(
       <img key={item.id}  src={item.url} alt={item.name} className="cat" ></img>
      
     
   ))}

   <Footer/>
    
 </div>
  
  );
   
  
}

export default About;