import React from 'react';
import { Link } from 'react-router-dom';
import { getData } from '../helpers/getSingleQuestions';
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
    relatedQuesLink:{
        '&:not(:last-child)':{
            
        },
        marginBottom: '1rem'
    }
}) 
export default function RelatedQuesSingle({ques}) {
    const classes = useStyles();
    const questionTitle = ques.title.length > 80 ? `${ques.title.slice(0,80)}...` : ques.title;
    return (
        <div className={classes.relatedQuesLink}>
            <Link  to={{ pathname: `/singlequestion/${ques.slug}` }}>{questionTitle}</Link>
        </div>
    )
}
