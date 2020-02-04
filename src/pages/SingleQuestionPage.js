import React from 'react';
import Answers from '../components/Answers';

export default function SingleQuestionPage({history,state}) {
    function handleBack(){
        history.goBack();
    }
    return (
        <div>
            <p>
                {/* {state.title} */}
            </p>
            <button onClick={handleBack}>&#8592;</button>
            <Answers/>
        </div>
    )
}
