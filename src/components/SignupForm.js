import React,{useState} from 'react';
import { useFormik } from 'formik';
import { Button, Form, Input } from 'reactstrap';
import useStyles from '../styles/LoginComponentStyle';

import axios from 'axios';

import { GoogleLogin } from 'react-google-login'; 
import FacebookLogin from 'react-facebook-login';

const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (values.firstName.length > 50) {
    errors.firstName = 'Must be 50 characters or less';
  }
  if (!values.lastName) {
    errors.lastName = 'Required';
  } else if (values.lastName.length > 50) {
    errors.lastName = 'Must be 50 characters or less';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 6) {
    errors.password = 'Password must be greater then 6 words';
  }
  if (!values.conPassword) {
    errors.conPassword = 'Required';
  } else if (values.conPassword !== values.password) {
    errors.conPassword = 'Password not match';
  }

  if (!values.signEmail) {
    errors.signEmail = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.signEmail)) {
    errors.signEmail = 'Invalid email address';
  }

  return errors;
};

const SignupForm = ({handleFlip}) => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted

  const responseGoogle = (response) => {
    console.log(response);
  }

  const responseFacebook = (response) => {
    console.log(response);
  }
const [isLoggedIn, setLoggedIn] = useState(false);
const [isError, setIsError] = useState(false);
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      password: '',
      conPassword: '',
      signEmail: '',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      axios.post('http://localhost/MyApplicationMentor/registeruser', {
        email: values.signEmail,
        fname: values.firstName,
        lname: values.lastName,
        password: values.password
      })
      .then(function (response) {
        console.log(response);
        
      })
      .catch(function (error) {
        console.log(error);
      });
    },
  });
  const classes = useStyles()
  return (
    <div className={classes.formContainer}>
      <div className={classes.mainHeading}>
        <p>Sign Up</p>
      </div>
      <Form onSubmit={formik.handleSubmit} className={classes.signForm}>
      <div className={classes.nameInputContainer}>
        <div className={classes.inputContainer}>
        <Input
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
            placeholder="First Name"
          />
          {formik.values.firstName.length > 0 ? formik.errors.firstName ? <div className={classes.showInputError}></div> : <div className={classes.showInputSuccess}></div> : null}
        </div>  
        
        <div className={classes.inputContainer}>
        <Input
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastName}
            placeholder="Last Name"
          />
          {formik.values.lastName.length > 0 ? formik.errors.lastName ? <div className={classes.showInputError}></div> : <div className={classes.showInputSuccess}></div> : null}
        </div>  
       </div> 
        <div className={classes.inputContainer}>
        <Input
            id="signEmail"
            name="signEmail"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.signEmail}
            placeholder="Email"
        />
        {formik.values.signEmail.length > 0 ? formik.errors.signEmail ? <div className={classes.showInputError}></div> : <div className={classes.showInputSuccess}></div> : null}
        </div>
       <div className={classes.passwordInputContainer}> 
        <div className={classes.inputContainer}>
        <Input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.Password}
            placeholder="Password"
            />
             {formik.values.password.length > 0 ? formik.errors.password ? <div className={classes.showInputError}></div> : formik.errors.conPassword ?<div className={classes.showInputPending}></div> : <div className={classes.showInputSuccess}></div> : null}
        {/* {formik.errors.password ? <div>{formik.errors.password}</div> : null} */}
        </div>
        <div className={classes.inputContainer}>
        <Input
            id="conPassword"
            name="conPassword"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.conPassword}
            placeholder="Confirm Password"
        />
          {formik.values.conPassword.length > 0 ? formik.errors.password ? <div className={classes.showInputError}></div> : formik.errors.conPassword ?<div className={classes.showInputPending}></div> : <div className={classes.showInputSuccess}></div> : null}
          </div>  
        </div>  
           <div className={classes.signInBtn}>
          <button type="submit">Sign Up</button>
        </div>
      </Form>
      <div className={classes.signCallAction}><p>Already have an account? <span onClick={handleFlip}>Login here</span></p></div>
      <div className={classes.orHeading}><p>or</p></div>
        <div className={classes.googleFbSignup}>
        <div className={classes.googleSignup}>
            {/* <Button className={classes.googleSignIn} color='' size="lg" active>Google</Button> */}
            <GoogleLogin
              clientId="238382110570-d40rv5houg71vol5e0j5omtr4811m426.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
              buttonText="SIGNUP WITH GOOGLE"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
          />
        </div>
        <div className={classes.fbSignup}>
            {/* <Button className={classes.fbSignIn} color='' size="lg" active>Facebook</Button> */}
            <FacebookLogin
              appId="612523992916583" //APP ID NOT CREATED YET
              fields="name,email,picture"
              callback={responseFacebook}
            />
        </div>
      </div>
    </div>  
  );
};

export default React.memo(SignupForm);