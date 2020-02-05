import React from 'react';
import {Link} from 'react-router-dom';

export default function RelatedQuesSingle({ques,getQuestionsData}) {
    function getDataFromBackend(){
        getQuestionsData(ques.slug)
    }
    return (
        <div>
            <Link  to={{ pathname: `/singlequestion/${ques.slug}`, state: { title: 'Hero Detail'} }} onClick={getDataFromBackend}>{ques.title}</Link>
        </div>
    )
}
