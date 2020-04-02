import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Project3 from '../utilities/project3.png';
import Project2 from '../utilities/project2.jpg';
import Dog from '../utilities/dog.png';
import Img1 from '../utilities/img_Carousel1.png';
import Img2 from '../utilities/img_carusel5.png';
import Nature from '../utilities/natureProject.png';
import '../App.css';


export default class extends React.Component {
    render() {
      return (
        <CarouselProvider className="provider"  infinite="true" isPlaying="true"
          naturalSlideWidth={40}
          naturalSlideHeight={35}
          totalSlides={6}
        >

<Slider  >

          <Slide  index={0}> <img src={Project3} alt=""/></Slide>
          <Slide index={1}><img src={Project2} alt=""/></Slide>
          <Slide index={2}><img src={Img1} alt=""/></Slide>
          <Slide index={3}><img src={Img2} alt=""/></Slide>
          <Slide index={4}><img src={Nature} alt=""/></Slide>
          <Slide index={5}><img src={Dog} alt=""/></Slide>
         
        </Slider>
       
        <ButtonBack className="back"> <i className="left"></i></ButtonBack>
        <ButtonNext className="forward"><i className="right"></i></ButtonNext>
     
        </CarouselProvider>
      );
    }
  }