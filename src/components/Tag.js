import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    TagStyles: st=>({
        borderRadius: '10px',
        color: st.color,
        backgroundColor: st.bgColor,
        fontFamily: 'Merriweather',
        padding: '0rem 0.2rem',
        fontSize: '1rem',
        '&:hover': {
            textDecoration:'none'
          }
    })
})

const Tag = ({st,data}) =>{
    const classes = useStyles(st);

    return(
        <>
            <div>
                <div className={classes.TagStyles}>
                    <div className={classes.TagStyles}>{data.name}</div>
                </div>
            </div>
        </>
    )
}

export default Tag;
