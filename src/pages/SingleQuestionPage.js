import React,{useState,useEffect} from 'react';
import QA from './QA';

import axios from 'axios';

export default function SingleQuestionPage({location,state,history,match}) {
    function handleBack(){
        history.goBack();
    }
    const [quesResponse,setQuesResponse] = useState({});
    useEffect(() => {
        getData(match.params.slug)
      
    }, []);
    function getData(id){
        console.log(match.params.slug);
        console.log(id);
        const path=`/singlequestion/${id}`;
        console.log(path)
        axios.get(`http://localhost/MyApplicationMentor/${path}`)
        .then(function (response) {
          // handle success
          console.log(response);
        //   setResponse(response.data.findallquestions)
        if(response.status === 200){
            setQuesResponse(response.data);
        }

        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
    }
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
