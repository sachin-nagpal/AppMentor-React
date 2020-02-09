import React,{useState} from 'react'
import SignupForm from '../components/SignupForm';
import LoginForm from '../components/LoginForm';
import ForgotPasswordSignin from '../components/ForgetPassSignin';
import { createUseStyles } from 'react-jss';
import '../styles/cardFlip.css';

import SignUpLoginCrousel from '../components/SignUpLoginCrousel';

import {
    Container, Row, Col
  } from 'reactstrap';
  

const useStyles = createUseStyles({
    signUpPageContainer:{
        maxWidth: '60rem',
        margin: 'auto',
        boxShadow: '0 0 25px 2px rgba(206, 206, 206, 0.75)',
        position: 'relative',
        top: '50%',
        transform: 'translateY(-55%)'
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
  const [isForgotPassShow, setForgotPassShow] = useState(true);
 
  
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
                  {/* Carousel */}
                  <SignUpLoginCrousel itemsBgCol={itemsBgCol}/>
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


export default SignupLoginPage;
