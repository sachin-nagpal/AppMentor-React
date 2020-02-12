import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  DivWithArrowContainer: style=>({
    color: 'green',
    width: style.width,
    height: style.height,
    margin: {
      // jss-plugin-expand gives more readable syntax
      top: 5, // jss-plugin-default-unit makes this 5px
      right: 0,
      bottom: style.marginBottom,
      left: '1rem'
    },
    '& span': {
      // jss-plugin-nested applies this to a child span
      fontWeight: 'bold' // jss-plugin-camel-case turns this into 'font-weight'
    }
  }),
})


function DivWithArrow({children,style}) {
    const classes = useStyles(style)
    return (
        <div className={classes.DivWithArrowContainer}>
            {children}
        </div>
    );
}

export default DivWithArrow;