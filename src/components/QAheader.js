import React from 'react';
import '../styles/QA.css';
import image from './image.jpeg';
import edit from './edit.png';
import share from './share.png';

const QAheader = (props) => {
    return(
        <div>
            <div className="bg-white">
                <div className="QAheader-inside-container">
                    <div className="d-flex">
                        <div>
                            <span className="asked-by"><img src={image} style={{height:"30px", width:"30px", borderRadius:"50%", marginRight:"10px"}}></img>Asked by</span> 
                            <span className="asked-by-name">Ashmeet Singh</span> 
                            <span className="asked-by">in</span> 
                        </div>
                        <button className="QAheader-tag-btn">Business Analytics</button>
                        <button className="QAheader-tag-btn">Masters in Management</button>
                    </div>

                    <div className="main-ques">
                        ESCP offers an MSc in marketing & creativity. Is this a better program than the ones offered by HEC or ESADE?
                    </div>
                    <div className="ad-answer-row d-flex align-items-center">
                        <div className="d-flex align-items-center">
                            <img src={edit} className="small-icons"></img><strong>2 Answers</strong>
                            <div className="dot"></div>
                            <img src={share} className="small-icons"></img><strong>Share this Question</strong>
                        </div>

                        <div>
                            <button className="QAheader-btn">Add an Answer</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default QAheader;

