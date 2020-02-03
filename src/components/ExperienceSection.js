import React,{useEffect,useState} from 'react';
import { createUseStyles } from 'react-jss';
import axios from 'axios';
import ShowMoreText from './ShowMoreText';
import { Container, Row, Col } from 'reactstrap';

  //Images
import Logo from '../images/edu-imgs/Layer_21.png';  

const useStyles = createUseStyles({
    ExperienceSection: style=>({
        width: style.width,
        margin: '0 auto'
    }),
    expContainer:{
        '&:not(:last-child)':{
            borderBottom: '2px solid #d2d2d2',
            padding: {
                top: 0,
                bottom: '1rem',
            },
    },
   
        padding: {
            top: '1rem',
            bottom: '1rem',
        },
        margin: {
            top: '1rem',
            bottom: '1rem',
        }
    
},
    expImgContr:{
        margin: 'auto 0',
        position: 'relative',
        minHeight: '2rem',
        '& img':{
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)'
        }
    },
    expRole:{
        margin: '0',
        fontSize: '1.1rem',
        fontWeight: '500'
    },
    expWhere:{
        margin: '0',
        fontSize: '1rem',
        fontWeight: '400'
    },
    expTimeline:{
        margin: '0',
        fontSize: '0.9rem',
        fontWeight: '400',
        color: '#8d8c8c'
    },
    title: {
        fontSize: '1.2rem',
     },
})

export default function ExperienceSection({style,title}) {
    const [expData,setExpData] = useState([]);
    useEffect(()=>{
        async function fetchExperties() {
            await axios.get(`http://www.mocky.io/v2/5e1c2cac3200007a00228228`)
                .then(res => {
                    const data = res.data.experience;
                    setExpData(data);
                }).catch((e) => console.log(e)).finally(() => {
                    
                })
        }
        fetchExperties();
    },[])

    const classes = useStyles(style);
    return (
        <div className={classes.ExperienceSection}>
            <p className={classes.title}>{title}</p>
            <div className={classes.experienceBlocks}>
                {expData.map((vals,i)=>(
                    <Container key={vals.role} className={classes.expContainer}>
                            <Row xs="2">
                                <Col xs="12" md="2" className={classes.expImgContr}>
                                        <img src={Logo} alt="logo"/>
                                </Col>
                                <Col xs="12" md="10">
                                    <div className={classes.expInfo}>
                                        <p className={classes.expRole}>{vals.role}</p>
                                        <p className={classes.expWhere}>{vals.where}</p>
                                        <p className={classes.expTimeline}>{vals.timeline}</p>
                                    </div>
                                </Col>
                            </Row> 

                            <div>
                                <ShowMoreText text={vals.descrip} length={200} btnText={{ more:"see more",less:"see less" }} btnCol="#295caa"/>
                            </div>
                    </Container>
                ))}
            </div>
        </div>
    )
}
