import React,{useState} from 'react';
import {createUseStyles} from 'react-jss';
import DivWithArrow from '../HOC/DivWithArrow';
import {useAuth} from '../../context/auth';
import { motion } from "framer-motion";
import { Button } from 'reactstrap';
import ProfileImage from '../../images/noImage.jpg';
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
        width: '15rem'

    }
});

const variants = {
    open: {
        opacity: 1,
        y: 0,
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
export default function NavbarProfile({handleUserLogout}) {
    const [isMenuOpen,setIsMenuOpen] = useState(false);
    const {userName} = useAuth();
    const handleMenu=()=>{
        setIsMenuOpen(!isMenuOpen)
    }
    const classes = useStyles();
    return (
        <div className={classes.navProfileContainer}>
            <div className={classes.navProfileImg} onClick={handleMenu}>
                <img src={ProfileImage} alt="Profile Image"/>
            </div>
            <div className={classes.navMenuDropDown}>
            <motion.div
                initial={{ opacity: "0" }}
                animate={isMenuOpen ? "open" : "closed"}
                variants={variants}>
            <DivWithArrow styles={{
                    borderCol: '#d7d7d7',
                    bgCol: '#f8f8f8',
                    minHeight: '9.375rem',
                    arrowPosFromLeft: '90%',
                    arrowSize: '0.625rem',
                    heigth: '11.25rem',
                    marginTop: '0.9375rem',
                    borderRadius: '5px'
                        }}>
                {userName}
                <Button onClick={handleUserLogout}>Log out</Button>
            </DivWithArrow>
            </motion.div>
            </div>
        </div>
    )
}
