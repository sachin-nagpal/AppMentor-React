import React from 'react';
import consultant from '../images/consultant.png';
import edit from '../images/edit.png';
import counselling from '../images/counselling.png';
import customer from '../images/customer-service.png';
import interview from '../images/interview.png';

import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    servicesImg: {
        height: '2rem',
        width: '2rem'
    }
})

const ProfilePageServices = (props) => {
    const classes = useStyles();
    return(
        <div>
            <div className="services-container">
                <p className="services-heading ml-3">Services</p>
                <hr className="bg-white"></hr>
                <div className="d-flex justify-content-start align-items-center mb-3">
                    <img className={classes.servicesImg} alt="bb" src={consultant}></img><div className="services-heading ml-2">Business Analytics Consultation</div>
                </div>

                <div className="d-flex justify-content-start align-items-center mb-3">
                    <img className={classes.servicesImg} alt="bb" src={edit}></img><div className="services-heading ml-2">Essay Editing</div>
                </div>

                <div className="d-flex justify-content-start mb-3">
                    <img className={classes.servicesImg} alt="bb" src={customer}></img><div style={{lineHeight: "1.2em"}} className="services-heading ml-2">Masters in Business <br></br> Administration Counselling</div>
                </div>

                <div className="d-flex justify-content-start align-items-center mb-3">
                    <img className={classes.servicesImg} alt="bb" src={interview}></img><div className="services-heading ml-2">Interview Preparation</div>
                </div>

                <p className="services-heading text-center" style={{marginTop: "75px"}}>12.99$/minute</p>
                <div className="btn-container">
                <button className="services-btn text-white w-100 d-block my-4" style={{backgroundColor: "#25d366"}}>Request A Call <span className="float-right"> > </span></button>
                <button className="services-btn bg-white w-100" style={{color: "#295caa"}}>Message</button>
                </div>
            </div>
        </div>
    );
}

export default ProfilePageServices;