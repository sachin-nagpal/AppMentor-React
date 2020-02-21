import React,{useState} from 'react';
import AxiosRequest from '../helpers/AxiosRequests';
import QAheader from '../components/QAheader';
import Answers from '../components/Answers';
import RelatedQues from '../components/RelatedQues';
import { getData } from '../helpers/getSingleQuestions';
import AnswerEditor from '../components/Answers/AnswerEditor';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import {Button} from 'reactstrap';
// Context
import { useAuth } from "../context/auth";

import uuid from 'uuid';
import {createUseStyles} from 'react-jss';
const useStyles = createUseStyles({
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
    const response = await AxiosRequest().post('http://localhost/MyApplicationMentor/postanswer', {
          qid: quesResponse.findquestion[0].id,
          token: authTokens,
          answer: answer
        });
    // console.log(response);
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
  const { authTokens,userImg,userName } = useAuth();

  const [isEditing, setIsEditing] = useState(location.isEditing || false);
  return (
    <div style={{backgroundColor:"#f5f5f5"}}>
          <div>
          <QAheader quesResponse={quesResponse} isEditing={isEditing} setIsEditing={setIsEditing} answerCount={quesResponse.answercount} getData={getData} handleChangeState={handleChangeState}/>
          </div>

          <div className="container mt-4">
            <div className="row">
              <div className="col-md-8">
          {
            isEditing && <div className={classes.answerEditorContainer}>
              <div className={classes.serImageStip}><img src={userImg}/><span>{userName}</span></div>
              <AnswerEditor handlePostAnswer={handlePostAnswer} setIsReload={setIsReload} handleEditorState={handleEditorState} editorState={editorState}/>
              <div className={classes.submitBtnContainer}><button className={classes.submitBtn} onClick={handlePostAnswer}>Submit</button></div>
              </div>
          }
                <div className="">
                  {quesResponse.findallanswers && quesResponse.findallanswers.map(answers=>(
                    <Answers answers={answers} key={uuid()} handleReload={handleReload}/>
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
