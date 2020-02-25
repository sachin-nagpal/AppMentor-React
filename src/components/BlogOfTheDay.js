import React,{useState , useEffect} from 'react';
import axios from 'axios';
import ShowMoreText from './ShowMoreText';
import {Link} from 'react-router-dom';
import '../styles/BlogsCard.css';
import img from '../images/image.jpeg';
import defaultImg from '../images/noImage.jpg';
import date from '../images/date.png';
import comment from '../images/comment.png';
import Tag from '../components/Tag';
import uuid from 'uuid';
import {createUseStyles} from 'react-jss';

const path =`${process.env.REACT_APP_API_HOST_URL}/public/`;

const useStyles = createUseStyles({
    mainContainer: {
        borderRadius: '12px',
        boxShadow: '-1px 1px 10px 1px rgba(119, 119, 119, 0.75)',
        margin: '2rem 1rem 0rem',
        width: '100% !important',
        display: 'flex'
    },

    bigImg: {
        borderRadius: '12px',
        height: '100%',
        width: '100%'
    },

    hashHeadContainer :{
        display: 'flex',
        justifyContent: 'flex-end'
    },

    hashHead :{
        backgroundColor: '#416aa6',
        color: '#ffffff',
        fontFamily: 'Merriweather',
        margin: '0.5rem 0rem',
        width: 'fit-content',
        fontSize: '1.5rem',
        borderTopLeftRadius: '25px',
        borderBottomLeftRadius: '25px',
        padding: '0.3rem 2rem 0.3rem 2.2rem'
    },
    tagContainer : {
        display: 'flex'
    }
    })

const BlogOfTheDay = (props) => {

const tagColors = {
    tagColor : ['#4c70ab', '#ac5d1c;' , '#a64141', '#2e9557'],
    tagBgColor : ['#eaf8ff', '#fff5ea' , '#fff4f4', '#eafff2']
}

const classes = useStyles();

  return (
    <>
        <div className={classes.mainContainer}>
            <div className="w-50">
                <img src={path + props.blog.image} className={classes.bigImg}></img>
            </div>
            <div className="w-50">
                <div>
                    <div className={classes.hashHeadContainer}>
                        <div className={classes.hashHead}>#BlogOfTheDay</div>
                    </div>
                    <div className="p-3">
                        <div className={classes.tagContainer}>
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

                        <div className="blog-title">Average Salaries after Masters in Management Degree.</div>
                        <div className="time-date-row">
                            <img src={date} className="blog-sm-img"></img>
                            <div className="date">{props.blog.date}</div>
                            <div className="blog-dot"></div>
                            <img src={comment} className="blog-sm-img"></img>
                        </div>
                        <div className="blog-detail">
                            <ShowMoreText text={props.blog.excerpt} length={200} btnText={{ more:"Read More",less:"Read Less" }} btnCol="#0000ef" textColor="#686767" />   
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
            </div>
        </div>
    </>
  );
}

BlogOfTheDay.defaultProps={
    colors : {
        tagColor : ['#4c70ab', '#ac5d1c;' , '#a64141', '#2e9557'],
        tagBgColor : ['#eaf8ff', '#fff5ea' , '#fff4f4', '#eafff2']
    }
}

export default BlogOfTheDay;