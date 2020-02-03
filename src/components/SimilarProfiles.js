import React from 'react';
import '../styles/main.css';
import image from '../images/image.jpeg';

const SimilarProfiles = (props) => {
    return(
        <div>
            <div className="similar-prof-container">
                <div className="heading">Browse Similar profiles</div>
                <hr className="mt-2" style={{backgroundColor: "#b1b1b1"}}></hr>
                <div className="d-flex justify-content-center align-items-center mb-4">
                    <img className="similar-img" src={image} alt="img"></img>
                    <div className="pl-3 pr-5">
                        <div class="username">Rohit Rajaram</div>
                        <div class="user-details">
                        Co-Founder, Mim-Essay
                        <br></br>
                        ESCP Europe Alumni 
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-center align-items-center mb-4">
                    <img className="similar-img" src={image} alt="img"></img>
                    <div className="pl-3 pr-5">
                        <div class="username">Rohit Rajaram</div>
                        <div class="user-details">
                        Co-Founder, Mim-Essay
                        <br></br>
                        ESCP Europe Alumni 
                        </div>
                    </div>
                </div> 

                <div className="d-flex justify-content-center align-items-center mb-4">
                    <img className="similar-img" src={image} alt="img"></img>
                    <div className="pl-3 pr-5">
                        <div class="username">Rohit Rajaram</div>
                        <div class="user-details">
                        Co-Founder, Mim-Essay
                        <br></br>
                        ESCP Europe Alumni 
                        </div>
                    </div>
                </div>                             
            </div>
        </div>
    );
}

export default SimilarProfiles;