import React,{useState} from 'react';
import AxiosRequest from '../helpers/AxiosRequests';
import QAheader from '../components/QAheader';
import Answers from '../components/Answers';
import RelatedQues from '../components/RelatedQues';
import { getData } from '../helpers/getSingleQuestions';
import AnswerEditor from '../components/Answers/AnswerEditor';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { Button,Modal } from 'reactstrap';
import SignupLoginPage from '../pages/SignupLoginPage';
// Context
import { useAuth } from "../context/auth";

import uuid from 'uuid';
import {createUseStyles} from 'react-jss';
import { transform } from 'framer-motion';
const useStyles = createUseStyles({
  qaContainer: {
        backgroundColor: "#f5f5f5",
        height: 'fit-content'
    },
  answerEditorContainer:{
    border: '1px solid #9f9f9f',
    borderRadius: '5px',
    marginBottom: '3rem',
  },
  serImageStip:{
    height: '3rem',
    borderBottom: '1px solid #cecece',
    '& img': {
      height: '100%',
      padding: '0.3rem 1rem',
      borderRadius: '50%',
    },
    '& span':{
      color: '#181818',
      fontFamily: 'Roboto',
      fontSize: '1.125rem',
      fontWeight: 400,
    }
  },
  submitBtnContainer:{
    height: '3rem',
    display: 'flex',
    alignItems: 'center',
    borderTop: '1px solid #cecece'
  },
  submitBtn:{
    background: '#007fbd',
    border: '0',
    color: '#ffffff',
    padding: '0.2rem 1.1rem',
    borderRadius: '5px',
    marginLeft: '1rem',
    height: '2rem'
  },
  modalContainer: {
    maxWidth: '60rem',
  },
  modelContent:{
    transform: 'scale(0.9)'
  }

})
const QA = ({ match,location }) => {
  const classes = useStyles();
  const [quesResponse, setQuesResponse] = React.useState({});
  const handleChangeState = (res) => {
    setQuesResponse(res);
  }
  const [isReload, setIsReload] = useState(false);
  const [editorState,setEdtorSate] = useState(EditorState.createEmpty());
  const [isFollowQues,setIsFollowQues] = useState(false);
  const handleSetFollowQues = () => {
    setIsFollowQues(!isFollowQues);
  }
  const handleEditorState =  (ed) => {
    setEdtorSate(ed);
  }
  React.useEffect(() => {
    console.log('RE-Rendered');
    getData(match.params.slug, handleChangeState)
  }, [match.params.slug,isReload]);


  const handlePostAnswer = () =>{
  const answer = draftToHtml(convertToRaw(editorState.getCurrentContent()));
  const ed = convertToRaw(editorState.getCurrentContent());
  (async function () {
    const response = await AxiosRequest().post(`${process.env.REACT_APP_API_HOST_URL}/postanswer`, {
          qid: quesResponse.findquestion[0].id,
          token: authTokens,
          answer: answer
        });
    console.log(response);
      // setResponse(response.data.findallquestions);
      // setRelatedQuestions(response.data.relatedquestions);
      // setTagTopics(response.data.findtagtopics);
      // setFindalltopics(response.data.findalltopics);
      setIsEditing(false);
      setIsReload(!isReload);
  })();

  }
  
  const handleReload = () =>{
    setIsReload(!isReload)
  }
  const handleQuestionFollow = () => {    
    (async function () {
      const response = await AxiosRequest().post(`${process.env.REACT_APP_API_HOST_URL}/followq`, {
            token: authTokens,
            ques_id: quesResponse.findquestion[0].id,
          });
          // console.log(response.data.msg);
          if(response.data.msg === 'done'){
              console.log(response.data.msg);
              handleSetFollowQues()
          }
  })();
  }
  const handleFollow = (userid,handleIsFollow) => {
    (async function () {
      const response = await AxiosRequest().post(`${process.env.REACT_APP_API_HOST_URL}/follow`, {
            token: authTokens,
            following: userid,
          });
          // console.log(response.data.msg);
          if(response.data.msg === 'done'){
              console.log(this);
              handleIsFollow()
          }
  })();
  
  }
  const { authTokens,userImg,userName } = useAuth();
  const [modal, setModal] = useState(false);
   const toggle = () => setModal(!modal);
  const [isEditing, setIsEditing] = useState(location.isEditing || false);
  return (
    <div className={classes.qaContainer}>
      {!authTokens && <Modal isOpen={modal} toggle={toggle} className={classes.modalContainer} centered contentClassName={classes.modelContent}>
            <SignupLoginPage st={{pop:'yes'}}/>
        </Modal>}
          <div>
          <QAheader quesResponse={quesResponse} isEditing={isEditing} setIsEditing={setIsEditing} answerCount={quesResponse.answercount} getData={getData} handleChangeState={handleChangeState} isFollowQues={isFollowQues} handleQuestionFollow={handleQuestionFollow} toggle={toggle}/>
          </div>

          <div className="container mt-4">
            <div className="row">
              <div className="col-md-8">
          {
            isEditing && <div className={classes.answerEditorContainer}>
              <div className={classes.serImageStip}><img src={userImg} alt='User'/><span>{userName}</span></div>
              <AnswerEditor handlePostAnswer={handlePostAnswer} setIsReload={setIsReload} handleEditorState={handleEditorState} editorState={editorState}/>
                {authTokens ?
                  <div className={classes.submitBtnContainer}><button className={classes.submitBtn} onClick={handlePostAnswer}>Submit</button></div>
                  :
                    <div className={classes.submitBtnContainer}><button className={classes.submitBtn} onClick={toggle}>Submit</button></div>}
              </div>
          }
                <div className="">
                  {quesResponse.findallanswers && quesResponse.findallanswers.map(answers=>(
                    <Answers answers={answers} key={uuid()} handleReload={handleReload} toggle={toggle} handleFollow={handleFollow}/>
                  ))}
                </div>
              </div>
              <div className="col-md-4">
                <RelatedQues relatedQ = {quesResponse.relatedquestions} getQuestionsData={getData} handleChangeState={handleChangeState}/>
              </div>
            </div>
          </div>
    </div>
  );
}

export default QA;
