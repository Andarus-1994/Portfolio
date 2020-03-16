import React from 'react';
import '../App.css';
import FHome from './flexhome';
import Carousel from './carousel';
import MoreButton from './moreButton';
import Footer from './Footer';



function Home(){

  const text = [{ id:0 , title:"Creativity",  message: 'I’d get to create beautiful things for the internet, and use up all my creative juices on typography pairings, color schemes, and giving websites that certain mark of myself.'},
                {id:1 , title:"Community",  message: 'The fact that there is a big community sharing ideas, new technologies, new thoughts and diffrents points of view. '},
                {id:2 , title:"Passion",  message: 'Because I am doing this out of passion and it feels like I am not even working.'}]

  return(

    <div className="Home">
    <div className="homeCover">
    <center><h1 className="titleHome"><span className="homie">Welcome</span>, to my Portfolio Website</h1></center>
    <br />
 
    <div className="containerCarousel">
    <Carousel />
    </div>
    </div>
    <div className="containerHome">
    
    <div className="whatTitle">Why do I like WEB Development?</div>
    
   <MoreButton >

   {text.map(box =>(
     <div key={box.id}>
    <FHome  title={box.title} message={box.message}  />
    
    </div>
   ))}
   
</MoreButton>
  </div>
  <Footer/>
 
    
    </div>
   
   
  );
}

export default Home;