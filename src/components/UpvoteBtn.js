import React,{useState} from 'react';
import '../styles/UpvoteBtn.css'

export default function UpvoteBtn({upvotes,handleUpvote}) {
    return (
            <div className="upvote-triangle" onClick={handleUpvote}>
                <div style={{color:"#959595", marginLeft:"20px"}}>{upvotes}</div>
            </div>

    )
}
