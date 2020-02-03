import React, { useEffect,useState } from 'react';
import axios from 'axios';
import { createUseStyles } from 'react-jss';
import lacation from '../images/lacation.png';
import BagIcon from '../images/bag.png';
import HatIcon from '../images/hat.png';
import {Button} from 'reactstrap';
import uuid from 'uuid';

const useStyles = createUseStyles({
    profileInfoBannerContainer: style => ({
        display: 'flex',
        justifyContent: 'center',
        position:'relative'
    }),
    profileBanner: style=> ({
            backgroundColor: '#ffffff',
            minHeight: style.height,
            height: 'fit-content',
            width: style.width,
            boxShadow: '1px 1px 5px 1px rgba(203, 203, 203, 0.75)',
            fontWeight: 'bold', // jss-plugin-camel-case turns this into 'font-weight'
            position:'relative',
            margin: {
                // jss-plugin-expand gives more readable syntax
                top: 4, // jss-plugin-default-unit makes this 5px
                right: 0,
                bottom: 0,
                left: '0rem'
            }    
    }),
    parenContentDiv:{
        height: 'fit-content',
        boxShadow: 'rgba(203, 203, 203, 0.75) 1px 1px 5px 1px',
        fontWeight: 'bold',
        backgroundColor: '#ffffff',
    },
    userInfoContainer:{
        maxWidth: '50%',
        position: 'absolute',
        top: '20%',
        marginLeft: '2rem'
    },
    styleBanner: style => ({
        height: 'calc(100% / 3)',
        backgroundColor: style.stripBgCol,
        position: 'relative',
        minHeight: '10rem'
    }),
    bannerAvatar: {
        width: '50%',
        height: '100%',
        borderRadius: '50%',
        '& img':{
            border: '3px solid #fff',
            boxShadow: '1px 1px 5px 1px rgba(203, 203, 203, 0.75)',
            justifyContent: 'center',
            height: '100%',
            borderRadius: '50%',
        }
    },
    userName: {
        marginTop: '10%',
        textAligm: 'center',
        width: 'fit-content',
        textAlign: 'center',
        '& p':{
            display: 'inline-block',
            fontSize: '1.5rem',
            marginBottom: '0.5rem'
        }
    },
    about:{
        fontWeight: '400',
        fontSize: '1rem',
        '& p':{
            marginBottom: '0.5rem'
        }
    },
    location:{
        display: 'flex',
        justifyContent: 'left',
        '& p':{
        fontSize: '0.8rem',
        margin: 'auto 0.3rem',
        color:'#7e7e7e'}
    },
    iconImg:{
        display: 'inline-block',

    },
    // right Container
    btnAndMore:{
        position: 'absolute',
        right: '0',
        display: 'flex',
        flexDirection: 'column',
        margin:{
            top: '1.5rem'
        }
    },
    btnContainer:{
        display: 'flex',
        justifyContent: 'space-around',
        maxWidth: '80%',
        position: 'relative',
        right: '0'
    },
    websitesLinks:{
     
    },
    contactCont:{
        display: 'flex',
        justifyContent: 'flex-start',
        margin:{
            top: '1rem'
        },
        '& p':{
            margin: {
                top: 'auto',
                left: '0.5rem',
                right: '0.5rem',
            }
        }
    },
    qualifications:{
        position: 'absolute',
        bottom: '1rem',
        width: '90%',
        left: '50%',
        transform: 'translateX(-50%)',
        border: '1px solid #9db8e1',
        backgroundColor: '#f5f9ff',
        maxHeight: '20%',
        minHeight: '5rem',
        overflowY: 'scroll',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        '&::-webkit-scrollbar': {
            display: 'none'
        },
    },
     qualificationsCount: {
         maxWidth: '80%',
         margin: 'auto',
        '& span':{
            fontSize: '0.9rem',
            color: '#15234b'
        },
        '& span:not(:last-child)': {
             marginRight: '10px'
        }
    },
    '@media screen and (max-width: 768px)': {
        bannerAvatar: {
            width: '100%',
            position: 'relative',
            '& img':{
                margin: '0 auto',
                position: 'relative',
                left: '50%',
                transform: 'translateX(-50%)',

            }
        },
        userInfoContainer:{
            width: '100%',
            position: 'relative',
            left: '50%',
            transform: 'translateX(-50%)',
            top: '-4rem',
            marginLeft: '0rem'
        },
        userName: {
            textAligm: 'center',
            width: 'fit-content',
            textAlign: 'center',
            margin: '0 auto',
            '& p':{
                display: 'inline-block',
                fontSize: '1.5rem'
            }
        }, 
        about:{
            textAlign: 'center',
            '& p':{
                color:'#4e4e4e'
            }
        },
        location:{
            display:'flex',
            justifyContent: 'center',
            '& p':{
            fontSize: '0.8rem',
            margin: 'auto 0.3rem',
            // width: '100%',
            textAlign:'center',
            color:'#7e7e7e'}
        },

        // right Container
    btnAndMore:{
        position: 'relative',
        right: '0',
        top: '-3rem',
        display: 'flex',
        flexDirection: 'column',
        margin:{
            // top: '1.5rem'
        }
    },
    btnContainer:{
        display: 'flex',
        justifyContent: 'space-around',
        width: '50%',
        position: 'relative',
        margin: '0 auto'
    },
    websitesLinks:{
     
    },
    contactCont:{
        display: 'flex',
        maxWidth: '100%',
        justifyContent: 'center',
        margin:{
            top: '1rem'
        },
        '& p':{
            margin: {
                top: 'auto',
                left: '0.5rem',
                right: '0.5rem',
            }
        }
    },
    iconImg:{
        '& img':{
            
        },
        },
    qualifications: {
        position: 'relative'
    }
    }, 
})


function ProfileInfoBanner({style,user}) {
    const classes = useStyles(style);
    const userAvatar = user.picture;
    const userName = user.name;
    const userLocation = user.location;
    const userContact = {
        phone: user.phone,
        email: user.email
    };
    const [experties, setExperties] = useState(['MiM']);
    useEffect(() => {
        async function fetchExperties() {
            await axios.get(`http://www.mocky.io/v2/5e1b02e43100008d324f321c`)
                .then(res => {
                    const data = res.data.experties;
                    setExperties(data);
                })
        }
        // async function fetchExperties2() {
        //     await axios.get(`http://localhost/MyApplicationMentor/api/allquestions`)
        //         .then(res => {
        //             console.log(res);
        //         })
        // }
        // fetchExperties2();
        fetchExperties();
    },[])
    return (
        <div className={classes.profileInfoBannerContainer}>
            <div className={classes.profileBanner}>
              <div className={classes.styleBanner}></div>
                    <div  className={classes.parenContentDiv}>
                        <div className={classes.userInfoContainer}>
                            <div className={classes.bannerAvatar}>
                                {userAvatar && <img src={user.picture.large} alt="Avatar"/>}
                            </div>
                            <div className={classes.userName}>
                                {userName && <p>{userName.first} {userName.last}</p>}
                            </div>
                            <div className={classes.about}>
                                    {userLocation && <p>{userLocation.city}, {userLocation.state} {userLocation.country}, Pin : {userLocation.postcode}</p>}
                            </div>
                            <div className={classes.location}>
                                <div className={classes.iconImg}>
                                    <img src={lacation} alt="Location Icon"/>
                                </div>
                                {userLocation && <p>{userLocation.city}, {userLocation.country}</p>}
                            </div>
                        </div> 
                    
                    <div className={classes.btnAndMore}>
                        <div className={classes.btnContainer}>
                            <Button outline color="primary">Follow</Button>{' '}
                            <Button outline color="secondary">More</Button>{' '}
                        </div>
                        
                        <div className={classes.websitesLinks}>
                            {userContact.email && 
                            <div className={classes.contactCont}>
                                <div className={classes.iconImg}>
                                    <img src={BagIcon} alt="icon"/>
                                </div>
                                <p>{userContact.email}</p>
                            </div>}

                            {userContact.phone && 
                                <div className={classes.contactCont}>
                                    <div className={classes.iconImg}>
                                    <img src={HatIcon} alt="icon"/>
                                    </div>
                                    <p>{userContact.phone}</p>
                                </div>}
                        </div>
                    </div>
                        <div className={classes.qualifications}>
                            <div className={classes.qualificationsCount}>
                                {
                                experties.map((ex,i) => (
                                    experties.length-1 === i ? <span key={uuid()}>{ex}</span>:<span key={uuid()}>{ex} |</span>
                                        ))
                                    }
                            </div>    
                        </div>
                    </div>
            </div>  
        </div>  
    )
}

export default ProfileInfoBanner;
