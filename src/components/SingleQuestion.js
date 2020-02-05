import React from 'react';
import edit from '../images/edit.png';
import img from '../images/image.jpeg';
import ShowMoreText from './ShowMoreText';
import {Link} from 'react-router-dom';
export default function SingleQuestion({quesData}) {
    // console.log(quesData)

    // console.log(quesData.img)
    return (
        <div>
            <div>
            <div className="d-flex">
            <div className="asked-by">Asked by</div>
            <div className="asked-by-name">Ashmeet Singh</div>
            <div className="asked-by"> in </div>
            <div className="asked-by-name">Business Analytics, MBA and France Universities</div>
            </div>

            <div className="questions__questions">{quesData.title}</div>

            <div className="questions__answers-about"><img src={edit} height="20px" width="20px"/> 1 <div style={{height:"5px", width:"5px", borderRadius:"50%", backgroundColor: "#c4c4c4"}}></div> 3 days ago</div>
        
            <div className="questions__answers-container">
            <div className="answers-triangle"></div>
            <div className="questions__answers">
                {/* Hey there,Masters in Business Analytics is a perfect blend of Data Science, Information Theory, Business Intelligence, and Computer Science. Its major aim is to change heavy data into actionable intelligence by using different quantitative and statistical methods. Many reputed...  <span style={{color: "#0074d3"}}>(Read More)</span> */}
                {/* <ShowMoreText text={quesData.details} length={50} btnText={{ more:"see more",less:"see less" }} btnCol="#295caa"/> */}
                {quesData.details}
                <Link  to={{ pathname: `/singlequestion/${quesData.slug}`, state: { title: 'Hero Detail'} }}>read more</Link>
                <div className="user-about-container">
                <div className="d-flex align-items-center">
                    <img className="user-img" src={quesData.image}></img>
                    <div className="questions__user-about">
                    <div style={{fontSize:"17px"}}>{quesData.fname} {quesData.lname}</div> 
                    <div style={{fontSize:"15px"}}>userabout</div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}
