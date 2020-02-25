import React from 'react';
import {createUseStyles} from 'react-jss';
import { motion } from "framer-motion";

const useStyles = createUseStyles({
    navProfileContainer:{
        position: 'relative',
    },
    navProfileImg:{
        width: '3rem',
        height: '3rem',
        cursor: 'pointer',
        '& img':{
            width: '100%',
            borderRadius: '50%',
        }
    },
    navMenuDropDown:{
        position: 'absolute',
        left: '-12rem',
        width: '15rem',
    },
    userNameContainer:{
        borderBottom: '1px solid #e5e5e5',
        marginLeft: '1rem'
    },
    userInfoName:{
        color: '#010101',
        fontFamily: 'Roboto',
        fontSize: '1.25rem',
        marginBottom: '0'
    },
    userInfoAbout:{
        color: '#696969',
        fontFamily: 'Roboto',
        fontSize: '1rem',
        marginBottom: '0'
    },
        //userNavDropOpt : Container for each optopn
    userNavDropOpt:{
        display: 'flex',
        height: '3rem',
        alignItems: 'center',
    },
    iconNavDrop:{
        margin: '0 1rem',
        '& svg':{
            transform: 'scale(0.8)'
        }
    }    
});

export default function SingleDropNavLink({content}) {
    const classes = useStyles();
    return (
        <>
        <div className={classes.userNavDropOpt}>
                <motion.div
                    // initial={{ opacity: "0" }}
                    // animate={isMenuOpen ? "openLine" : "closedLine"}
                    // variants={variants}
                    >
                    <span>dd</span>
                </motion.div>
                <div className={classes.iconNavDrop}>
                    {content.icon}
                </div>
            <div className={classes.userNavDropHeading}><span>{content.name}</span></div>
        </div>
        </>
    )
}
