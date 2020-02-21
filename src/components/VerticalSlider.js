import React from "react";
import Slider from "react-slick";
import uuid from 'uuid';
import arrow from '../images/arrow.png';
import VerticalSlideItem from './VerticalSlideItem';

import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    sliderContainer: {
        maxWidth: '60%',
        margin: 'auto'
   }
})


// .slick-next:before {
//     content:url('../images/icon.png') !important;
//     font-weight: 700;
//     color: red;
//     transform: rotate(0deg);
//     width: 24%;
//     left: 38%;
// }

// .slick-next{
//     width: 100% !important;
//     position: absolute !important;
//     display: block !important;
//     top: -59px !important;
//     right: 0% !important;
//     height: initial;
// }

// .slick-prev:before {
//     content:url('../images/icon.png') !important;
//     font-weight: 700;
//     color: red;
//     transform: rotate(180deg);
//     width: 24%;
//     left: 38%;
// }

// .slick-prev, .slick-next {
//     height: fit-content;
// }

// .slick-prev{
//     width: 100% !important;
//     position: absolute !important;
//     display: block !important;
//     transform: rotate(180deg) !important;
//     left: 0% !important;
//     height: initial;
//     top: 430px !important;
// }

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

const VerticalSlider =(props)=> {
    const classes = useStyles();
    const settings = {
      dots: false,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      nextArrow: <SampleNextArrow/>,
      prevArrow: <SamplePrevArrow/>,
      beforeChange: function(currentSlide, nextSlide) {
        console.log("before change", currentSlide, nextSlide);
      },
      afterChange: function(currentSlide) {
        console.log("after change", currentSlide);
      }
    };
    return (
      <div>
        <h2>Vertical Mode</h2>
        <div className={classes.sliderContainer}>
            <Slider {...settings}>
            {
                props.slides.map(slide =>(
                    <VerticalSlideItem st={{width: '100%',height: '5rem',borderCol:'#b7b7b7'}} data={slide} key={uuid()}/>
                ))
            }
            </Slider>
        </div>
      </div>
    );
  }

export default VerticalSlider;