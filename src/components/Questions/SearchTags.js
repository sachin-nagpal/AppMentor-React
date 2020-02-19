import React from 'react';
import {Link} from 'react-router-dom';
import {createUseStyles} from 'react-jss';

const useStyles =createUseStyles({
    singleQuestionTag:{
        display: 'flex',
        flexDirection: 'column',
        '& a':{
            textDecoration: 'none',
        },
        '&:not(:last-child)':{
            marginBottom: '0.5rem',
        }
    }
})

export default function SearchTags({data}) {
    const classes = useStyles();
    return (
        <div className={classes.singleQuestionTag}>
            <Link to={`singlequestion/${data.slug}`}>{data.title}</Link>
        </div>
    )
}
