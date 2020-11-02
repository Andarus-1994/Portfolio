import React,{useEffect} from 'react';
import '../App.css';
import {useSelector, useDispatch} from 'react-redux';
import {color_dark} from '../actions';
import {color_light} from '../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMoon,faSun} from '@fortawesome/free-solid-svg-icons';


function DarkMode(){
  var variationBG
  const colored = useSelector(state=>state.colored)
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.setItem('color',colored)
},[colored]);




    document.body.style.backgroundColor = colored;
    var css = document.createElement("style");
    console.log(colored);
      css.innerHTML = `.side-menu li { 
          border-top-color:${colored};
          border-bottom-color:${colored};
     }
     .About .btnDisplay{
      background-color: ${colored};
     }
     .Decorate2::after {
      background-color:${colored};
     }
     
     `;
     if(colored==='rgb(80, 147, 185)') {
        variationBG=`.infoAbout .containerAbout{
        background-color: rgb(63, 132, 172);
       }
       .infoAbout .containerAbout .download{
        background-color: rgb(29, 100, 158);
       }
       `;
      }

       if(colored==='rgb(59, 120, 155)') {
         variationBG=`.infoAbout .containerAbout{
          background-color: rgb(38, 102, 139);
        }
        .infoAbout .containerAbout .download{ 
          background-color: rgb(13, 84, 141);
      }
      
        `;
      
      
    }

    css.innerHTML= css.innerHTML+ variationBG;
      
      document.body.appendChild(css);
function click() {
  if(colored==='rgb(80, 147, 185)') {
    dispatch(color_dark());
  }
  if(colored==='rgb(59, 120, 155)'){
    dispatch(color_light());
  }
}

    return(
        <div>
      
      
   
   <button className="darkMode" onClick={()=> click()} > 
   {colored==='rgb(80, 147, 185)' && <FontAwesomeIcon icon={faMoon} size="2x"     />}
   {colored==='rgb(59, 120, 155)' && <FontAwesomeIcon icon={faSun} size="2x"     />}</button> 
   
  
   

   </div>
    );


}

export default DarkMode;