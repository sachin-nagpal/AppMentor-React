import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyle = createUseStyles({
    badgeContainer: style => ({
        
    }),
    badge: style => ({
        
    })
})
function Badge({style}) {
    const classes = useStyle(style);
    return (
        <div className={classes.badgeContainer}>
            <span className={classes.badge}>hello</span>
        </div>
    );
}

export default Badge;