import React,{useState,useEffect} from 'react';
import { createUseStyles } from 'react-jss';
import { Container, Row, Col } from 'reactstrap';
import Logo from '../images/edu-imgs/Layer_27.png';
import ShowMoreText from './ShowMoreText';
import axios from 'axios';

const useStyles = createUseStyles({

})

export default function AnswersSection() {
    const classes = useStyles();
    const [ansData, setAnsData] = useState([]);
     useEffect(() => {
         async function fetchExperties() {
             await axios.get(`http://www.mocky.io/v2/5e1c73ce320000bc072285f1`)
                 .then(res => {
                     const data = res.data.answers;
                     setAnsData(data);
                 }).catch((e) => console.log(e)).finally(() => {

                 })
         }
         fetchExperties();
     }, [])
    return (
        <div className={classes.answers}>
            <div className={classes.titleDiv}>
                <p className={classes.title}>Answers</p>
                {ansData.map((vals,i)=>(
                    <Container key={vals.role} className={classes.ansContainer}>
                        <div className={classes.question}>
                                        <p className={classes.ansQues}>{vals.question}</p>
                                    </div>
                            <Row xs="2">
                                <Col xs="12" md="2" className={classes.ansImgContr}>
                                        <img src={Logo} alt="Logo"/>
                                </Col>
                                <Col xs="12" md="10">
                                    <div className={classes.ansInfo}>
                                        <p className={classes.ansWhere}>{vals.where}</p>
                                        <p className={classes.ansRole}>{vals.answeredOn}</p>
                                        <p className={classes.ansTimeline}>{vals.timeline}</p>
                                    </div>
                                </Col>
                            </Row> 
                            <div>
                                <ShowMoreText text={vals.answer} length={200} btnText={{ more:"see more",less:"see less" }} btnCol="#295caa"/>
                            </div>
                    </Container>
                   ))}  
            </div>            
        </div>            
    )
}
