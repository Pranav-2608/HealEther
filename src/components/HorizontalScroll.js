import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import image1 from "../assets/Website-Banner-1.jpg";
import image2 from "../assets/Website-Banner-2.jpg"
import image3 from "../assets/Website-Banner-4.jpg";


function Slider() {

  return (

      <div class="carousel-wrapper">
            <Carousel infiniteLoop={true} useKeyboardArrows ={true} autoPlay={true} showThumbs={false} showIndicators={false}  showStatus={false} showArrows ={false} interval={2000}>
                <div>
                    <img src={image1} alt=""  className="" />
                </div>
                <div>
                    <img src={image2} alt=""  className="" />
                </div>
                <div>
                    <img src={image3} alt=""    className="" />
                </div>
            </Carousel>
        </div>

  );
}

export default Slider