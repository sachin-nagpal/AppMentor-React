import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    mainHeading: {
        textAlign: 'center',
        color: '#4164aa',
        fontFamily: 'Trocchi',
        fontSize: '1.6rem',
        paddingBottom: '0.2rem',
        marginTop: '1.5rem',
        position: 'relative',
        '&:before': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            width: '100%',
            height: '0.1rem',
            display: 'block',
            backgroundColor: '#eaeaea'
        }
    },
    formContainer: style => ({
        maxWidth: '30rem',
        margin: 'auto'
    }),
    signForm:{
        width: '98%',
        margin: 'auto'
    },
    signLogForm: {
        width: '80%',
        margin: 'auto'
    },
    inputContainer: {
        display: 'flex',
        border: '1px solid #505050',
        borderRadius: '5px',
        margin: '1.3rem 0',
        position: 'relative',
        overflow: 'hidden',
        '& input': {
            border: 'none',
            padding: '1.5rem 1rem',
            fontFamily: 'Trocchi',
            borderLeft: '1px solid #b5b5b5',
            borderRadius: '0',
            color: '#8d8897',
            '&::Placeholder': {
                fontSize: '1.2rem',
                letterSpacing: '0.6px'
            },
            '&:focus': {
                boxShadow: 'none',
                borderLeft: '1px solid #b5b5b5',
            },
        },
    },
    inputIconimg: {
        margin: 'auto',
        padding: '0rem 0.7rem',
        display: 'flex',
        position: 'relative',
        '& img': {
            width: '1.5rem',
            height: '1.5rem',
            justifyContent: 'center'
        },
    },
    signInBtn: {
        width: '100%',
        backgroundColor: '#355d98',
        borderRadius: '7px',
        overflow: 'hidden',
        position: 'relative',
        '& button': {
            width: '100%',
            height: '100%',
            background: 'inherit',
            color: '#fffefe',
            padding: '0.4rem',
            fontSize: '1.3rem',
            cursor: 'pointer',
            outline: 'inherit',
            border: '0',
            fontFamily: 'Merriweather',
            '& img':{
                marginBottom: '0.2rem',
                marginRight: '0.5rem'
            }
        }
    },

    forgotPass: {
        color: '#c53e46',
        fontFamily: 'Merriweather',
        width: '98%',
        margin: '1rem auto',
        textAlign: 'right',
        cursor: 'pointer'
    },
    signCallAction: {
        width: '80%',
        margin: '1.5rem auto',
        color: '#454141',
        fontFamily: 'Merriweather',
        '& p': {
            fontSize: '1rem',
            '& span': {
                fontSize: '1.1rem',
                color: '#2e9557',
                cursor: 'pointer'
            }
        }
    },
    orHeading: {
        color: '#9a9a9a',
        fontFamily: 'Merriweather',
        textAlign: 'center',
        position: 'relative',
        '&:before': {
            content: '""',
            position: 'absolute',
            top: '50%',
            left: '20%',
            width: '25%',
            height: '0.1rem',
            display: 'block',
            backgroundColor: '#eaeaea'
        },
        '&:after': {
            content: '""',
            position: 'absolute',
            top: '50%',
            right: '20%',
            width: '25%',
            height: '0.1rem',
            display: 'block',
            backgroundColor: '#eaeaea'
        }
    },

    //input error
    showInputError: {
        width: '10px',
        backgroundColor: '#c53e46',
        animation: 'rightIndicator 1s'
    },
    showInputSuccess: {
        width: '10px',
        backgroundColor: '#2e9557',
        animation: 'rightIndicator 1s'
    },
    showInputPending: {
        width: '10px',
        backgroundColor: '#ffcc00',
        animation: 'rightIndicator 1s'
    },
    passwordInputContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        '& $inputContainer': {
            width: '48%',
            margin: 0,
            marginBottom: '1rem',
            '& input::Placeholder': {
                fontSize: '0.9rem'
            }
        }
    },
    nameInputContainer:{
        display: 'flex',
        justifyContent: 'space-between',
        '& $inputContainer': {
            width: '48%',
            marginTop: '1rem',
            marginBottom: '0',
            '& input::Placeholder': {
                fontSize: '0.9rem'
            }
        }
    },
      // googleFBSignIn BTN
  googleFbSignup: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  googleSignIn: {
    backgroundColor: '#ea4335',
    color: '#ffffff',
    width: '11rem',
    margin: '0.5rem auto',
    padding: {
      top: '0.5rem',
      bottom: '0.5rem',
    },
    '&:hover': {
      color: '#ffffff',
      '&:focus': {
        boxShadow: '0'
      }
    }
  },
  fbSignIn: {
    backgroundColor: '#4267b2',
    color: '#ffffff',
    width: '11rem',
    margin: '0.5rem auto',
      padding: {
        top: '0.5rem',
        bottom: '0.5rem',
      },
      '&:hover': {
        color: '#ffffff',
        '&:focus': {
          boxShadow: '0'
        }
      }
  },
  '@media screen and (max-width: 768px)': {
    googleFbSignup: {
      justifyContent: 'space-around'
      },
      googleSignIn: {
          width: '8rem'
      },
      fbSignIn: {
          width: '8rem'
      }
  }
})

export default useStyles;