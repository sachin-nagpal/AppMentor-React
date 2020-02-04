import React,{useContext} from 'react';
import { useFormik } from 'formik';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import useStyles from '../styles/LoginComponentStyle'
import useToggleState from '../hooks/useToggleState';

import axios from 'axios';
//user context
import {UserLoginState} from '../context/UserLoginState';

//Set Cookie
import { useCookies } from 'react-cookie';

import PersonHead from '../images/personHead.png'
import LockIcon from '../images/LockIcon.png'


// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate = values => {
  const errors = {};
  if (!values.loginPassword) {
    errors.lastName = 'Required';
  } else if (values.loginPassword.length < 6) {
    errors.loginPassword = 'Password must be greater then 6 words';
  }

  if (!values.loginEmail) {
    errors.loginEmail = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.loginEmail)) {
    errors.loginEmail = 'Invalid email address';
  }

  return errors;
};

const LoginForm = ({handleFlip,handleForgotCard}) => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const handleClick=(e)=>{
      console.log(e.target);
      
  }
  const formik = useFormik({
    initialValues: {
      loginPassword: '',
      loginEmail: '',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      axios.post('http://localhost/MyApplicationMentor/userlogin', {
        email: values.loginEmail,
        password: values.loginPassword
      })
      .then(function (response) {
        console.log(response.data);
        if(response.data.userid){
          setIsUserLogin();
          setCookie(response.data.userid)
          return;
        }
        if(response.data.msg === "Password Mismatch"){
          setIncorrectLoginDetails();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    },
  });
  const classes = useStyles();
  const [isIncorrectLoginDetails,setIncorrectLoginDetails] = useToggleState(false); 
  const {setIsUserLogin} = useContext(UserLoginState);
  const [cookies, setCookie] = useCookies(['loginId']);
  return (
    <div className={classes.formContainer}>
      <div className={classes.mainHeading}>
        <p>Sign In</p>
      </div>
        <Form onSubmit={formik.handleSubmit} className={classes.signForm}>
        {/* <Label htmlFor="loginEmail">Email Address</Label> */}
        <div className={classes.inputContainer}>
          <div className={classes.inputIconimg}>
            <img src={PersonHead} alt="icon"/>
          </div>
          <Input
              id="loginEmail"
              name="loginEmail"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.loginEmail}
              placeholder="Email"
          />
          {formik.values.loginEmail.length > 0 ? formik.errors.loginEmail ? <div className={classes.showInputError}></div> : <div className={classes.showInputSuccess}></div> : null}
        </div>
        {/* <Label htmlFor="loginPassword">Password</Label> */}
        <div className={classes.inputContainer}>
          <div className={classes.inputIconimg}>
            <img src={LockIcon} alt="icon"/>
          </div>
        <Input
            id="loginPassword"
            name="loginPassword"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.loginPassword}
            placeholder="Password"
        />
        {/* {formik.errors.loginPassword ? <div>{formik.errors.loginPassword}</div> : null} */}
        </div>
        <div className={classes.signInBtn}>
          <button type="submit">Sign In</button>
        </div>
      </Form>
      <div className={classes.forgotPass}><p onClick={handleForgotCard}>Forgot Password?</p></div>
      <div className={classes.signCallAction}><p>Don’t have an account? <span onClick={handleFlip}>Get Started!</span></p></div>
      <div className={classes.orHeading}><p>or</p></div>
      <div className={classes.googleFbSignup}>
        <div className={classes.googleSignup}>
            <Button className={classes.googleSignIn} color='' size="lg" active>Google</Button>
        </div>
        <div className={classes.fbSignup}>
            <Button className={classes.fbSignIn} color='' size="lg" active>Facebook</Button>
        </div>
      </div>
     </div>  
  );
};

export default React.memo(LoginForm);