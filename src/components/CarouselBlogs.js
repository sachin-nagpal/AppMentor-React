import React, { Component } from "react";
import Slider from "react-slick";
import BlogCard from './BlogsCard';
import '../styles/CarouselBlogs.css';
import { createUseStyles } from 'react-jss';
import arrow from '../images/arrow.png';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

const path = `${process.env.REACT_APP_API_HOST_URL}/puclic/`;

const useStyles = createUseStyles({
  sliderContainer: {
      maxWidth: '60%',
      margin: 'auto'
  },
    prevArrow: {
      display: 'block',
      position: 'absolute',
      top: '0%',
      width: '20%',
      left: '-14%',
      height: '20%',
      top: '40%'
  },
  
  prevArrowImg: {
    transform: 'rotate(270deg)'
  },
  nextArrow: {
    display: 'block',
    position: 'absolute',
    top: '0%',
    width: '20%',
    right: '-12%',
    height: '20%',
    top: '40%'
  },
  
  nextArrowImg: {
    transform: 'rotate(90deg)'
  }
  })

function SamplePrevArrowBlog(props) {
  const classes = useStyles();
  const { onClick,style} = props;
  return (
    // <img src={arrow} className={classes.prevArrowImgBlog}></img>
    // <div style={{ ...style, display: "block", background: "green" }}></div>
    <div className={classes.prevArrow} onClick={onClick}><img src={arrow} className={classes.prevArrowImg}></img></div>

  );
}

function SampleNextArrowBlog(props) {
  const classes = useStyles();
  const { onClick,style } = props;
  return (
    // <img src={arrow} className={classes.nextArrowImgBlog}></img>
    // <div style={{ ...style, display: "block", background: "green" }}></div>
    <div className={classes.nextArrow} onClick={onClick}><img src={arrow} className={classes.nextArrowImg}></img></div>

  );
}
export default class MultipleItems extends Component {
  
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      nextArrow: <SampleNextArrowBlog />,
      prevArrow: <SamplePrevArrowBlog />
    };

    return (
      <div>
        <Slider {...settings}>
        {this.props.blogs.map((blog)=>(
          <Link to={"/blogs/"+ blog.slug} className="link">
            <BlogCard blog={blog} />
          </Link>
        ))}
        </Slider>
      </div>
    );    
  }
}