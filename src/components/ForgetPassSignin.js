import React from 'react';
import { useFormik } from 'formik';
import useToggleState from '../hooks/useToggleState';
import { Button, Form, Input } from 'reactstrap';
import {createUseStyles} from 'react-jss';
import useStyles from '../styles/LoginComponentStyle';
import MsgLogo from '../images/msgLogo.png'


const validate = values => {
    const errors = {};
    if (!values.forgEmail) {
        errors.forgEmail = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.forgEmail)) {
        errors.forgEmail = 'Invalid email address';
      }
    
    return errors;
}
const ForgetPassSignin = ({handleForgotCard})=>{
    const classes = useStyles();
    const formik = useFormik({
        initialValues: {
          forgEmail: '',
        },
        validate,
        onSubmit: values => {
          setIsVarifying();
        },
      });
      const [isVarifying, setIsVarifying] = useToggleState(false);

    return(
        <div className={classes.formContainer}>
            <div className={classes.mainHeading}>
                <p>Forgot Password</p>
            </div>
            <Form onSubmit={formik.handleSubmit} className={classes.signForm}>
              <div className={classes.inputContainer}>
                    <Input
                        id="forgEmail"
                        name="forgEmail"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.forgEmail}
                        placeholder="Email"
                    />
                    {formik.values.forgEmail.length > 0 ? formik.errors.forgEmail ? <div className={classes.showInputError}></div> : <div className={classes.showInputSuccess}></div> : null}
                </div>  
                <div className={classes.signInBtn}>
                  <button type="submit"><img src={MsgLogo} alt="msg logo" />{!isVarifying ? 'Send Password Reset Link' : 'Varifying'}</button>
                </div>
            </Form>  
            <div className={classes.signCallAction}><p>Don’t have an account? <span onClick={handleForgotCard}>Get Started!</span></p></div>
        </div>
    )
}

export default ForgetPassSignin;