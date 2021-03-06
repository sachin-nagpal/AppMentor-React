import React, { useState, useEffect,useContext } from 'react';
import SingleQuestion from '../components/SingleQuestion';
import '../styles/Questions.css';
import uuid from 'uuid';

import AxiosRequest from '../helpers/AxiosRequests';


//user context
import { useAuth } from "../context/auth";


import RelatedQues from '../components/RelatedQues';
import  AddQuestionPop  from '../components/Questions/AddQuestionPop';
import QuestionSearch from '../components/Questions/QuestionSearch';

const Questions = (props) => {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [splitButtonOpen, setSplitButtonOpen] = useState(false);

  const toggleDropDown = () => setDropdownOpen(!dropdownOpen);

  const toggleSplit = () => setSplitButtonOpen(!splitButtonOpen);

  const [quesResponse, setResponse] = useState([]);
  const [relatedQuestions,setRelatedQuestions] = useState([]);
  const [tagTopics,setTagTopics] = useState([]);
  const [findalltopics,setFindalltopics] = useState([]);
  const [url,setUrl] = useState('');
  const [isAddingQuestion, setIsAddingQuestion] = useState(false);
  const [isReload,setIsReload] = useState(false);
  const { authTokens } = useAuth();
 

  function handleAddingQuestion(){
    setIsAddingQuestion(!isAddingQuestion)
  }

  useEffect(() => {
    let isCancelled = false;
    let url = props.match.params.tag ? `${process.env.REACT_APP_API_HOST_URL}/singletags/${props.match.params.tag}` : `${process.env.REACT_APP_API_HOST_URL}/getallquestion`;
    console.log(url);
    
    // let url = match
        (async function () {
          const response = await AxiosRequest().get(url);
          // console.log(response);
          if (!isCancelled) {
            console.log(response.data);
            setResponse(response.data.findallquestions);
            setRelatedQuestions(response.data.relatedquestions);
            setTagTopics(response.data.findtagtopics);
            setFindalltopics(response.data.findalltopics);
            }
        })();

    return () => {
      isCancelled = true;
    }; 
  }, [props.match.url,isReload])

  const getTagData =(urlName) =>{
    (async function () {
      const response = await AxiosRequest().get(`${process.env.REACT_APP_API_HOST_URL}/singletags/${urlName}`);
        setResponse(response.data.findallquestions);
        setRelatedQuestions(response.data.trendingquestion);
        setTagTopics(response.data.findtagtopics);
        setFindalltopics(response.data.findalltopics);
    })();
  }

  return (
    <div>
        <div className="questions-header">
           <div className="w-50 m-auto py-3">
            <QuestionSearch handleAddingQuestion={handleAddingQuestion} isAddingQuestion={isAddingQuestion}/>
           </div>
        </div>
        {authTokens && <AddQuestionPop isAddingQuestion={isAddingQuestion} toggle={handleAddingQuestion} findalltopics={findalltopics} tagTopics={tagTopics} setIsReload={setIsReload} isReload={isReload}/>}
          
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-8">
                  {quesResponse.map(quest=>(
                    <SingleQuestion quesData={quest} key={uuid()} getTagData={getTagData}/>
                  ))}
                </div>
                    
                <div className="col-md-4">
                    <div style={{backgroundColor:"#ffffff"}}>
                      <RelatedQues relatedQ = {relatedQuestions}/>
                    </div>
                  </div>            
            </div>
         </div>
    </div>
  );
}

export default React.memo(Questions);