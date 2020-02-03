import React,{useState} from 'react';
import '../styles/QA.css';
import image from '../images/image.jpeg';
import follow from '../images/follow.png';
import call from '../images/call.png';
import comment from '../images/comment.png';
import shareWhite from '../images/shareWhite.png';
import share from '../images/share.png';

const Answers = (props) => {
    
    const [clicked,isClicked] = useState(false);
    const [clickedCount,setClickedCount] = useState(20);

    const handleClick=()=>{
        isClicked(!clicked);
        const val = clickedCount;
        if(!clicked){
            setClickedCount(val+1)
        }
        else{
            setClickedCount(20)
        } 
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
                            <div className="ans-user-name">Abhyank Srinet</div>
                            <div className="ans-user-about">Founder at MiM-Essay.com , MiM Grad- ESCP Europe</div>
                            <div className="ans-date">Answered on 02 December 2019</div>
                        </div>
                    </div>
                    <div>
                        <button className="answers-btn mr-3" style={{backgroundColor: "#3e70bb"}}>
                            <img src={follow} alt="" className="ans-btn-img"></img> 
                            <span className="">Follow</span>
                        </button>
                        <button className="answers-btn" style={{backgroundColor: "#2f9657"}}>
                            <img src={call} alt="" className="ans-btn-img"></img> 
                            <span className="">Talk to Abhyank</span>
                        </button>
                    </div> 
                </div>

                <div className="ans-text-area">
                    Hey there,
                    <br></br>
                    <br></br>
                    Well according to Financial times rankings of the past few years, ESCP has always been among the top 10 
                    <br></br>
                    schools offering the MSc degree.
                    <br></br>
                    <br></br>
                    It has an excellent curriculum and great professors. Its flagship degrees are the MiM or Masters in Management,
                    <br></br>
                    Specialised Masters (MSc) and the Executive MBA program.
                    <br></br>
                    <br></br>
                    Talking about the MSc in Marketing Program it focuses on the interface between creativity and analytical 
                    <br></br>
                    thinking in marketing management incorporating consultancy projects, creative seminars, case studies, direct
                    <br></br>
                    experience in emerging markets, class discussions and guest speakers in its curriculum.
                    <br></br>
                    <br></br>
                    Considering past year requirement post-graduation student usually land up a professors.
                </div> 

                <div className="d-flex align-items-center">
                    <div className="d-inline-flex">
                        <div className="upvote-triangle" onClick={handleClick}>
                            <div style={{color:"#959595", marginLeft:"20px"}}>{clickedCount}</div>
                        </div>
                    </div>
                    <img src={comment} alt="" className="ans-btn-img"></img><span className="comment-share-text">Comment</span>
                    <img src={shareWhite} alt="" className="ans-btn-img"></img><span className="comment-share-text">Share</span>
                </div>
            </div>
        </div>
    );
}

export default Answers;

