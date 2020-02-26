import React, { useState, useEffect, useRef } from 'react'
import edit from '../images/edit.png';
import img from '../images/image.jpeg';
import ShowMoreText from './ShowMoreText';
import {Link} from 'react-router-dom';
import uuid from 'uuid';
import parse from 'html-react-parser';
import {createUseStyles} from 'react-jss';
import AskedByStrip from '../components/Misc/AskedByStrip';
import DivWithArrow from '../components/HOC/DivWithArrow';
import ProfileImage from '../images/noImage.jpg';

const useStyles = createUseStyles({
    singleQuestionContainer:{
        marginBottom: '4rem'
    },
    singleQuestionQuestion: {
    // margin: 5px 0px,
    // lineHeight: 1.2em,
    color: '#295caa',
    fontFamily: 'Roboto',
    fontSize: '1.375rem',
    fontWeight: '700',
    
    },
    ansContiner: {
        '&:hover $readMoreBtn': {
           background: 'linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255,0.8) 80%, rgba(255,255,255,0.02) 100%)'
         },
    },
    singleQuestionAnswerContainer: {
        position: 'relative', 
         
    },
    singleQuestionAnswer: {
        color: '#0f0f0f',
        fontFamily: 'Roboto',
        maxHeight: '6.3rem',
        overflow: 'hidden',
    },
    readMoreBtn: {
        transition: 'background 0.1s',
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

    avatar: {
        verticalAlign: 'middle',
        width: '2.5rem',
        height: '2.5rem',
        borderRadius: '50%',
    },
    userInfoContainer: {
        position: 'relative',
        bottom: '0',
        // marginBottom: '0.625rem',
        marginTop: '0.625rem',
        display: 'flex'
    },
    infoContain: {
        marginLeft: '1rem',  
        color: '#4e4e4e',
        fontFamily: 'Roboto',
        fontSize: '0.9rem',
        textAlign: 'left',
        '& p': {
            margin: 'auto',
        }
    }

})

export default function SingleQuestion({quesData,getTagData,styles}) {
    // console.log(quesData)
    // console.log(quesData.img)
    const [height, setHeight] = useState(0)
    const classes = useStyles(styles);
    const ref = useRef(0);
     useEffect(() => {
         setHeight(ref.current.clientHeight)
     },[])
    return (
       <article className={classes.singleQuestionContainer}>
           <AskedByStrip name={`${quesData.fname} ${quesData.lname}`} tags={quesData.topics} getTagData={getTagData} url={`/allquestions/`}/>
           <Link to={{ pathname: `/singlequestion/${quesData.slug}` }} style={{textDecoration: 'none'}}>
           <div className={classes.singleQuestionQuestion}>{quesData.title}</div></Link>
           <Link to={{ pathname: `/singlequestion/${quesData.slug}` , isEditing: false }} style={{textDecoration: 'none'}} target="_blank">
           <div className="questions__answers-about"><img src={edit} height="15px" width="15px" alt="img"/><span> {quesData.count} </span><div style={{height:"5px", width:"5px", borderRadius:"50%", backgroundColor: "#c4c4c4"}}></div>{quesData.created_at}</div>
                {quesData.count > 0 &&
                    <div className={classes.ansContiner}>
                        <DivWithArrow styles={{
                            borderCol: '#d7d7d7',
                            bgCol: '#f8f8f8',
                            minHeight: '9.375rem',
                            arrowPosFromLeft: '10%',
                            arrowSize: '0.625rem',
                            heigth: '11.25rem',
                            marginTop: '0.9375rem'
                        }}>
    
                            <div className={classes.singleQuestionAnswerContainer}>
                                <div className={classes.singleQuestionAnswer} ref={ref}>
                                    {/* {quesData.answer && parse(quesData.answer.text)} */}
                                    {quesData.answer && parse(quesData.answer.text)}
                                </div>
                                {height >= 100 && <div className={classes.readMoreBtn}><button className={classes.readMBtn}>read more</button></div>}
                            </div>
                            <div className={classes.userInfoContainer}>
                                <div className={classes.userImage}>
                                    <img src={ProfileImage} className={classes.avatar} alt={`${quesData.answer.fname}${quesData.created_at}`} />
                                </div>
                                <div className={classes.infoContain}>
                                    <p>{quesData.answer.usersname}</p>
                                    <p>{quesData.created_at}</p>
                                </div>
                            </div>
                        </DivWithArrow>
                    </div>}    
            </Link>
            {quesData.count <= 0 &&
                <Link to={{ pathname: `/singlequestion/${quesData.slug}`, isEditing: true }} style={{ textDecoration: 'none' }}>
                    <div>Be the first to <span >answer</span>.</div>
                </Link>}
       </article>
    )
}









// { <div className="mb-5">
// <div>
// <div className="d-flex">
// {/* <div className="asked-by">Asked by</div>
// <div className="asked-by-name">{quesData.fname}</div>
// <div className="asked-by"> in </div>
// <div className="asked-by-name">{quesData.topics.map((topic,i)=>(<span key={uuid()} onClick={()=>getTagData(topic.slug)} style={{cursor: 'pointer'}}>{topic.name}, </span>))}</div> */}
// <AskedByStrip name={`${quesData.fname} ${quesData.lname}`} tags={quesData.topics} getTagData={getTagData} url={`/allquestions/`}/>
// </div>

// <div className="questions__questions">{quesData.title}</div>

// <div className="questions__answers-about"><img src={edit} height="15px" width="15px"/><span> {quesData.count} </span><div style={{height:"5px", width:"5px", borderRadius:"50%", backgroundColor: "#c4c4c4"}}></div>{quesData.created_at}</div>

// {quesData.count > 0 ?
//  <div className="questions__answers-container" style={{cursor: 'pointer'}}>
//             <div className="answers-triangle"></div>
//             <Link to={{ pathname: `/singlequestion/${quesData.slug}` }} style={{textDecoration: 'none'}}>
//         <div className="questions__answers" >
//                 {quesData.answer && parse(quesData.answer.text)}
//                 {quesData.answer.text.length > 200 &&
//                 <>
//                 ...read more
//                 </>
//                 }
//                 <div className="user-about-container">
//                     <div className="d-flex align-items-center">
//                         <img className="user-img" src={img}></img>
//                         <div className="questions__user-about">
//                             <div style={{fontSize:"17px"}}>{quesData.answer.usersname}</div> 
//                             <div style={{fontSize:"15px"}}>{}</div>
//                         </div>
//                     </div>
//             </div>
//                 </div>
//                 </Link>
//     </div>
// : <div>Be the first to <Link to={{ pathname: `/singlequestion/${quesData.slug}` , isEditing: true }}>answer</Link>.</div>}

// </div>
// </div> }