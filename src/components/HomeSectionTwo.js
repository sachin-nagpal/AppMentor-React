import React,{useState, useEffect} from 'react';
import '../styles/HomeSectionTwo.css';
import laptop from '../images/lapy.png';
import parse, { domToReact } from 'html-react-parser';


const HomeSectionTwo = (props) =>{

    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
        console.log('helo')
        handleClick();
      }, 4000);
      return () => clearInterval(interval);
    }, []);

    const circleFour = {
        left: '-9px'
      };

    const quesSecFour = {
        borderLeft: '0px'  
    };

    const [clicked,setClicked] = useState(false)
    const [IsParentCircleCLicked,setIsParentCircleCLicked] = useState(false)

    const handleClick = ()=>{
        setClicked(true)
        setIsParentCircleCLicked(!IsParentCircleCLicked);
    }


    return(
        <div className="main-container">
            <p className="how-it-works">How it works</p>
            <div className="inner-container">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="w-50">
                        {props.head.map((ques,i)=>(
                            <>
                                {i<3 ? 
                                    <div className="ques-sec">
                                        <div className="circle" onClick={handleClick}><div className={IsParentCircleCLicked ? "inner-circle" : ""}></div></div>
                                        <div className="head">{ques.heading}</div>
                                        <div className="sub-head">{parse(ques.subHeading)}</div>
                                    </div>
                                    :
                                    <div className="ques-sec" style={quesSecFour}>
                                        <div className="circle" onClick={handleClick} style={circleFour}><div className={IsParentCircleCLicked ? "inner-circle" : ""}></div></div>
                                        <div className="head">{ques.heading}</div>
                                        <div className="sub-head">{parse(ques.subHeading)}</div>
                                    </div>
                                    }
                            </>
                         ))}

                        {/* <div className="ques-sec">
                            <div className="circle" onClick={handleClick}><div className={IsParentCircleCLicked ? "inner-circle" : ""}></div></div>
                            <div className="head">Customize your Feed </div>
                            <div className="sub-head">Follow topics you like to explore and keep updated on <br></br> what’s trending right now.</div>
                        </div>
                        <div className="ques-sec">
                            <div className="circle" onClick={handleClick}><div className={IsParentCircleCLicked ? "inner-circle" : ""}></div></div>
                            <div className="head">Connect with Mentors</div>
                            <div className="sub-head">Get in touch via message or call and get advice from <br></br> Mentors who are specialised in their fields. </div>
                        </div>
                        <div className="ques-sec" style={quesSecFour}>
                            <div className="circle" onClick={handleClick}><div className={IsParentCircleCLicked ? "inner-circle" : ""}></div></div>
                            <div className="head">Save time and money</div>
                            <div className="sub-head">You can ask questions and get answers within minutes. <br></br> 24/7, without wasting time and money and much more.</div> 
                        </div> */}
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

HomeSectionTwo.defaultProps = {
    head: [
            {
            heading:'Ask a Question ', 
            subHeading: 'Get answers to all your questions from the ecosystem built <br> to seek knowledge and connect with people. ' 
            },
            
            {
            heading:'Customize your Feed ' , 
            subHeading:"Follow topics you like to explore and keep updated on <br> what’s trending right now." 
            },

            {
            heading:'Connect with Mentors', 
            subHeading:"Get in touch via message or call and get advice from <br> Mentors who are specialised in their fields."
            },
            
            {
            heading:'Save time and money',
            subHeading:"You can ask questions and get answers within minutes. <br>24/7, without wasting time and money and much more."
            }
        ],
}

export default HomeSectionTwo;