import React, {useState,useEffect} from 'react';
import '../App.css';
import FHome from './flexhome';
import Carousel from './carousel';
import MoreButton from './moreButton';
import Footer from './Footer';
import Loader from './Loader';



function Home(){
  const [isLoaded, setIsLoaded] = useState(true);
  useEffect(() => {
    function handleLoading(load){
      setIsLoaded(load.isLoaded)
    }
    var navData = window.performance.getEntriesByType("navigation");
  
    window.onload = function(){
      handleLoading(false);
     
    }

    if (navData.length > 0 && navData[0].loadEventEnd > 0)
    {
        handleLoading(false);
    } else {
        console.log('Document is not loaded');
    }
   
 
        
     
    
  }, []);
 
 

  const text = [{ id:0 , title:"Creativity",  message: 'I’d get to create beautiful things for the internet, and use up all my creative juices on typography pairings, color schemes, and giving websites that certain mark of myself.', background:'rgb(17, 92, 141)'},
                {id:1 , title:"Community",  message: 'The fact that there is a big community sharing ideas, new technologies, new thoughts and diffrents points of view. ', background:'rgb(27, 90, 133)'},
                {id:2 , title:"Passion",  message: 'Because I am doing this out of passion and it feels like I am not even working.', background:'rgb(19, 102, 156)'}]

               
  

             
  return(

    <div className="Home">
    
    {isLoaded && <Loader />}
   
    <div className="homeCover">
    <center><h1 className="titleHome"><span className="homie">Welcome</span>, to my Portfolio Website</h1></center>
    <br />
 
    <div className="containerCarousel">
    <Carousel />
    </div>
    </div>
    <div className="containerHome">
    
    <div className="whatTitle">Why do I like <span>WEB Development?</span></div>
    
   <MoreButton >

   {text.map(box =>(
     <div key={box.id}>
    <FHome  title={box.title} message={box.message} left={box.left} background={box.background}  />
    
    </div>
   ))}
   
</MoreButton>
  </div>
  <Footer/>
 
   
    </div>
    
   
  );
}

export default Home;