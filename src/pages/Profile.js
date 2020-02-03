import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import BannerTabs from '../components/BannerTabs';
import ProfileInfoBanner from '../components/ProfileInfoBanner';
import ProfieStats from '../components/ProfileStats';
import ProfilePageServices from '../components/ProfilePageServices';
import SimilarProfiles from '../components/SimilarProfiles';
import { Container, Row, Col } from 'reactstrap';
// import '../main.css';


const useStyles = createUseStyles({
    profile: {
        backgroundColor: '#f5f5f5',
        height: '100%',
        margin: {
            // jss-plugin-expand gives more readable syntax
            top: 4, // jss-plugin-default-unit makes this 5px
            right: 0,
            bottom: 0,
            left: '0rem'
        },
        '& span': {
            // jss-plugin-nested applies this to a child span
             // jss-plugin-camel-case turns this into 'font-weight'
        }
    },
    profileMain: {
        width: '98%',
        margin: '0 auto',
        borderRadius: '0.6rem',
        overflow: 'hidden'
    },
    profileExtra: {
        
    },
    myLabel: {
        fontStyle: 'italic'
    },
    '@media (min-width: 1200px)': {
        profileContainer: {
            width: '90vw'
        }
    },
    '@media screen and (max-width: 768px)': {
        profile: {
            height: '100%',
        },
        profileMain: {
            width: '99%'
        }
    }
})

function Profile(props) {
        const classes = useStyles(props);

    return (
        <div className={classes.profile}>
            <Container> 
                < Row >
                    <Col xs="12" sm="12" md="8">
                        <div className={classes.profileMain}>
                            <ProfileInfoBanner style={{height: '32rem',width:'100%',stripBgCol:'#c3d0ee'}} user={props.user}/>
                            <BannerTabs style={{tabFontColor: '#295caa', bgCol: '#416aa6'}} user={props.user}/>
                        </div>  
                    </Col>  
                    <Col xs="12" sm="12" md="3">
                        <div className={classes.profileExtra}>
                            <ProfilePageServices/>
                            <ProfieStats />
                            <SimilarProfiles/>
                        </div>
                    </Col>    
                </Row>
            </Container>      
        </div>)
}

export default Profile;
