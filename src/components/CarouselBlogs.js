import React, { Component } from "react";
import Slider from "react-slick";
import BlogCard from './BlogsCard'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

const path = 'http://localhost/MyApplicationMentor/public/';

export default class MultipleItems extends Component {

  
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };

    return (
      <div>
        <div>

        </div>
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