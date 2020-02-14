import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import HomeSectionOne from '../components/HomeSectionOne';
import HomeSectionTwo from '../components/HomeSectionTwo';
import HomeSectionThree from '../components/HomeSectionThree';
import HomeSectionFour from '../components/HomeSectionFour';
import HomeSectionFive from '../components/HomeSectionFive';

const Home = () => {

    const [tagTopics , setTagTopics] = useState([])
    const [Blogs , setBlogs] = useState([])

      useEffect(() => {
        axios.get('http://localhost/MyApplicationMentor/homepage')
        .then(res => {
            setTagTopics(res.data.findtagtopics)
            setBlogs(res.data.blogs)
            console.log(res)
        })
      }, []);

        return(
          <>
             <HomeSectionOne/>
             <HomeSectionTwo/>
             <HomeSectionThree topics={tagTopics}/>
             <HomeSectionFour/>
             <HomeSectionFive blogs={Blogs}/>
          </>
        ) 
}

export default Home;
