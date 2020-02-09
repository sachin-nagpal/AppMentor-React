import React,{useState,useEffect} from 'react';
import QA from './QA';
import { getData } from '../helpers/getSingleQuestions';

export default function SingleQuestionPage({location,state,history,match}) {
    function handleBack(){
        history.goBack();
    }
    const [quesResponse,setQuesResponse] = useState({});
    useEffect(() => {
        console.log('Rendered');
        
        getData(match.params.slug, setQuesResponse)
      
    }, []);
   
    return (
        <div>
            <p>
                {/* {state.title} */}
            </p>
            {/* <button onClick={handleBack}>&#8592;</button> */}
            <QA quesResponse={quesResponse} getQuestionsData={getData}/>
        </div>
    )
}
