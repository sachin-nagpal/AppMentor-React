import React,{useState , useEffect} from 'react';
import axios from 'axios';
import QuestionSearch from '../components/Questions/QuestionSearch';
import CarouselBlogs from '../components/CarouselBlogs';
import BlogCard from '../components/BlogsCard';
import {Link} from 'react-router-dom';


const Blogs = () => {

  const [Blogs , setBlogs] = useState([])

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_HOST_URL}/homepage`)
    .then(res => {
        setBlogs(res.data.blogs)
        console.log(res)
    })
  }, []);

  return (
    <div style={{backgroundColor:"#f5f5f5"}}>
          <div style={{background: "#416aa6", padding: '1rem 25rem'}}>
              <QuestionSearch/>
          </div>

          <div className="container">
              <div className="row py-4">
                  {Blogs.map((blog)=>(
                    <div className="col-md-4">
                        <Link to={"/blogs/"+ blog.slug} className="link">
                          <BlogCard blog={blog} />
                        </Link>
                    </div>
                  ))}
              </div>
          </div>
    </div>
  );
}

export default Blogs;

