import React from 'react';
import edit from '../images/edit.png';
import img from '../images/image.jpeg';
import ShowMoreText from './ShowMoreText';
import {Link} from 'react-router-dom';
import uuid from 'uuid';
export default function SingleQuestion({quesData}) {
    // console.log(quesData)

    // console.log(quesData.img)
    return (
        <div className="mb-5">
            <div>
            <div className="d-flex">
            <div className="asked-by">Asked by</div>
            <div className="asked-by-name">{quesData.fname}</div>
            <div className="asked-by"> in </div>
            <div className="asked-by-name">{quesData.topics.map((topic,i)=>(<span key={uuid()}><Link to='/'>{topic.name}</Link> , </span>))}</div>
            </div>

            <div className="questions__questions">{quesData.title}</div>

            <div className="questions__answers-about"><img src={edit} height="20px" width="20px"/> {quesData.count} <div style={{height:"5px", width:"5px", borderRadius:"50%", backgroundColor: "#c4c4c4"}}></div> 3 days ago</div>

            {quesData.count > 0 ?
             <div className="questions__answers-container">
                <div className="answers-triangle"></div>
                    <div className="questions__answers">
                        {quesData.answer}
                        {quesData.answer.length > 200 &&
                        <Link  to={{ pathname: `/singlequestion/${quesData.slug}` }}>read more</Link>
                        }
                            <div className="user-about-container">
                                <div className="d-flex align-items-center">
                                    <img className="user-img" src={img}></img>
                                    <div className="questions__user-about">
                                        <div style={{fontSize:"17px"}}>{quesData.fname} {quesData.lname}</div> 
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
