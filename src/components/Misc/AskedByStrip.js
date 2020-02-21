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
    tagTxt: sty=>({
        color: '#406eb3',
        cursor: 'pointer',
        background: sty.bg || '',
        padding: sty.padding || '',
        margin: '0 0.2rem'
    })
})

function AskedByStrip({ name, tags , getTagData, url ,handleChangeState,st}) {
    const sty = st !== undefined && st;
    // Tags Comes in array ↑
    const classes = useStyles(sty);
    return (
        <div className={classes.stripContainer}>
            <span className={classes.askedByTxt}>Asked by</span> <span className={classes.nameTxt}>{name}</span> in {tags.map((tag,i)=>(<div key={uuid()} style={{display: 'inline-block'}}><span onClick={()=>getTagData(tag.slug,handleChangeState)} className={classes.tagTxt}><Link to={`${url}${tag.slug}`}>{tag.name}{tags.length-1 !== i && sty ? '' : ", "}</Link></span></div>))}
        </div>
    );
}

export default AskedByStrip;