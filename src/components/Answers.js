import React,{useState,useEffect} from 'react';
import '../styles/QA.css';
import image from '../images/image.jpeg';
import follow from '../images/follow.png';
import call from '../images/call.png';
import comment from '../images/comment.png';
import shareWhite from '../images/shareWhite.png';
import share from '../images/share.png';
import parse from 'html-react-parser';

import UpvoteBtn from './UpvoteBtn';
// import Moment from 'react-moment';
const Answers = ({answers,handleReload}) => {
    const [clickedCount,setClickedCount] = useState('');
    const [time,setTime] = useState(0);
    useEffect(() => {
        if(answers.findallanswers){
            setClickedCount(answers.findallanswers.upvotes);
        }
    }, []);

    const handleUpvote=()=>{
      alert('Clicked');
      console.log(answers.upvotes);
      handleReload();
    }
    return(
        <div>
            <div className="answers-container">
                <div className="user-about">
                    <div className="d-flex">
                        <div className="answers-img-container">
                            <img src={image} alt="" className="answers-img"></img>  
                        </div>
                        <div>
                            <div className="ans-user-name">{answers.fname} {answers.lname}</div>
                            <div className="ans-user-about">Founder at MiM-Essay.com , MiM Grad- ESCP Europe</div>
                            <div className="ans-date">Answered on 02 December 2019</div>
                        </div>
                    </div>
                    <div>
                        <button className="answers-btn" style={{backgroundColor: "#3e70bb"}}>
                            <img src={follow} alt="" className="ans-btn-img"></img> 
                            <span className="">Follow</span>
                        </button>
                        <button className="answers-btn" style={{backgroundColor: "#2f9657"}}>
                            <img src={call} alt="" className="ans-btn-img"></img> 
                            <span className="">Connect</span>
                        </button>
                    </div> 
                </div>

                <div className="ans-text-area">
                    {parse(answers.answer)}
                </div> 

                <div className="d-flex align-items-center">
                    <div className="d-inline-flex">
                        {/* <div className="upvote-triangle" onClick={handleClick}>
                            <div style={{color:"#959595", marginLeft:"20px"}}>{clickedCount}</div>
                        </div> */}
                        <UpvoteBtn upvotes={answers.upvotes} handleUpvote={handleUpvote}/>
                    </div>
                    <img src={comment} alt="" className="ans-btn-img"></img><span className="comment-share-text">Comment</span>
                    <img src={shareWhite} alt="" className="ans-btn-img"></img><span className="comment-share-text">Share</span>
                </div>
            </div>
        </div>
    );
}

export default Answers;

