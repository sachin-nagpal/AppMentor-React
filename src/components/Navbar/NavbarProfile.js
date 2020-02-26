import React,{useState,useRef} from 'react';
import DivWithArrow from '../HOC/DivWithArrow';
import {useAuth} from '../../context/auth';
import {createUseStyles} from 'react-jss';
import { motion } from "framer-motion";
import { Button } from 'reactstrap';
import OuterClickCheck from '../../hooks/OuterClickCheck';
import SingleDropNavLink from './SingleDropNavLink';

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

const variants = {
    open: {
        opacity: 1,
        y: 0,
        transition: {
            y: {
                stiffness: 1000,
                velocity: -100
            },
        }
    },
    closed: {
        opacity: 0,
        y: 50,
        transition: {
            y: {
                stiffness: 1000,
                velocity: -100
            },
        }
    },
  }
export default function NavbarProfile({handleUserLogout,userImg,dropContent}) {
    const innerRef = useRef(null);
    const lineRef = useRef(null);
    const [isMenuOpen,setIsMenuOpen] = useState(false);
    const {userName} = useAuth();

    const handleMenu=()=>{
        setIsMenuOpen(!isMenuOpen)
    }
    OuterClickCheck(
        e => setIsMenuOpen(false),
        innerRef
      );
    const classes = useStyles();
 
    return (
        <div className={classes.navProfileContainer} ref={innerRef}>
            <div className={classes.navProfileImg} onClick={handleMenu}>
                <img src={userImg} alt="Profile Image"/>
            </div>
            <div className={classes.navMenuDropDown}>
            <motion.div
                initial={{ opacity: "0" }}
                animate={isMenuOpen ? "open" : "closed"}
                variants={variants}>
            <DivWithArrow styles={{
                    borderCol: '#d7d7d7',
                    bgCol: '#ffffff',
                    minHeight: '9.375rem',
                    arrowPosFromLeft: '90%',
                    arrowSize: '0.625rem',
                    // heigth: '11.25rem',
                    marginTop: '0.9375rem',
                    borderRadius: '5px',
                    padding: '0.625rem 0.5em',
                        }}>
                            {/* {dropContent.map(content=>(
                                <SingleDropNavLink content={content}/>
                            ))} */}
                    <div className={classes.userInfo}>
                        <div className={classes.userNameContainer}>
                            <p className={classes.userInfoName}>{userName}</p>
                            <p className={classes.userInfoAbout}>-</p>

                        </div>
                        
                        <div className={classes.userNavDropOpt}>
                            <motion.div
                                // initial={{ opacity: "0" }}
                                animate={isMenuOpen ? "openLine" : "closedLine"}
                                variants={variants}>
                                {/* <span ref={lineRef}>dd</span> */}
                            </motion.div>
                            <div className={classes.iconNavDrop}>
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="30px" height="30px" xmlSpace="preserve"><g><g>
                                    <path d="M18.486,18.104c1.034-1.013,1.775-2.531,2.115-4.648c0.455,0.083,1.053-0.387,1.261-1.179   c0.214-0.813,0.462-2.178-0.003-2.302c-0.137-0.037-0.279-0.009-0.422,0.063v-2.26c0.076-2.457-0.26-4.829-2.939-5.856   C18.009,0.915,17.977,0,17.977,0c-1.206,1.086-5.785,1.526-5.785,1.526l0.052,0.014C6.438,2.137,7.276,4.224,7.276,7.777v2.26   C7.134,9.965,6.992,9.936,6.854,9.974c-0.463,0.124-0.323,1.437-0.109,2.251c0.209,0.798,0.921,1.321,1.377,1.229   c0.347,2.223,1.041,3.703,1.995,4.67c-4.443,1.625-7.604,5.728-7.604,10.543h23.641C26.152,23.827,22.962,19.71,18.486,18.104z" data-original="#000000" className="active-path" data-old_color="#000000" fill="#696969"/>
                                </g></g> </svg>
                            </div>
                            <div className={classes.userNavDropHeading}><span>View Profile</span></div>
                        </div>
                        <div className={classes.userNavDropOpt}>
                            <motion.div
                                // initial={{ opacity: "0" }}
                                animate={isMenuOpen ? "openLine" : "closedLine"}
                                variants={variants}>
                                {/* <span ref={lineRef}>dd</span> */}
                            </motion.div>
                            <div className={classes.iconNavDrop}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="30px" height="30px"><g><path d="m499.953125 197.703125-39.351563-8.554687c-3.421874-10.476563-7.660156-20.695313-12.664062-30.539063l21.785156-33.886719c3.890625-6.054687 3.035156-14.003906-2.050781-19.089844l-61.304687-61.304687c-5.085938-5.085937-13.035157-5.941406-19.089844-2.050781l-33.886719 21.785156c-9.84375-5.003906-20.0625-9.242188-30.539063-12.664062l-8.554687-39.351563c-1.527344-7.03125-7.753906-12.046875-14.949219-12.046875h-86.695312c-7.195313 0-13.421875 5.015625-14.949219 12.046875l-8.554687 39.351563c-10.476563 3.421874-20.695313 7.660156-30.539063 12.664062l-33.886719-21.785156c-6.054687-3.890625-14.003906-3.035156-19.089844 2.050781l-61.304687 61.304687c-5.085937 5.085938-5.941406 13.035157-2.050781 19.089844l21.785156 33.886719c-5.003906 9.84375-9.242188 20.0625-12.664062 30.539063l-39.351563 8.554687c-7.03125 1.53125-12.046875 7.753906-12.046875 14.949219v86.695312c0 7.195313 5.015625 13.417969 12.046875 14.949219l39.351563 8.554687c3.421874 10.476563 7.660156 20.695313 12.664062 30.539063l-21.785156 33.886719c-3.890625 6.054687-3.035156 14.003906 2.050781 19.089844l61.304687 61.304687c5.085938 5.085937 13.035157 5.941406 19.089844 2.050781l33.886719-21.785156c9.84375 5.003906 20.0625 9.242188 30.539063 12.664062l8.554687 39.351563c1.527344 7.03125 7.753906 12.046875 14.949219 12.046875h86.695312c7.195313 0 13.421875-5.015625 14.949219-12.046875l8.554687-39.351563c10.476563-3.421874 20.695313-7.660156 30.539063-12.664062l33.886719 21.785156c6.054687 3.890625 14.003906 3.039063 19.089844-2.050781l61.304687-61.304687c5.085937-5.085938 5.941406-13.035157 2.050781-19.089844l-21.785156-33.886719c5.003906-9.84375 9.242188-20.0625 12.664062-30.539063l39.351563-8.554687c7.03125-1.53125 12.046875-7.753906 12.046875-14.949219v-86.695312c0-7.195313-5.015625-13.417969-12.046875-14.949219zm-152.160156 58.296875c0 50.613281-41.179688 91.792969-91.792969 91.792969s-91.792969-41.179688-91.792969-91.792969 41.179688-91.792969 91.792969-91.792969 91.792969 41.179688 91.792969 91.792969zm0 0" data-original="#000000" className="active-path" data-old_color="#000000" fill="#696969"/></g> </svg>
                            </div>
                            <div className={classes.userNavDropHeading}><span>Account Settings</span></div>
                        </div>
                        <div className={classes.userNavDropOpt}>
                            <motion.div
                                // initial={{ opacity: "0" }}
                                animate={isMenuOpen ? "openLine" : "closedLine"}
                                variants={variants}>
                                {/* <span ref={lineRef}>dd</span> */}
                            </motion.div>
                            <div className={classes.iconNavDrop}>
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" xmlSpace="preserve" viewBox="0 0 512 512" width="30px" height="30px"><g><g>
                                    <g>
                                        <g>
                                            <path d="M330.667,384h-21.333c-5.891,0-10.667,4.776-10.667,10.667v74.667h-256V42.667h256v74.667     c0,5.891,4.776,10.667,10.667,10.667h21.333c5.891,0,10.667-4.776,10.667-10.667V42.667C341.333,19.103,322.231,0,298.667,0h-256     C19.103,0,0,19.103,0,42.667v426.667C0,492.898,19.103,512,42.667,512h256c23.564,0,42.667-19.102,42.667-42.667v-74.667     C341.333,388.776,336.558,384,330.667,384z" data-original="#000000" className="active-path" data-old_color="#000000" fill="#696969"/>
                                            <path d="M508.542,248.135l-128-117.333c-3.125-2.844-7.656-3.625-11.5-1.896c-3.875,1.698-6.375,5.531-6.375,9.76V160     c0,3.021,1.281,5.906,3.531,7.927l74.151,66.74H138.667c-5.896,0-10.667,4.771-10.667,10.667v21.333     c0,5.896,4.771,10.667,10.667,10.667h301.682l-74.151,66.74c-2.25,2.021-3.531,4.906-3.531,7.927v21.333     c0,4.229,2.5,8.063,6.375,9.76c1.375,0.615,2.844,0.906,4.292,0.906c2.615,0,5.198-0.969,7.208-2.802l128-117.333     C510.75,261.844,512,258.99,512,256S510.75,250.156,508.542,248.135z" data-original="#000000" className="active-path" data-old_color="#000000" fill="#696969"/>
                                        </g>
                                     </g>
                                    </g></g> </svg>
                            </div>
                            <div className={classes.userNavDropHeading}><span onClick={handleUserLogout}>Log out</span></div>
                        </div>
                    </div>
            </DivWithArrow>
            </motion.div>
            </div>
        </div>
    )
}


NavbarProfile.defaultProps = {
    dropContent : [
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="30px" height="30px" xmlSpace="preserve" ><g><g>
                        <path d="M18.486,18.104c1.034-1.013,1.775-2.531,2.115-4.648c0.455,0.083,1.053-0.387,1.261-1.179   c0.214-0.813,0.462-2.178-0.003-2.302c-0.137-0.037-0.279-0.009-0.422,0.063v-2.26c0.076-2.457-0.26-4.829-2.939-5.856   C18.009,0.915,17.977,0,17.977,0c-1.206,1.086-5.785,1.526-5.785,1.526l0.052,0.014C6.438,2.137,7.276,4.224,7.276,7.777v2.26   C7.134,9.965,6.992,9.936,6.854,9.974c-0.463,0.124-0.323,1.437-0.109,2.251c0.209,0.798,0.921,1.321,1.377,1.229   c0.347,2.223,1.041,3.703,1.995,4.67c-4.443,1.625-7.604,5.728-7.604,10.543h23.641C26.152,23.827,22.962,19.71,18.486,18.104z" data-original="#000000" className="active-path" data-old_color="#000000" fill="#696969"/>
                    </g></g> </svg>,
            name: 'View Profile',
            link: ''
        },{
            icon:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="30px" height="30px"><g><path d="m499.953125 197.703125-39.351563-8.554687c-3.421874-10.476563-7.660156-20.695313-12.664062-30.539063l21.785156-33.886719c3.890625-6.054687 3.035156-14.003906-2.050781-19.089844l-61.304687-61.304687c-5.085938-5.085937-13.035157-5.941406-19.089844-2.050781l-33.886719 21.785156c-9.84375-5.003906-20.0625-9.242188-30.539063-12.664062l-8.554687-39.351563c-1.527344-7.03125-7.753906-12.046875-14.949219-12.046875h-86.695312c-7.195313 0-13.421875 5.015625-14.949219 12.046875l-8.554687 39.351563c-10.476563 3.421874-20.695313 7.660156-30.539063 12.664062l-33.886719-21.785156c-6.054687-3.890625-14.003906-3.035156-19.089844 2.050781l-61.304687 61.304687c-5.085937 5.085938-5.941406 13.035157-2.050781 19.089844l21.785156 33.886719c-5.003906 9.84375-9.242188 20.0625-12.664062 30.539063l-39.351563 8.554687c-7.03125 1.53125-12.046875 7.753906-12.046875 14.949219v86.695312c0 7.195313 5.015625 13.417969 12.046875 14.949219l39.351563 8.554687c3.421874 10.476563 7.660156 20.695313 12.664062 30.539063l-21.785156 33.886719c-3.890625 6.054687-3.035156 14.003906 2.050781 19.089844l61.304687 61.304687c5.085938 5.085937 13.035157 5.941406 19.089844 2.050781l33.886719-21.785156c9.84375 5.003906 20.0625 9.242188 30.539063 12.664062l8.554687 39.351563c1.527344 7.03125 7.753906 12.046875 14.949219 12.046875h86.695312c7.195313 0 13.421875-5.015625 14.949219-12.046875l8.554687-39.351563c10.476563-3.421874 20.695313-7.660156 30.539063-12.664062l33.886719 21.785156c6.054687 3.890625 14.003906 3.039063 19.089844-2.050781l61.304687-61.304687c5.085937-5.085938 5.941406-13.035157 2.050781-19.089844l-21.785156-33.886719c5.003906-9.84375 9.242188-20.0625 12.664062-30.539063l39.351563-8.554687c7.03125-1.53125 12.046875-7.753906 12.046875-14.949219v-86.695312c0-7.195313-5.015625-13.417969-12.046875-14.949219zm-152.160156 58.296875c0 50.613281-41.179688 91.792969-91.792969 91.792969s-91.792969-41.179688-91.792969-91.792969 41.179688-91.792969 91.792969-91.792969 91.792969 41.179688 91.792969 91.792969zm0 0" data-original="#000000" className="active-path" data-old_color="#000000" fill="#696969"/></g> </svg>,
            name: 'Account Settings',
            link: ''
        },{
            icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" xmlSpace="preserve" viewBox="0 0 512 512" width="30px" height="30px"><g><g>
            <g>
                <g>
                    <path d="M330.667,384h-21.333c-5.891,0-10.667,4.776-10.667,10.667v74.667h-256V42.667h256v74.667     c0,5.891,4.776,10.667,10.667,10.667h21.333c5.891,0,10.667-4.776,10.667-10.667V42.667C341.333,19.103,322.231,0,298.667,0h-256     C19.103,0,0,19.103,0,42.667v426.667C0,492.898,19.103,512,42.667,512h256c23.564,0,42.667-19.102,42.667-42.667v-74.667     C341.333,388.776,336.558,384,330.667,384z" data-original="#000000" className="active-path" data-old_color="#000000" fill="#696969"/>
                    <path d="M508.542,248.135l-128-117.333c-3.125-2.844-7.656-3.625-11.5-1.896c-3.875,1.698-6.375,5.531-6.375,9.76V160     c0,3.021,1.281,5.906,3.531,7.927l74.151,66.74H138.667c-5.896,0-10.667,4.771-10.667,10.667v21.333     c0,5.896,4.771,10.667,10.667,10.667h301.682l-74.151,66.74c-2.25,2.021-3.531,4.906-3.531,7.927v21.333     c0,4.229,2.5,8.063,6.375,9.76c1.375,0.615,2.844,0.906,4.292,0.906c2.615,0,5.198-0.969,7.208-2.802l128-117.333     C510.75,261.844,512,258.99,512,256S510.75,250.156,508.542,248.135z" data-original="#000000" className="active-path" data-old_color="#000000" fill="#696969"/>
                </g>
             </g>
            </g></g> </svg>,
            name: 'Log out',
            link: ''
        }
    ]
}