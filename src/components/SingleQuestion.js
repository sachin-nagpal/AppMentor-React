import React from 'react';
import edit from '../images/edit.png';
import img from '../images/image.jpeg';
import ShowMoreText from './ShowMoreText';
import {Link} from 'react-router-dom';
import uuid from 'uuid';
import parse from 'html-react-parser';

import shortTextLength from '../helpers/shortTextLength';

import { createUseStyles } from 'react-jss';

import DivWithArrow from '../HOC/DivWithArrow';

// HTML COMPONENTS
import AskedByStrip from './Misc/AskedByStrip';

const useStyles = createUseStyles({
    mainQuestionContainer: {
        fontSize: '1.875rem',
        color: '#295caa',
        fontFamily: 'Roboto',
        fontWeight: 'bold'
    }
})
export default function SingleQuestion({ quesData, getTagData }) {
    const classes = useStyles();
    return (
        <div className={classes.SingleQuestionContainer}>
        <AskedByStrip name={'Sachin'} tags={quesData.topics} getTagData={getTagData} url={`/allquestions/`}/>
            <DivWithArrow style={{
                width: '100%',
                marginBottom: '3rem',
                height: '18.75rem'
            }}>
                <div className={classes.mainQuestionContainer}>{shortTextLength(quesData.title,100)}</div>
            </DivWithArrow>
        </div>
    )
}



















    // <div className="mb-5">
    //         <div>
    //         <div className="d-flex">
    //         <div className="asked-by">Asked by</div>
    //         <div className="asked-by-name">{quesData.fname}</div>
    //         <div className="asked-by"> in </div>
    //         <div className="asked-by-name">{quesData.topics.map((topic,i)=>(<span key={uuid()} onClick={()=>getTagData(topic.slug)} style={{cursor: 'pointer'}}>{topic.name}, </span>))}</div>
    //         </div>

    //         <div className="questions__questions">{quesData.title}</div>

    //     <div className="questions__answers-about"><img src={edit} height="20px" width="20px"/> {quesData.count} <div style={{height:"5px", width:"5px", borderRadius:"50%", backgroundColor: "#c4c4c4"}}></div>{quesData.created_at}</div>

    //         {quesData.count > 0 ?
    //          <div className="questions__answers-container" style={{cursor: 'pointer'}}>
    //                     <div className="answers-triangle"></div>
    //                     <Link to={{ pathname: `/singlequestion/${quesData.slug}` }} style={{textDecoration: 'none'}}>
    //                 <div className="questions__answers" >
    //                         {quesData.answer && parse(quesData.answer.text)}
    //                         {quesData.answer.text.length > 200 &&
    //                         <>
    //                         ...read more
    //                         </>
    //                         }
    //                         <div className="user-about-container">
    //                             <div className="d-flex align-items-center">
    //                                 <img className="user-img" src={img}></img>
    //                                 <div className="questions__user-about">
    //                                     <div style={{fontSize:"17px"}}>{quesData.answer.usersname}</div> 
    //                                     <div style={{fontSize:"15px"}}>{}</div>
    //                                 </div>
    //                             </div>
    //                     </div>
    //                         </div>
    //                         </Link>
    //             </div>
    //         : <div>Be the first to <Link to={{ pathname: `/singlequestion/${quesData.slug}` , isEditing: true }}>answer</Link>.</div>}
            
    //     </div>
    //     </div>