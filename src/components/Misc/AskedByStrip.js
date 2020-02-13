import React from 'react';
import { createUseStyles } from 'react-jss';
import {Link} from 'react-router-dom';
import uuid from 'uuid';

const useStyles = createUseStyles({
    stripContainer: {
        width: '100%',
        color: '#4a4a4a',
        fontSize: '0.85rem'
    },
    askedByTxt: {
        fontFamily: 'Roboto',
    },
    nameTxt: {
        color: '#406eb3',
        cursor: 'pointer'
    },
    tagTxt: {
        color: '#406eb3',
        cursor: 'pointer'
    }
})

function AskedByStrip({ name, tags , getTagData, url ,handleChangeState}) {
    // Tags Comes in array ↑
    const classes = useStyles();
    return (
        <div className={classes.stripContainer}>
            <span className={classes.askedByTxt}>Asked by</span> <span className={classes.nameTxt}>{name}</span> in {tags.map((tag,i)=>(<div key={uuid()} style={{display: 'inline-block'}}><span onClick={()=>getTagData(tag.slug,handleChangeState)} className={classes.tagTxt}><Link to={`${url}${tag.slug}`}>{tag.name}{tags.length-1 !== i && ", "}</Link></span></div>))}
        </div>
    );
}

export default AskedByStrip;