import React from 'react';
import edit from '../images/edit.png';
import img from '../images/image.jpeg';
import ShowMoreText from './ShowMoreText';
import {Link} from 'react-router-dom';
import uuid from 'uuid';
export default function SingleQuestion({quesData,getTagData}) {
    // console.log(quesData)

    // console.log(quesData.img)
    return (
        <div className="mb-5">
            <div>
            <div className="d-flex">
            <div className="asked-by">Asked by</div>
            <div className="asked-by-name">{quesData.fname}</div>
            <div className="asked-by"> in </div>
            <div className="asked-by-name">{quesData.topics.map((topic,i)=>(<span key={uuid()} onClick={()=>getTagData(topic.slug)} style={{cursor: 'pointer'}}>{topic.name}, </span>))}</div>
            </div>

            <div className="questions__questions">{quesData.title}</div>

        <div className="questions__answers-about"><img src={edit} height="20px" width="20px"/> {quesData.count} <div style={{height:"5px", width:"5px", borderRadius:"50%", backgroundColor: "#c4c4c4"}}></div>{quesData.created_at}</div>

            {quesData.count > 0 ?
             <div className="questions__answers-container" style={{cursor: 'pointer'}}>
                <div className="answers-triangle"></div>
                    <div className="questions__answers" >
                            {quesData.answer && quesData.answer.text.slice(0,200)}
                            {quesData.answer.text.length > 200 &&
                            <>
                            ...<Link to={{ pathname: `/singlequestion/${quesData.slug}` }}>read more</Link>
                            </>
                            }
                            <div className="user-about-container">
                                <div className="d-flex align-items-center">
                                    <img className="user-img" src={img}></img>
                                    <div className="questions__user-about">
                                        <div style={{fontSize:"17px"}}>{quesData.answer.usersname}</div> 
                                        <div style={{fontSize:"15px"}}>{}</div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            : <div>Be the first to <Link to={{ pathname: `/singlequestion/${quesData.slug}` , query: { isEditing: true } }}>answer</Link>.</div>}
            
        </div>
        </div>
    )
}
