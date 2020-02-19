import React,{useState} from 'react';
import UpvoteArrow from '../images/triangle.svg';
import {createUseStyles} from 'react-jss';
import {motion} from 'framer-motion';

const variants = {
    open: {
        opacity: 1,
        y: 35,
        transition: {
            y: {
                stiffness: 1000,
                velocity: -100
            }
        }
    },
    closed: {
        opacity: 0,
        y: 100,
        transition: {
            y: {
                stiffness: 1000,
                velocity: -100
            }
        }
    },
  }

const useStyles = createUseStyles({
    upvoteContainer: {
        width: '1.5rem',
        '& img':{
            width: '100%'
        }
    }
});

export default function UpvoteBtn({upvotes,handleUpvote}) {
    const classes = useStyles()
    return (
        <div className={classes.upvoteContainer} onClick={handleUpvote}>
            {/* <motion.div
                initial={{ opacity: "0" }}
                animate={isOpen ? "open" : "closed"}
                variants={variants}> */}
                <img src={UpvoteArrow}/>
            {/* </motion.div> */}
        </div>
            // <div className="upvote-triangle" onClick={handleUpvote}>
            //     <div style={{color:"#959595", marginLeft:"20px"}}>{upvotes}</div>
            // </div>

    )
}
