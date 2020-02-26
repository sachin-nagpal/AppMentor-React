import React, { useState, useEffect,useContext } from 'react';
import home from '../images/home.png';
import bgStroke from '../images/bg-stroke.png';
import '../styles/HomeSectionOne.css';
import { useAuth } from "../context/auth";
import AxiosRequest from '../helpers/AxiosRequests';
import QuestionSearch from './Questions/QuestionSearch';
import AddQuestionPop  from '../components/Questions/AddQuestionPop';

const HomeSectionOne = (props) =>{
    
    const imgContainer = {
        width: "80%",
        margin: 'auto'
    };

    const [quesResponse, setResponse] = useState([]);
    const [isAddingQuestion, setIsAddingQuestion] = useState(false);
    const [isReload,setIsReload] = useState(false);
    const [tagTopics,setTagTopics] = useState([]);
    const [findalltopics,setFindalltopics] = useState([]);
    const { authTokens } = useAuth();

    function handleAddingQuestion(){
        setIsAddingQuestion(!isAddingQuestion)
        setTagTopics(props.topics);
        setFindalltopics(props.topics);
      }

    return(
        <div className="section-one-container">
            <div className="row">
                <div className="col-md-7">
                    <div className="home-left-one common-sec-one">
                        <div className="heading-one">Have Questions?</div>
                        <div className="heading-two-bg">
                            <div className="heading-two">Get Help from the Community</div>
                        </div>
                    </div>

                    <div className="home-left-two common-sec-one">
                        <div className="heading-three">
                            Let's get started!
                        </div>
                        <div className="home-search">
                            <div className="search-section">
                                <QuestionSearch handleAddingQuestion={handleAddingQuestion} isAddingQuestion={isAddingQuestion}/>
                            </div>
                            {authTokens && <AddQuestionPop isAddingQuestion={isAddingQuestion} toggle={handleAddingQuestion} findalltopics={findalltopics} tagTopics={tagTopics} setIsReload={setIsReload} isReload={isReload}/>}

                            <button className="search-btn">Search</button>
                        </div>
                    </div>
                </div>

                <div className="col-md-5">
                    <div style={imgContainer}>
                        <img src={home} width="100%"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSectionOne;