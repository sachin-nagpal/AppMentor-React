import React from 'react';
import '../styles/TrendingTopics.css';

const TrendingTopics = () =>{

    const circleFour = {
        left: '-9px'
      };

    const quesSecFour = {
        borderLeft: '0px'  
    };

    return(
        <div className="trending-container">
            <p className="how-it-works">How it works</p>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="ques-sec">
                            <div className="circle"></div>
                            <div className="head">Ask a Question </div>
                            <div className="sub-head">Get answers to all your questions from the ecosystem built to seek knowledge and connect with people. </div>
                        </div>
                        <div className="ques-sec">
                            <div className="circle"></div>
                            <div className="head">Customize your Feed </div>
                            <div className="sub-head">Follow topics you like to explore and keep updated on what’s trending right now.</div>
                        </div>
                        <div className="ques-sec">
                            <div className="circle"></div>
                            <div className="head">Connect with Mentors</div>
                            <div className="sub-head">Get answers to all your questions from the ecosystem built to seek knowledge and connect with people. </div>
                        </div>
                        <div className="ques-sec" style={quesSecFour}>
                            <div className="circle" style={circleFour}></div>
                            <div className="head">Ask a Question </div>
                            <div className="sub-head">Get answers to all your questions from the ecosystem built to seek knowledge and connect with people.</div> 
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h1>guyz</h1>
                    </div>                
                </div>
            </div>

        </div>
    )
}

export default TrendingTopics;