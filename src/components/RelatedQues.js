import React from 'react';
import '../styles/QA.css';
import image from '../images/image.jpeg';
import RelatedQuesSingle from './RelatedQuesSingle';
import uuid from 'uuid';

const RelatedQues = ({relatedQ, getQuestionsData,handleChangeState}) => {
    return(
        <div>
            <div className="related-ques-container" style={{fontFamily: 'Roboto'}}>
                <p style={{}}>Related Questions</p>
                {relatedQ && relatedQ.map(questions=>(
                    <RelatedQuesSingle ques={questions} key={uuid()}/>
                ))}
            </div>
        </div>
    );
}

export default RelatedQues;

