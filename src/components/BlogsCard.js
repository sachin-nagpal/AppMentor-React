import React, { Component, useEffect, useState } from 'react';
import ShowMoreText from './ShowMoreText';
import date from '../images/date.png';
import comment from '../images/comment.png';
import '../styles/BlogsCard.css';
import Tag from '../components/Tag';


const path = 'http://localhost/MyApplicationMentor/public/';

const BlogCard = (props) => {
    if(props.blog.tagarray.length!==0){
        console.log(props.blog.tagarray[0].name)
    }
    return(
        <div className="card-container">
            <div className="inner">
                <img src ={path + props.blog.image}className="blog-img"></img>
                <div>



                    {/* {props.blog.tagarray[0].id} */}
                    {/* {props.blog.tagarray.map(tag =>(
                        <Tag style={{color: "red" , bgColor: "yellow"}} data={tag.name}/>
                    ))} */}

                    {/* {props.blog.tagarray.length!==0 ? 
                            
                    } */}
   
                            

                </div>
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
                <div className="d-flex align-items-center">
                    <img src={props.blog.user_image} className="user_image"></img>
                    <div className="user_name">{props.blog.user_fname} {props.blog.user_lname}</div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard;