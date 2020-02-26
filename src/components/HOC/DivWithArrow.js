import React from 'react';
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
    divWithArrowContainer:styles=>({
        border: `1px solid ${styles.borderCol}`,
        backgroundColor: styles.bgCol,
        cursor: styles.cursor || 'pointer',
        // transition: 'background 0.1s',
        position: 'relative',
        marginTop: styles.marginTop,
        maxHeight: styles.heigth,
        borderRadius: styles.borderRadius || '0.625rem',
        padding: styles.padding || '0.625rem 0.9375rem',
        zIndex: styles.zIndex || '0',
        display: styles.display || '',
        '&:hover':{
            background: '#ffffff',
        },
        '&:hover .answersTriangle':{
            background: '#ffffff',
        },
        '& .answersTriangle':styles=>({
            borderTop: `1px solid ${styles.borderCol}`,
            borderLeft: `1px solid ${styles.borderCol}`,
            position: 'absolute',
            backgroundColor: styles.triangleCol || styles.bgCol,
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
