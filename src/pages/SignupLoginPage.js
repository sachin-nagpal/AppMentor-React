import React,{useState} from 'react'
import SignupForm from '../components/SignupForm';
import LoginForm from '../components/LoginForm';
import ForgotPasswordSignin from '../components/ForgetPassSignin';
import { createUseStyles } from 'react-jss';
import '../styles/cardFlip.css';
import SnackBar from '../components/Misc/SnackBar';
import SignUpLoginCrousel from '../components/SignUpLoginCrousel';
import {Redirect} from 'react-router-dom';

import {
    Container, Row, Col, Modal
  } from 'reactstrap';
  

const useStyles = createUseStyles({
  signupLoginWrapPage: {
    width: '100%',
    height: 'calc(100% - 71px)'
  },
    signUpPageContainer:st=>({
        maxWidth: '60rem',
        margin: `${st.pop === 'yes' ? 0 : 'auto'}`,
        boxShadow: '0 0 25px 2px rgba(206, 206, 206, 0.75)',
        position: 'relative',
        top: `${st.pop === 'yes'? 0 : '50%'}`,
        transform: `translateY(${st.pop === 'yes' ? 0 : '-50%'})`,
    }),
    activePopContainer:{
      maxWidth: '450px'
    },
    activeHeading:{
      color: '#2e9557',
      fontFamily: 'Merriweather',
      fontSize: '1.5rem',
      textAlign: 'center',
      padding: '1.5rem 0 1rem 0'
    },
    activeMsg:{
      color: '#696969',
      fontFamily: 'Merriweather',
      fontSize: '1rem',
      textAlign: 'center',
      maxWidth: '90%',
      margin: '0 auto',
      '& p':{
        marginBottom: '1rem'
      }
    },
    activePopBtnContainer:{
      fontSize: '1.25rem',
      fontFamily: 'Merriweather',
      margin: '2rem auto',
      '& button':{
        color: '#ffffff',
        backgroundColor: '#2e9557',
        border: '0',
        padding: '0.2rem 2rem',
        borderRadius: '3px'
      }
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

const SignupLoginPage = ({items,itemsBgCol,st}) => {
  const classes = useStyles(st);
  const [isFlipped,setIsFlipped] = useState(true);
  const [isForgotPassShow, setForgotPassShow] = useState(true);
  const [signUpRedirect, setSignUpRedirect] = useState(false);
  // const [msg]

  const [isUserExist, setIsUserExist] = useState(false);
  const [activePop, setActivePop] = useState(false);
  const toggleActivePop = () => setActivePop(!activePop);
  
  const handleFlipCard = () => {
    setIsFlipped(!isFlipped)
  }
  const handleForgot = ()=>{
    setForgotPassShow(!isForgotPassShow);
  }
  const handleIsActivePop = () => {
    setActivePop(!activePop);
  }

  const activeUserPopupShow = async(val) => {
    await setIsUserExist(val);
    await setActivePop(!activePop);
  }
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const handlePopup = (val) => {
    setIsSnackbarOpen(val);
    if (val) {
      // setTimeout(function () { setIsSnackbarOpen(false); }, 5000);
    }
  }
  const handleSighupRedirect = () =>{
    setSignUpRedirect(!signUpRedirect)
  }
  const handleModalCloseAndFlip = async () =>{
    await handleIsActivePop(!activePop)
    handleFlipCard();
  }
  if(signUpRedirect) {
    return < Redirect to='/'/>
  }
  return (
      // <div className={classes.signupLoginWrapPage}>
        <div className={classes.signUpPageContainer}>
          <Modal isOpen={activePop} toggle={toggleActivePop} className={classes.activePopContainer} centered>
            {isUserExist ?
            <>
             <div className={classes.activeHeading}>
                  <p>Thank You for Registering.</p>
              </div>
              <div className={classes.activeMsg}>
                <p>We have sent you an activation code.</p><p>Please check your email to verify your account.</p>
              </div>
              <div className={classes.activePopBtnContainer}>
                  <button className={classes.activePopBtn} onClick={handleSighupRedirect}>Ok</button>
              </div>
              </>
              : <>
              <div className={classes.activeHeading}>User Already Exists.</div>
                <div className={classes.activePopBtnContainer}>
                    <button className={classes.activePopBtn} onClick={handleModalCloseAndFlip}>Login</button>
                </div>
              </>}
          </Modal>
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
                        <SignupForm handleFlip={handleFlipCard} handleIsActivePop={activeUserPopupShow} signUpRedirect={signUpRedirect}/>
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
