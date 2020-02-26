import React from 'react';
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({

})
export default function Comment() {
    const classes = useStyles();
    return (
        <div>
            <textarea placeholder="Add Comment"/>
            <button>Add Comment</button>
        </div>
    )
}
