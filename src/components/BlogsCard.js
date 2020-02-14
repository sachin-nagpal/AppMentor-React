import React, { Component, useEffect, useState } from 'react';
import ShowMoreText from './ShowMoreText';
import date from '../images/date.png';
import comment from '../images/comment.png';
import '../styles/BlogsCard.css';


const path = 'http://localhost/MyApplicationMentor/public/';

const BlogCard = (props) => {
    return(
        <div className="card-container">
            <div className="inner">
                <img src ={path + props.blog.image}className="blog-img"></img>
                <div className="blog-title">{props.blog.title}</div>
                <div className="time-date-row">
                    <img src={date} className="blog-sm-img"></img>
                    <div className="date">{props.blog.date}</div>
                    <div className="blog-dot"></div>
                    <img src={comment} className="blog-sm-img"></img>
                </div>
                <div className="blog-detail">
                    <ShowMoreText text={props.blog.excerpt} length={50} btnText={{ more:"Read More",less:"Read Less" }} btnCol="#0000ef" textColor="#686767" />
                </div>
            </div>
        </div>
    )
}

export default BlogCard;