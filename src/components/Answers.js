import React,{useState,useEffect} from 'react';
import '../styles/QA.css';
// import image from '../images/image.jpeg';
import follow from '../images/follow.png';
import call from '../images/call.png';
import comment from '../images/comment.png';
import shareWhite from '../images/shareWhite.png';
// import share from '../images/share.png';
import parse from 'html-react-parser';
import AxiosRequests from '../helpers/AxiosRequests';
import ProfileImage from '../images/noImage.jpg';
// import { Modal} from 'reactstrap';
// import SignupLoginPage from '../pages/SignupLoginPage';
import {createUseStyles} from 'react-jss';

import { EmailShareButton, TwitterShareButton } from 'react-share';


// Context
import { useAuth } from "../context/auth";

import UpvoteBtn from './UpvoteBtn';
const useStyles = createUseStyles({
    answerUserBtn: {
        outline: 'none',
        color: '#ffffff',
        fontFamily: 'Roboto',
        fontSize: '0.875rem',
        fontWeight: '400',
        border: 'none',
        borderRadius: '4px',
        marginLeft: '0.5rem',
        padding: '0.3rem 0.5rem'
    },
    answerComntSharebtn: {
        color: '#959595',
        fontFamily: 'Roboto',
        marginLeft: '1.2rem',
        cursor: 'pointer',
        display: 'flex',
        fontSize: '0.9375rem',
    },
    comntShare:{
            margin: '0 0.2rem'
    },
    dot: {
        marginRight:'0.2rem'
    },
    btnContentContainer: {
        display: 'flex'
    },
    iconInBtn: {
        display: 'flex',
        height: '0.8rem',
        width: '0.8rem',
        margin: 'auto',
        '& img': {
            width: '100%',
            height: '100%'
        }
    }
}) 
const Answers = ({ answers, handleReload,toggle,handleFollow }) => {
    const classes = useStyles(false);
    const [clickedCount,setClickedCount] = useState('');
    // const [time,setTime] = useState(0);
    const { authTokens } = useAuth();
    // const [showSignUp, setShowSignUp] = useState(false);
    const [upvotes, setUpvotes] = useState(answers.upvotes);
    const [isVoted,setIsVoted] = useState(answers.voted === 'yes' ? true : false);
    const [isFollow,setIsFollow] = useState(false);
    // const [isLoading, setIsLoading] = useState(false);
    
    // const [modal, setModal] = useState(false);

    // const toggle = () => setModal(!modal);
    const handleIsFollow = () => {
        setIsFollow(!isFollow)
    }
    useEffect(() => {
        if(answers.findallanswers){
            setClickedCount(answers.findallanswers.upvotes);
            setIsVoted(answers.isVoted);
        }
    }, []);

    const handleUpvote= async ()=>{
        //   alert('Clicked');
        if (!authTokens) {
            return toggle();
        }
        // if(isLoading){
        let vote = upvotes;
        // setUpvotes(vote+1)
    const response = await AxiosRequests().post(`${process.env.REACT_APP_API_HOST_URL}/upvoteans`,{
        ans_id: answers.id,
        token: authTokens
    })
    console.log(response);
        if(response.data.vote === 'up'){
            setUpvotes(vote+1);
            }
            if(response.data.vote === 'down'){
                setUpvotes(vote-1);
            }
            // setIsLoading(false)
            // else{
            //     alert('Network Error')
            // }
    //   handleReload();
        // }
    }

    return(
        <div>
        {/* {!authTokens && <Modal isOpen={modal} toggle={toggle} className={classes.modalContainer}>
            <SignupLoginPage st={{pop:'yes'}}/>
        </Modal>} */}
            <div className="answers-container">
                <div className="user-about">
                    <div className="d-flex">
                        <div className="answers-img-container">
                            <img src={answers.image ? answers.image : ProfileImage} alt="User" className="answers-img"></img>  
                        </div>
                        <div>
                            <div className="ans-user-name">{answers.fname} {answers.lname}</div>
                            <div className="ans-user-about">--</div>
                            <div className="ans-date">{answers.created_at}</div>
                        </div>
                    </div>
                    <div>
                     {authTokens ?
                        !isFollow ?
                            <button className={classes.answerUserBtn} style={{ backgroundColor: "#3e70bb" }} onClick={()=>handleFollow(answers.userid,handleIsFollow)}>
                                <div className={classes.btnContentContainer}>
                                    <div className={classes.iconInBtn}><img src={follow} alt="follow"></img></div>
                                        <span className="">&nbsp;&nbsp;Follow</span>
                                </div>
                            </button>
                        : 
                             <div style={{ backgroundColor: "#3e70bb" }} className={classes.answerUserBtn}>Following</div>
                        
                        :
                        <button className={classes.answerUserBtn} style={{ backgroundColor: "#3e70bb" }} onClick={toggle}>
                            <div className={classes.btnContentContainer}>
                                <div className={classes.iconInBtn}><img src={follow} alt="follow"></img></div>
                                    <span className="">&nbsp;&nbsp;Follow</span>
                            </div>
                        </button>
                        }
                        {/* <button className={classes.answerUserBtn} style={{ backgroundColor: "#2f9657" }}>
                            <div className={classes.btnContentContainer}>
                                <div className={classes.iconInBtn}><img src={call} alt="call"></img></div> 
                                <span className="btnIcon">&nbsp;&nbsp;Tak to {answers.fname} {answers.lname}</span>
                            </div>
                        </button> */}
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
                        <UpvoteBtn upvotes={upvotes} handleUpvote={handleUpvote} isVoted={isVoted} setIsVoted={setIsVoted} setIsLoading isLoading authTokens/>
                    </div>
                    <div className={classes.answerComntSharebtn}><div className={classes.iconInBtn}><img src={comment} alt="Comment" className={classes.btnIcon}></img></div> <span className={classes.comntShare}>Comment</span><span className={classes.dot}>&bull;</span>0</div>
                    <TwitterShareButton url={window.location.href}><div className={classes.answerComntSharebtn} ><div className={classes.iconInBtn}><img src={shareWhite} alt="Share" className={classes.btnIcon}></img></div> <span className={classes.comntShare}>Share</span><span className={classes.dot}>&bull;</span>0</div></TwitterShareButton>
                </div>
            </div>
        </div>
    );
}

export default Answers;

