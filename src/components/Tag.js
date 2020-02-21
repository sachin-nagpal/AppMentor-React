import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    TagStyles: style=>({
        borderRadius: '10px',
        color: style.color,
        backgroundColor: style.bgColor,
        fontFamily: 'Merriweather',
        padding: '0rem 0.2rem',
        fontSize: '1rem',
        '&:hover': {
            textDecoration:'none'
          }
    })
})

const Tag = ({style,data}) =>{
    const classes = useStyles(style);

    return(
        <>
            <div className={classes.TagStyles}>
                <div className={classes.TagStyles}>{data.name}</div>
            </div>
        </>
    )
}

export default Tag;