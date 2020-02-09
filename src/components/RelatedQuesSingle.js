import React from 'react';
import { Link } from 'react-router-dom';
import { getData } from '../helpers/getSingleQuestions';

export default function RelatedQuesSingle({ques}) {
    return (
        <div>
            <Link  to={{ pathname: `/singlequestion/${ques.slug}`, state: { title: 'Hero Detail'} }} >{ques.title}</Link>
        </div>
    )
}
