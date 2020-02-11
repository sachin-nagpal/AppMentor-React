import React,{useState} from 'react';
import '../styles/UpvoteBtn.css'

export default function UpvoteBtn({upvotes,handleClick,clickedCount}) {
    const [isclicked,setIsClicked] = useState(false);
    // const [clickedCount,setClickedCount] = useState(upvotes);
    const handleUpvote = () => {
        alert('ff');
        setIsClicked(!isclicked)
    }
    
    return (
            <div className="upvote-triangle" onClick={handleClick}>
                <div style={{color:"#959595", marginLeft:"20px"}}>{clickedCount}</div>
            </div>

    )
}
