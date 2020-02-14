import React, { useEffect } from 'react';
import '../styles/HomeSectionThree.css';
import degree1 from '../images/1.png';
import degree2 from '../images/2.png';
import degree3 from '../images/3.png';
import degree4 from '../images/4.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";

const HomeSectionThree = (props) =>{

    useEffect(() =>{
            console.log(props.topics)
    }, []);
    return(
        <div className="trending-topics-container">
            <div className="container">
                <div className="trending-topics">
                    <span><strong className="common" style={{color: "#212121"}}>Trending </strong></span>
                    <span><strong className="common" style={{color: "#416aa6"}}>TOPICS</strong></span>
                </div>
                <div className="row">
                    {props.topics.map((topic, i)=>(
                    <div className='col-md-3'>
                        <Link to={"/allquestions/"+ topic.slug} className="link">
                            <div style={{backgroundImage: 'url('+ props.images[i]+')'}} className="w-100 degree-card common">
                                <div className="text-white topic-name">{topic.name}</div>
                            </div>
                        </Link>
                    </div>  
                    ))}
                </div>
            </div>
         </div>

    )
}

HomeSectionThree.defaultProps = {
    images: [degree1, degree2, degree3 , degree4]
}

export default HomeSectionThree;