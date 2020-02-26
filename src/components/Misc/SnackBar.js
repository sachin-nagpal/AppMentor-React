import React from 'react';
import { createUseStyles } from 'react-jss';
import { motion } from "framer-motion";

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
      y: 50,
      transition: {
          y: {
              stiffness: 1000,
              velocity: -100
          }
      }
  },
}

const useStyles = createUseStyles({
    snackBarContainer: {
        width: '30.875rem',
        height: '4.1875rem',
        background: '#333333',
        position: 'fixed',
        bottom: '0',
        left: '50%',
        boxShadow: '0 0 14px 1px rgba(180, 180, 180, 0.75)',
        transform: 'translateX(-50%)',
        border: '1px solid #d1d1d1',
        borderRadius: '8px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        '& span': {
            color: '#ffffff'
        }
    }
})
function SnackBar({isOpen,text,handlePopup}) {
    const classes = useStyles();
    return (
        <>
        <motion.div
        initial={{ opacity: "0" }}
        animate={isOpen ? "open" : "closed"}
        variants={variants}>
            <div className={classes.snackBarContainer} onClick={()=>handlePopup(false)}> 
                <span>{text}</span>
            </div>
        </motion.div>
        </>
    );
}

export default SnackBar;