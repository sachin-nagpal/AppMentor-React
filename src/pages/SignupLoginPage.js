import React,{useState} from 'react'
import SignupForm from '../components/SignupForm';
import LoginForm from '../components/LoginForm';
import ForgotPasswordSignin from '../components/ForgetPassSignin';
import { createUseStyles } from 'react-jss';
import ImgCardSlide from '../components/ImgCardSlide';
import '../styles/cardFlip.css'
import uuid from 'uuid';

import {
    Carousel,
    CarouselItem,
    CarouselIndicators,
    Container, Row, Col
  } from 'reactstrap';
  


import SignupPageImg from '../images/signupPageImg.png';
import SignupPageImg1 from '../images/SignupPageImg1.png';
import SignupPageImg2 from '../images/signupPageImg2.png';




const useStyles = createUseStyles({
    signUpPageContainer:{
        maxWidth: '60rem',
        margin: 'auto',
        boxShadow: '0 0 25px 2px rgba(206, 206, 206, 0.75)',
        position: 'relative',
        top: '50%',
        transform: 'translateY(-55%)'
    },
    caroIndi:{
      '& li':{
        backgroundColor: '#e1e1e1',
        height: '0.6rem',
        width: '0.6rem',
        borderRadius: '50%'
      },
      '& li.active':{
        backgroundColor: '#89ade3'
      }
  },
  colRow: {
      
    },
    '@media screen and (max-width: 768px)': {
      signUpPageContainer: {
        position: 'static',
        top: '0',
        transform: 'translateY(0)'
      },
      colRow: {
      flexDirection: 'row-reverse'
    },
    }
   
})

const SignupLoginPage = ({items,itemsBgCol}) => {
  const classes = useStyles(itemsBgCol);
  const [isFlipped,setIsFlipped] = useState(true);
  const [isForgotPassShow,setForgotPassShow] = useState(true);
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
      }
    
      const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
      }
    
      const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
      }
    
      const slides = items.map((item) => {
        return (
          <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.key}
          >
             <ImgCardSlide style={{
               bg: item.imgBg,
               height: '35rem'
                }}
               item={item}/>
          </CarouselItem>
        );
      });
  
    const handleFlipCard = () => {
      setIsFlipped(!isFlipped)
  }
  const handleForgot = ()=>{
    setForgotPassShow(!isForgotPassShow);
  }
  
  return (
      // <div className={classes.signupLoginWrapPage}>
        <div className={classes.signUpPageContainer}>
         <Container>
            <Row className={classes.colRow}>
                <Col className="p-0" md="5">
                    <Carousel
                      activeIndex={activeIndex}
                      next={next}
                      previous={previous}
                      interval='3500'
                      ride='carousel'
                
                      >
                      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} className={classes.caroIndi}/>
                      {slides}
                    </Carousel>
                </Col>
                <Col md="7" className={classes.formContainer}> 
     
                  <div className="flip-card">
                      <div className={!isFlipped ? 'flip-card-inner flip-card-inner-flip' : 'flip-card-inner'}>
                        <div className="flip-card-front">

                          {!isForgotPassShow &&
                          <div className='slide-card-inside-front slide-absolute-in'>
                            <ForgotPasswordSignin handleForgotCard={handleForgot}/>
                          </div>
                          }  
                          {isForgotPassShow && 
                          <>
                            <div className='slide-card-inside-front'>
                              <LoginForm handleFlip={handleFlipCard} handleForgotCard={handleForgot}/>
                            </div>
                          </>  
                          }                        
                          
                        </div>
                        <div className="flip-card-back">
                        <SignupForm handleFlip={handleFlipCard}/>
                        </div>
                      </div>
                    </div>
                </Col>
            </Row>
         </Container>    
        </div>
    //  </div> 
    )
}

SignupLoginPage.defaultProps = {
     items : [
        {
          img: SignupPageImg,
          title: 'Ask your Questions',
          sub: 'An ecosystem built for you to ask questions, seek knowledge, and grow a network.',
          imgBg: 'linear-gradient(10deg, #ffffff 0%, #c8baff 100%)',
          key: uuid()
        },
        {
            img: SignupPageImg2,
            title: 'Get In-Touch with Mentors',
            sub: 'Connect with mentors and get unique insights and dig deep into topics you like to explore.',
            imgBg: 'linear-gradient(10deg, #ffffff 0%, #bed6ff 100%)',
            key: uuid()
        },
        {
          img: SignupPageImg1,
          title: 'Customize your Feed',
          sub: 'Follow topics and threads for which you have been seeking answers. Join our community to interact with people.',
          imgBg: 'linear-gradient(10deg, #ffffff 0%, #c68fa7 100%)',
          key: uuid()
        }
      ],
}

export default SignupLoginPage;
