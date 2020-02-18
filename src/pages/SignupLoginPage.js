import React,{useState} from 'react'
import SignupForm from '../components/SignupForm';
import LoginForm from '../components/LoginForm';
import ForgotPasswordSignin from '../components/ForgetPassSignin';
import { createUseStyles } from 'react-jss';
import '../styles/cardFlip.css';
import SnackBar from '../components/Misc/SnackBar';
import SignUpLoginCrousel from '../components/SignUpLoginCrousel';

import {
    Container, Row, Col
  } from 'reactstrap';
  

const useStyles = createUseStyles({
  signupLoginWrapPage: {
    width: '100%',
    height: 'calc(100% - 71px)'
  },
    signUpPageContainer:st=>({
        maxWidth: '60rem',
        margin: `${st ? 0 : 'auto'}`,
        boxShadow: '0 0 25px 2px rgba(206, 206, 206, 0.75)',
        position: 'relative',
        top: `${st ? 0 : '50%'}`,
        transform: `translateY(${st ? 0 : '-50%'})`
    }),
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

const SignupLoginPage = ({items,itemsBgCol,st}) => {
  const classes = useStyles({itemsBgCol,st});
  const [isFlipped,setIsFlipped] = useState(true);
  const [isForgotPassShow, setForgotPassShow] = useState(true);
 
  
  const handleFlipCard = () => {
    setIsFlipped(!isFlipped)
  }
  const handleForgot = ()=>{
    setForgotPassShow(!isForgotPassShow);
  }
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const handlePopup = (val) => {
    setIsSnackbarOpen(val);
    if (val) {
      // setTimeout(function () { setIsSnackbarOpen(false); }, 5000);
    }
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
                              <LoginForm handleFlip={handleFlipCard} handleForgotCard={handleForgot} handlePopup={handlePopup}/>
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
          <SnackBar isOpen={isSnackbarOpen} text="The username or password entered is incorrect." handlePopup={handlePopup}/>
         </Container>    
      </div>
      //  </div> 
    )
}


export default SignupLoginPage;
