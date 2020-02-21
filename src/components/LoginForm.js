import React,{useState} from 'react';
import { useFormik } from 'formik';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import useStyles from '../styles/LoginComponentStyle'
import useToggleState from '../hooks/useToggleState';
import { Redirect, Link } from 'react-router-dom';

//Context
import { useAuth } from "../context/auth";


import { withRouter } from 'react-router-dom';

import axios from 'axios';

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

const LoginForm = ({handleFlip,handleForgotCard,props,history, path,handlePopup}) => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const referer = '/allquestions';
  const {authTokens, setAuthTokens,setUserName } = useAuth();
  const [isLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      loginPassword: '',
      loginEmail: '',
    },
    validate,
    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2));
      axios.post(`${process.env.REACT_APP_API_HOST_URL}/userlogin`, {
        email: values.loginEmail,
        password: values.loginPassword
      })
      .then(function (response) {
        if (response.data.msg && (response.data.msg).replace(/[\s+]/g, '').toLowerCase() === 'passwordmismatch') {
          console.log((response.data.msg).replace(/[\s+]/g,'').toLowerCase());
          handlePopup(true);
        }
        if (response.data.unique) {
          setAuthTokens(response.data.unique);
          // console.log(props.location.state.referer);
          setUserName(response.data.name);
          handlePopup(false);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
      return () => {
    }; 
    },
  });
  const classes = useStyles();
    if (authTokens && !isLoading) {
    return <Redirect to={referer} />;
  }
  
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
            <Button className={classes.googleSignIn} color='' size="lg" active>
              <a href={`http://myapplicationmentor.mim-essay.com/MyApplicationMentor/login/google`} style={{textDecoration: 'none'}}>
                   Google
                </a>
            </Button>
        </div>
        <div className={classes.fbSignup}>
            <Button className={classes.fbSignIn} color='' size="lg" active>
            <a href={`http://myapplicationmentor.mim-essay.com/MyApplicationMentor/login/facebook`} style={{textDecoration: 'none'}}>Facebook</a></Button>
        </div>
      </div>
     </div>  
  );
};

export default withRouter(LoginForm);