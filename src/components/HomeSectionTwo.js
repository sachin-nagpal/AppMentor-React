import React from 'react';
import '../styles/HomeSectionTwo.css';
import laptop from '../images/lapy.png';


const HomeSectionTwo = () =>{

    const circleFour = {
        left: '-9px'
      };

    const quesSecFour = {
        borderLeft: '0px'  
    };

    return(
        <div className="main-container">
            <p className="how-it-works">How it works</p>
            <div className="inner-container">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="w-50">
                        <div className="ques-sec">
                            <div className="circle"><div className="inner-circle"></div></div>
                            <div className="head">Ask a Question </div>
                            <div className="sub-head">Get answers to all your questions from the ecosystem built <br></br> to seek knowledge and connect with people. </div>
                        </div>
                        <div className="ques-sec">
                            <div className="circle"><div className="inner-circle"></div></div>
                            <div className="head">Customize your Feed </div>
                            <div className="sub-head">Follow topics you like to explore and keep updated on <br></br> what’s trending right now.</div>
                        </div>
                        <div className="ques-sec">
                            <div className="circle"><div className="inner-circle"></div></div>
                            <div className="head">Connect with Mentors</div>
                            <div className="sub-head">Get in touch via message or call and get advice from <br></br> Mentors who are specialised in their fields. </div>
                        </div>
                        <div className="ques-sec" style={quesSecFour}>
                            <div className="circle" style={circleFour}><div className="inner-circle"></div></div>
                            <div className="head">Save time and money</div>
                            <div className="sub-head">You can ask questions and get answers within minutes. <br></br> 24/7, without wasting time and money and much more.</div> 
                        </div>
                     </div>
                    <div className="w-50">
                        <div className="img_container">
                            <img src={laptop}style={{width:"80%"}}></img>
                        </div>
                    </div>                
                </div>
            </div>

        </div>
    )
}

export default HomeSectionTwo;