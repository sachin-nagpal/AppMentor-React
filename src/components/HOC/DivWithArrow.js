import React from 'react';
import {createUseStyles} from 'react-jss';
import '../../styles/Questions.css'

const useStyles = createUseStyles({
    divWithArrowContainer:styles=>({
        border: `1px solid ${styles.borderCol}`,
        backgroundColor: styles.bgCol,
        cursor: 'pointer',
        transition: 'background-color 0.1s',
        position: 'relative',
        marginTop: '6px',
        '&:hover':{
            backgroundColor: '#ffffff',
        },
        '&:hover .answersTriangle':{
            backgroundColor: '#ffffff',
        },

        '& .answersTriangle':styles=>({
            borderTop: `1px solid ${styles.borderCol}`,
            borderLeft: `1px solid ${styles.borderCol}`,
            position: 'absolute',
            backgroundColor: styles.bgCol,
            height: styles.arrowSize,
            width: styles.arrowSize,
            transform:' rotate(45deg)',
            left: styles.arrowPosFromLeft,
            top: '-6px',    
            transition: 'background-color 0.1s',
        })
    })
});

export default function DivWithArrow({styles, children}) {
    const classes = useStyles(styles)
    return (
        <div className={classes.divWithArrowContainer}>
            <div className="answersTriangle"></div>
            {children}
        </div>
    )
}
