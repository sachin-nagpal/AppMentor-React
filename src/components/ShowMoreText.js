import React from 'react';
import useToggleState from '../hooks/useToggleState';
import { createUseStyles } from 'react-jss';
import handleBigText from '../helpers/shortTextLength';


const useStyles = createUseStyles({
    aboutTextContr:{
        color:'#686767'
    },
    readMore:btnCol=>({
        color: btnCol,
        fontSize: '1rem',
        fontWeight: '500',
        cursor: 'pointer'
    })
})
export default function ShowMoreText({text,length,btnText,btnCol,textColor}) {
    const classes = useStyles(btnCol,textColor);
    const [isReadMoreExpand, setIsReadMoreExpand] = useToggleState(false);
    return (
        <div>
            {
                isReadMoreExpand === false ? (
                    <div className={classes.aboutTextContr}>
                        <span className={classes.showShort}>{handleBigText(text,length)}</span> 
                        <span className={classes.readMore} onClick={setIsReadMoreExpand}>{btnText.more}</span>
                    </div>) :
                <div className={classes.aboutTextContr}>
                    <span>{text}</span>
                    <span className={classes.readMore} onClick={setIsReadMoreExpand}>{btnText.less}</span>
                </div>    
            }
        </div>
    )
}
