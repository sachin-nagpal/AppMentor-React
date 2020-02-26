import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import HomeSectionOne from '../components/HomeSectionOne';
import HomeSectionTwo from '../components/HomeSectionTwo';
import HomeSectionThree from '../components/HomeSectionThree';
import HomeSectionFour from '../components/HomeSectionFour';
import HomeSectionFive from '../components/HomeSectionFive';

const Home = () => {

    const [tagTopics , setTagTopics] = useState([])
    const [AllTopics,setAllTopics] = useState([])
    const [Blogs , setBlogs] = useState([])
    const [Questions , setQuestions] = useState([])

    useEffect(() => {
      axios.get(`${process.env.REACT_APP_API_HOST_URL}/homepage`)
      .then(res => {
          setTagTopics(res.data.findtagtopics)
          setBlogs(res.data.blogs)
          setQuestions(res.data.allquestions)
          console.log(res)
      })

      axios.get(`${process.env.REACT_APP_API_HOST_URL}/alltags`)
      .then(res => {
          setAllTopics(res.data.alltags)
      })     
    }, []);

        return(
          <>
             <HomeSectionOne topics={tagTopics} allTopics={AllTopics}/>
             <HomeSectionTwo/>
             <HomeSectionThree topics={tagTopics}/>
             <HomeSectionFour questions={Questions}/>
             <HomeSectionFive blogs={Blogs}/>
          </>
        ) 
}

export default Home;