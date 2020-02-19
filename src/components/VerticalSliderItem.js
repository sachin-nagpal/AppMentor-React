import React from 'react';
import { createUseStyles } from 'react-jss';
import { Container, Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';
import Tag from '../components/Tag';
import uuid from 'uuid';
import { Link } from 'react-router-dom';
import ReactCardFlip from 'react-card-flip';
import parse, { domToReact } from 'html-react-parser';
import striptags from 'striptags';


const useStyles = createUseStyles({
    verticalSlideItem: st =>({
        overflow:'hidden',
        height: st.height,
        margin: {
            top: '2rem'
        },
        padding: '0.4375rem 0.625rem',
        borderRadius: '0.4375rem',
        border: `1px solid ${st.borderCol}`,
        backgroundColor: '#ffffff',
        alignItems: 'center',

    }),

    quesDescrip: { 
        margin: {
            botton: '0.3rem'
        },
        color: '#393939',
        fontFamily: 'Roboto',
        fontSize: '1.25rem'
    },

    quesTags: {
        display: 'flex',
    },
    previewBtn: {
        color: '#416aa6',
        border: '2px solid #416aa6',
        fontWeight: 'bold',
        '&:hover': {
            backgroundColor: '#416aa6',
            color: '#fff'
          }
    },
    prevAnsContainer: {
        justifyContent: 'space-between',
        padding: '0px 23px',
        alignItems: 'center'
    },
    ansDescrip: {
        width: '80%',
        fontSize: '1rem',
        position: 'relative'
    },
    btnContainer:{
        position: 'absolute',
        right: '3%',
        top: '50%',
        transform: 'translateY(-50%)'
    },
    readMoreBtn: {
        transition: 'background 0.1s',
        bottom: '18px',
        position: 'absolute',
        transform: 'translateY(-1.5625rem)',
        width: '100%',
        height: '2rem',
        textAlign: 'center',
        // background: 'rgb(0, 0, 0)',
        background: 'linear-gradient(0deg, rgba(248, 248, 248, 1) 0%, rgba(248, 248, 248,0.5) 80%, rgba(255,255,255,0.01) 100%)'
    },
    readMBtn: {
        // all: 'unset',
        width: '10rem',
        background: 'rgba(248, 248, 248,1)',
        border: '1px solid #d7d7d7',
        borderRadius: '10px'
    },
})



function VerticalSlideItem({st,data,colors}) {
   
    const [isFlipped,setIsFlipped] = React.useState(false);

    const handleClick = (e)=> {
        e.preventDefault();
        setIsFlipped(!isFlipped)
    }

    const classes = useStyles(st);
    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">

        <div className={classes.verticalSlideItem}>
            <Container className={classes.ansContainer}>
                <Row className="align-items-center">
                    <Col md="9" lg="10">
                        <div className={classes.quesDescrip}>
                            <div>{data.title}</div>
                        </div>
                        <div className={classes.quesTags}> 
                            {data.topics.map((tag,i) => (
                                <>
                                <Link to={"/allquestions/"+ tag.slug}>
                                    <Tag key={uuid()} st={{color: colors.tagColor[Math.floor(Math.random() * colors.tagColor.length)] , bgColor: colors.tagBgColor[Math.floor(Math.random() * colors.tagBgColor.length)]}} data={tag}/>
                               </Link>
                               </>
                            ))}
                        </div>
                    </Col>
                    <Col>
                        <Button outline className={classes.previewBtn} onClick={handleClick}>Preview Answer</Button>{' '}
                    </Col>
                </Row>
            </Container>
        </div>

        <div className={classes.verticalSlideItem}>
            <Container className={classes.ansContainer}>
                <Row className="align-items-center">    
                    <div className={classes.ansDescrip}>
                        {parse(data.answer)}
                        {<div className={classes.readMoreBtn}>
                            <Link to={"/singlequestion/"+ data.slug}>
                                <button className={classes.readMBtn}>read more</button>
                            </Link>
                        </div>}
                
                    </div>
                    <div className={classes.btnContainer}>
                        <Button outline onClick={handleClick} className={classes.previewBtn}>View Question</Button>{' '}
                    </div>
                </Row>
            </Container>
        </div>

        </ReactCardFlip>
    );
}

VerticalSlideItem.defaultProps={
    colors : {
        tagColor : ['#4c70ab', '#ac5d1c;' , '#a64141', '#2e9557'],
        tagBgColor : ['#eaf8ff', '#fff5ea' , '#fff4f4', '#eafff2']
    }
}

export default VerticalSlideItem;