import React,{useState} from 'react';
import '../styles/UpvoteBtn.css'

export default function UpvoteBtn({upvotes,handleClick,clickedCount}) {
    // const [clicked,isClicked] = useState(false);
    // const [clickedCount,setClickedCount] = useState(upvotes);

    
    return (
            <div className="upvote-triangle" onClick={handleClick}>
                <div style={{color:"#959595", marginLeft:"20px"}}>{clickedCount}</div>
            </div>
    )
}
