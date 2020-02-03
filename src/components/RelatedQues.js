import React from 'react';
import '../styles/QA.css';
import image from './image.jpeg';


const RelatedQues = (props) => {
    return(
        <div>
            <div className="related-ques-container">
                <p className="related-ques-heading">Related Questions</p>
                <p className="related-ques">How are the placements for the Master’s in International Finance (MIF) programme at HEC Paris?</p>
                <p className="related-ques">How good and prestigious is Cornell’s MBA program and is it recognized internationally?</p>
                <p className="related-ques">What is the difference between an MS in data science and an MS in MIS?</p>
            </div>
        </div>
    );
}

export default RelatedQues;

