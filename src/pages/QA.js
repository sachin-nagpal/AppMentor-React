import React from 'react';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import QAheader from '../components/QAheader';
import Answers from '../components/Answers';
import RelatedQues from '../components/RelatedQues';
import { getData } from '../helpers/getSingleQuestions';

import uuid from 'uuid';

const QA = ({ match }) => {
  const [quesResponse, setQuesResponse] = React.useState({});
  const handleChangeState = (res) => {
    setQuesResponse(res);
  }

  React.useEffect(() => {
    console.log('RE-Rendered');
    getData(match.params.slug, handleChangeState)
  }, [match.params.slug]);


  return (
    <div style={{backgroundColor:"#f5f5f5"}}>
          <div>
              <QAheader quesResponse={quesResponse}/>
          </div>
          <div className="container mt-4">
            <div className="row">
              <div className="col-md-8">
                <div className="">
                  {quesResponse.findallanswers && quesResponse.findallanswers.map(answers=>(
                    <Answers answers={answers} key={uuid()}/>
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
