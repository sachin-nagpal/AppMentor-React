import React,{useState} from 'react';
import useToggleState from '../hooks/useToggleState';
import { createUseStyles } from 'react-jss';
import handleBigText from '../helpers/shortTextLength';

const useStyles = createUseStyles({
    about: style=>({
        width: style.width,
        margin: '0 auto',
    }),
    title: {
       fontSize: '1.2rem'
    },
    aboutTextContr: {
        fontWeight: '400'
    },
    readMore: style => ({
        cursor: 'pointer',
        fontWeight: 'bold',
        color: style.fontCol
    })
})

export default function AboutSection({ about,title,style}) {
    const classes = useStyles(style);
    const [isReadMoreExpand, setIsReadMoreExpand] = useToggleState(false);

    // const handleBigText = () => {
    //     if (about.length > 400) {
    //         return `${about.slice(0, 400)}...`;
    //     }
    // }
    return (
        <div className={classes.about}>
            <p className={classes.title}>{title}</p>
            <div className={classes.aboutText}>
                {
                    isReadMoreExpand === false ? (
                    <div className={classes.aboutTextContr}>
                        <span className={classes.shortAbout}>{handleBigText(about,400)}</span> 
                        <span className={classes.readMore} onClick={setIsReadMoreExpand}>read more</span>
                        </div>) :
                    <div className={classes.aboutTextContr}>
                        <span>{about}</span>
                        <span className={classes.readMore} onClick={setIsReadMoreExpand}>read less</span>
                    </div>    
                }
            </div>
        </div>
    )
}
