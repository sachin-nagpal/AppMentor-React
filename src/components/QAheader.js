import React from 'react';
import '../styles/QA.css';
// import image from '../images/image.jpeg';
import edit from '../images/edit.png';
import share from '../images/share.png';

import AskedByStrip from './Misc/AskedByStrip';

const QAheader = ({quesResponse,isEditing,setIsEditing,getData,handleChangeState,answerCount}) => {
    return(
        <div>
        { quesResponse.findquestion &&
            <div className="bg-white main-Contai">
                <div className="QAheader-inside-container container">
                    <div className="d-flex">
                        {/* <div>
                            <span className="asked-by"><img src={image} style={{height:"30px", width:"30px", borderRadius:"50%", marginRight:"10px"}}></img>Asked by</span> 
                            <span className="asked-by-name">Ashmeet Singh</span> 
                            <span className="asked-by">in</span> 
                        </div>
                        <button className="QAheader-tag-btn">Business Analytics</button>
                        <button className="QAheader-tag-btn">Masters in Management</button> */}
                    <AskedByStrip name={`${'Karan'} ${'handa'}`} tags={quesResponse.findquestion[0].topics} getTagData={getData} handleChangeState={handleChangeState} url={`/allquestions/`} st={{bg:'#f2f2f2',padding:'0.2rem'}}/>
                    </div>

                    <div className="main-ques">
                        {quesResponse.findquestion[0].title}
                    </div>
                    <div className="ad-answer-row d-flex align-items-center">
                        <div className="d-flex align-items-center">
                            <img src={edit} className="small-icons" alt='edit icon'></img><strong style={{color: '#565656'}}>{answerCount} Answers</strong>
                            <div className="dot"></div>
                            <img src={share} className="small-icons" alt='share icon'></img><strong style={{color: '#575757',fontFamily: 'Roboto'}}>Share this Question</strong>
                        </div>

                        <div>
                            <button className="QAheader-btn" onClick={()=>setIsEditing(!isEditing)}>{!isEditing ? 'Add an Answer' : 'Close Editor' }</button>
                        </div>
                    </div>
                </div>

            </div>
        }
        </div>
    );
}

export default QAheader;

