import React from 'react';
import '../styles/QA.css';
import image from '../images/image.jpeg';
import RelatedQuesSingle from './RelatedQuesSingle';
import uuid from 'uuid';

const RelatedQues = ({relatedQ, getQuestionsData}) => {
    return(
        <div>
            <div className="related-ques-container">
                {/* <p className="related-ques-heading">Related Questions</p>
                <p className="related-ques">How are the placements for the Master’s in International Finance (MIF) programme at HEC Paris?</p>
                <p className="related-ques">How good and prestigious is Cornell’s MBA program and is it recognized internationally?</p>
                <p className="related-ques">What is the difference between an MS in data science and an MS in MIS?</p> */}
                {relatedQ && relatedQ.map(questions=>(
                    <RelatedQuesSingle ques={questions} key={uuid()} getQuestionsData={getQuestionsData}/>
                ))}
            </div>
        </div>
    );
}

export default RelatedQues;

