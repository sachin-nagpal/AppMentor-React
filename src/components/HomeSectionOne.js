import React from 'react';
import home from '../images/home.png';
import bgStroke from '../images/bg-stroke.png';
import '../styles/HomeSectionOne.css';
import QuestionSearch from './Questions/QuestionSearch';

const HomeSectionOne = () =>{
    
    const imgContainer = {
        width: "80%",
        margin: 'auto'
    };

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
                            {/* <input type="text" placeholder="Search Questions"> */}
                            <div className="abc">
                                 <QuestionSearch/>
                            </div>
                            {/* </input> */}
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