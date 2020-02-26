import React,{useState} from 'react';
import UpvoteArrow from '../images/triangle.svg';
import {createUseStyles} from 'react-jss';
import {motion,useAnimation} from 'framer-motion';

const variants = {
    rest: {
        color: "grey",
        y: 0,
        transition: {
          duration: 0.5,
          type: "spring",
          ease: "easeInOut"
        }
      },
      hover: {
        color: "blue",
        y: -2,
        transition: {
          duration: 0.5,
          type: "spring",
          ease: "easeInOut"
        }
      },
      click:{
        scale: [0.8,1.01,0.9,1],
        y: [0,-5,2,0],
        // y: -20,
        transition: {
            duration: 0.4,
            type: "spring",
            ease: "backInOut"
          }

      }
  }

const useStyles = createUseStyles({
    upvoteContainer:{
        // width: '4.375rem',
        height: '1.375rem',
        display:'flex',
        alignItems: 'center',
        background: '#f3f3f3',
        marginRight: '1rem',
        borderRadius: '3rem',
        padding: '0.8rem 0'
    },
    arrowContainer: {
        width: '1.5rem',
        marginLeft: '0.5rem',
        '& *':{
            width: '100%',
            height: '100%'
        }
    },
    upvotesCount:{
        marginLeft: '0.5rem',
        marginRight: '1rem',
        color: '#416aa6',
        fontFamily: 'Roboto',
        fontSize: '1rem',
        '& b': {
          marginRight: '0.2rem'  
        },
        '& span':{
            color: '#6790cd',
            fontFamily: 'Roboto',
            marginLeft: '0.1rem',
        }
    },
});


export default function UpvoteBtn({upvotes,handleUpvote,isVoted,setIsVoted,setIsLoading,isLoading,authTokens}) {
    const classes = useStyles();
    const [isClick,setIsClick] = React.useState(isVoted);
    const handleClick = ()=>{
        setIsClick(!isClick);
        handleUpvote();
        setIsVoted(!isVoted);
    }
    return (
        <div className={classes.upvoteContainer}>
            <motion.div
                // initial={{ opacity: "0" }}
                initial="rest" animate={isClick ? 'click' : 'rest'} variants={variants}>
                <div className={classes.arrowContainer} onClick={handleClick} style={{cursor: 'pointer'}}>
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            width="512px" height="512px" viewBox="0 0 512 512" xmlSpace="preserve">
                        <g>
                            <g>
                                <path fill={isVoted || isClick  ? authTokens ? '#406eb3' : 'none' : 'none'} stroke={isClick ?  '' : "#959595"} strokeWidth="20" d="M275.277,130.955
                                    c-8.926-8.921-23.665-8.921-32.586,0L25.474,348.171c-14.74,14.744-4.266,39.564,16.292,39.564h434.433
                                    c20.559,0,31.032-24.82,16.291-39.564L275.277,130.955z"/>
                            </g>
                        </g>
                        </svg>
                </div>
            </motion.div>
                <div className={classes.upvotesCount}>
                    <b>Upvote</b>
                    <span className={classes.dot}>&bull;</span>
                    <span> {upvotes}</span>
                </div>
        </div>
            // <div className="upvote-triangle" onClick={handleUpvote}>
            //     <div style={{color:"#959595", marginLeft:"20px"}}>{upvotes}</div>
            // </div>

    )
}
