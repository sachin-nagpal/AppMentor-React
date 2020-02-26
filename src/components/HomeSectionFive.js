import React, { useEffect } from 'react';
import CarouselBlogs from './CarouselBlogs';
import '../styles/HomeSectionFive.css';
import ShowMoreText from './ShowMoreText';
import { createUseStyles } from 'react-jss';

const path = `${process.env.REACT_APP_API_HOST_URL}/public/`; 

const useStyles = createUseStyles({
  sliderContainer: {
      maxWidth: '60%',
      margin: 'auto'
  }
  })

const HomeSectionFive = (props) =>{

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };

    return(
        <>
         <div className="section-five-container">
            <div className="container">
                <div className="blogs-container">
                    <span><strong className="common" style={{color: "#212121"}}>Explore </strong></span>
                    <span><strong className="common" style={{color: "#416aa6"}}>BLOGS</strong></span>

                    <CarouselBlogs blogs={props.blogs}/>           

                    <div className="get-started">
                        <div className="get-started-text">Every question raised has an answer. <br></br>You are just a step away from the troubleshooters.</div>
                        <div>
                            <button className="commom get-started-btn">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
         </div>
        </>
    )
}

export default HomeSectionFive;