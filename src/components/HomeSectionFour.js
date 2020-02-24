import React from "react";
import Slider from "react-slick";
import uuid from 'uuid';
import '../styles/HomeSectionFour.css';
import arrow from '../images/arrow.png';

import VerticalSlideItem from './VerticalSliderItem';

import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  sliderContainer: {
      maxWidth: '60%',
      margin: 'auto'
 },
  prevArrow: {
    display: 'block',
    position: 'absolute',
    top: '0%',
    top: '-5rem',
    width: '20%',
    left: '40%'
  },
  
  prevArrowImg: {
    transform: 'rotate(0deg)'
  },
  nextArrow: {
    display: 'block',
    position: 'absolute',
    bottom: '-7rem',
    width: '20%',
    left: '40%'
  },
  
  nextArrowImg: {
    transform: 'rotate(180deg)'
  }
})

function SamplePrevArrow(props) {
  const classes = useStyles();
  const { onClick } = props;
  return (
    <div className={classes.prevArrow} onClick={onClick}><img src={arrow} className={classes.prevArrowImg}></img></div>
  );
}

function SampleNextArrow(props) {
  const classes = useStyles();
  const { className, style, onClick } = props;
  return (
    <div className={classes.nextArrow} onClick={onClick}><img src={arrow} className={classes.nextArrowImg}></img></div>
  );
}

const HomeSectionFour =(props)=> {
    const classes = useStyles();
    const settings = {
      dots: false,
      arrows: true,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      vertical: true,
      verticalSwiping: true,
      beforeChange: function(currentSlide, nextSlide) {
        console.log("before change", currentSlide, nextSlide);
      },
      afterChange: function(currentSlide) {
        console.log("after change", currentSlide);
      }
    };
    return (
      <div className="section-four-container">
        <div className="get-answers">
            <span style={{color:"#212121"}}>Get </span>
            <span style={{color: "#416aa6"}}>ANSWERS</span>
        </div>
        <div className={classes.sliderContainer}>
            <Slider {...settings}>
            {
                props.questions.map(question =>(
                    <VerticalSlideItem st={{width: 'fit-content',height: '5rem',borderCol:'#b7b7b7'}} data={question} key={uuid()}/>
                ))
            }
            </Slider>
        </div>
      </div>
    );
  }

HomeSectionFour.defaultProps = {
  slides: [
    {
      text: 'While applying for two different programs in an university is it apt to write different area of interests in different SOP?',
      tags: ['University','Study Abroad']
    }, {
      text: 'How good is Trinity Business School for MSc Finance in terms of employment opportunities in Ireland, return on investment, course content and worldwide reputation?',
      tags: ['MSc']
    }, {
      text: 'With 69% in B.Tech, 7+ years of work experience, and a 690 GMAT score, what are chances to get admission to top-notch universities in Canada for an MBA program?',
      tags: ['MBA']
    },
     {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut pharetra leo. Sed molestie, mauris eget faucibus sodales, nulla dui faucibus velit, a faucibus mi nisi ac enim. Do',
      tags: ['MMM']
    },
     {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut pharetra leo. Sed molestie, mauris eget faucibus sodales, nulla dui faucibus velit, a faucibus mi nisi ac enim. Do',
      tags: ['TTT']
    },
  ]
}

export default HomeSectionFour;