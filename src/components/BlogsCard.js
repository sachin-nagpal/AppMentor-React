import React, { Component, useEffect, useState } from 'react';
import ShowMoreText from './ShowMoreText';
import date from '../images/date.png';
import comment from '../images/comment.png';
import '../styles/BlogsCard.css';
import Tag from '../components/Tag';
import uuid from 'uuid';
import { Link } from 'react-router-dom';
import defaultImg from '../images/noImage.jpg'

const path =`${process.env.REACT_APP_API_HOST_URL}/public/`;
 
    const BlogCard = (props) => {
    if(props.blog.tagarray.length!==0){
        console.log(props.blog.tagarray[0].name)
    }

    const tagColors = {
        tagColor : ['#4c70ab', '#ac5d1c;' , '#a64141', '#2e9557'],
        tagBgColor : ['#eaf8ff', '#fff5ea' , '#fff4f4', '#eafff2']
    }

    return(
        <div className="card-container">
            <div className="inner">
                <img src ={path + props.blog.image}className="blog-img"></img>

                    <div className="mt-3 d-flex">
                        {props.blog.tagarray.length ? 
                        props.blog.tagarray.map((tag,i) => (
                            <Link to={"/allquestions/"+ tag.slug}>
                                <div className="ml-1">
                                    <Tag key={uuid()} style={{color: tagColors.tagColor[Math.floor(Math.random() * tagColors.tagColor.length)] , bgColor: tagColors.tagBgColor[Math.floor(Math.random() * tagColors.tagBgColor.length)]}} data={tag}/>
                                </div>
                            </Link>
                        ))
                        : (
                            <Tag key={uuid()} style={{ color: 'white' , bgColor: 'white' }} data={''}/>
                          )
                        }
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
                    {props.blog.user_image ? (
                        <img src={props.blog.user_image} className="user_image"/>
                    ) : (
                        <img src={defaultImg} className="user_image"/>
                    )}
                    <div className="user_name">{props.blog.user_fname} {props.blog.user_lname}</div>
                </div>
            </div>
        </div>
    )
}

// BlogCard.defaultProps={
//     tagColors : {
//         tagColor : ['#4c70ab', '#ac5d1c;' , '#a64141', '#2e9557'],
//         tagBgColor : ['#eaf8ff', '#fff5ea' , '#fff4f4', '#eafff2']
//     }
// }

export default BlogCard;