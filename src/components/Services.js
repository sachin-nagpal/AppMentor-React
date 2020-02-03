import React from 'react';

const Services = (props) => {
    return(
        <div>
            <div className="services-container">
                <p className="services-heading ml-3">Services</p>
                <hr className="bg-white"></hr>
                <div className="d-flex justify-content-start align-items-center mb-3">
                    <img className="services-img" alt="bb"></img><div className="services-heading ml-2">Business Analytics Consultation</div>
                </div>

                <div className="d-flex justify-content-start align-items-center mb-3">
                    <img className="services-img" alt="bb"></img><div className="services-heading ml-2">Essay Editing</div>
                </div>

                <div className="d-flex justify-content-start mb-3">
                    <img className="services-img" alt="bb"></img><div style={{lineHeight: "1.2em"}} className="services-heading ml-2">Masters in Business <br></br> Administration Counselling</div>
                </div>

                <div className="d-flex justify-content-start align-items-center mb-3">
                    <img className="services-img" alt="bb"></img><div className="services-heading ml-2">Interview Preparation</div>
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

export default Services;