import React, { useState, useEffect,useContext } from 'react';
import axios from 'axios';
import { useAuth } from "../context/auth";
import QuestionSearch from '../components/Questions/QuestionSearch';
import BlogCard from '../components/BlogsCard';
import BlogOfDay from '../components/BlogOfTheDay';
import {Link} from 'react-router-dom';
import AddQuestionPop  from '../components/Questions/AddQuestionPop';


const Blogs = () => {

  const [Blogs , setBlogs] = useState([])
  const [BlogOfTheDay , setBlogOfTheDay] = useState([])
  const [quesResponse, setResponse] = useState([]);
  const [isAddingQuestion, setIsAddingQuestion] = useState(false);
  const [isReload,setIsReload] = useState(false);
  const [tagTopics,setTagTopics] = useState([]);
  const [findalltopics,setFindalltopics] = useState([]);
  const { authTokens } = useAuth();

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_HOST_URL}/homepage`)
    .then(res => {
      setTagTopics(res.data.findtagtopics)
    })

    axios.get(`${process.env.REACT_APP_API_HOST_URL}/allblogs`)
    .then(res => {
        setBlogs(res.data.blogs)
        setBlogOfTheDay(res.data.blogofday)
    })

    axios.get(`${process.env.REACT_APP_API_HOST_URL}/alltags`)
    .then(res => {
      setTagTopics(res.data.alltags);
      setFindalltopics(res.data.alltags);
    })
  }, []);

  function handleAddingQuestion(){
      setIsAddingQuestion(!isAddingQuestion)

      // setTagTopics(props.topics)
      // setTagTopics(res.data.topics)

      // setFindalltopics(props.topics);
    }

  return (
    <div style={{backgroundColor:"#f5f5f5"}}>
          <div style={{background: "#416aa6", padding: '1rem 25rem'}}>
             <QuestionSearch handleAddingQuestion={handleAddingQuestion} isAddingQuestion={isAddingQuestion}/>
          </div>
          {authTokens && <AddQuestionPop isAddingQuestion={isAddingQuestion} toggle={handleAddingQuestion} findalltopics={findalltopics} tagTopics={tagTopics} setIsReload={setIsReload} isReload={isReload}/>}

          <div className="container">
              <div className="row py-4">
                      {Blogs.map((blog, i)=>(
                        blog.featured === 0 ? 

                        <div className="col-md-4">
                            <Link to={"/blogs/"+ blog.slug} className="link">
                              <BlogCard blog={blog} />
                            </Link>
                        </div>
                      :
                          <div className="col-md-8">
                              <div>
                                <Link to={"/blogs/"+ blog.slug} className="link">
                                  <BlogOfDay blog={blog} />
                                </Link>
                              </div>
                          </div>            
                      ))}
                </div>
            </div>         
    </div>
  );
}

export default Blogs;

