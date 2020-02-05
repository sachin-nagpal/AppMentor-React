import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AllQuestions = () => {
    const [allQuestions, setAllQuestions] = useState();
    
    useEffect(() => {
        async function fetchData() {
             axios.get(`localhost:8000/api/allquestions`)
            .then(res => {
                const qus = res.data;
                setAllQuestions(qus);
            })
        }
        
        fetchData(); 
    },[]);
    
    return (
        <div>
            <h1>All AllQuestions</h1>
        </div>
    )
}

AllQuestions.defaultProps = {
    
}

export default AllQuestions;