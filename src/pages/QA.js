import React,{useState} from 'react';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import AxiosRequest from '../helpers/AxiosRequests';
import QAheader from '../components/QAheader';
import Answers from '../components/Answers';
import RelatedQues from '../components/RelatedQues';
import { getData } from '../helpers/getSingleQuestions';
import AnswerEditor from '../components/Answers/AnswerEditor';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';

// Context
import { useAuth } from "../context/auth";

import uuid from 'uuid';

const QA = ({ match,location }) => {
  const [quesResponse, setQuesResponse] = React.useState({});
  const handleChangeState = (res) => {
    setQuesResponse(res);
  }
  const [isReload, setIsReload] = useState(false);

  React.useEffect(() => {
    // console.log(quesResponse);
    
    console.log('RE-Rendered');
    getData(match.params.slug, handleChangeState)
  }, [match.params.slug,isReload]);

  const handlePostAnswer = (editorState) =>{
    const answer = draftToHtml(convertToRaw(editorState));
  (async function () {
    const response = await AxiosRequest().post('http://localhost/MyApplicationMentor/postanswer', {
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
  const { authTokens } = useAuth();

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
            isEditing && < AnswerEditor handlePostAnswer={handlePostAnswer} setIsReload={setIsReload}/>
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
