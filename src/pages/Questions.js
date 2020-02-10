import React, { useState, useEffect,useContext } from 'react';
import SingleQuestion from '../components/SingleQuestion';
import '../styles/Questions.css';
import {Link} from 'react-router-dom'
import axios from 'axios';
import uuid from 'uuid';

//user context
import { useAuth } from "../context/auth";


import RelatedQues from '../components/RelatedQues';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  Input,
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
 } from 'reactstrap';
import  AddQuestionPop  from '../components/Questions/AddQuestionPop';

const Questions = (props) => {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [splitButtonOpen, setSplitButtonOpen] = useState(false);

  const toggleDropDown = () => setDropdownOpen(!dropdownOpen);

  const toggleSplit = () => setSplitButtonOpen(!splitButtonOpen);

  const [quesResponse, setResponse] = useState([]);
  const [relatedQuestions,setRelatedQuestions] = useState([]);
  const [tagTopics,setTagTopics] = useState([]);
  const [findalltopics,setFindalltopics] = useState([]);

  const [isAddingQuestion, setIsAddingQuestion] = useState(false);

  const { authTokens } = useAuth();

  function handleAddingQuestion(){
    setIsAddingQuestion(!isAddingQuestion)
  }

  useEffect(() => {
    let isCancelled = false;
        axios.get('http://localhost/MyApplicationMentor/getallquestion')
          .then(function (response) {
            // handle success
            if (!isCancelled) {
            console.log(response.data);
            setResponse(response.data.findallquestions);
            setRelatedQuestions(response.data.relatedquestions);
            setTagTopics(response.data.findtagtopics);
            setFindalltopics(response.data.findalltopics);
            }
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .finally(function () {
            // always executed
          });

    return () => {
      isCancelled = true;
    }; 
  }, [])

  // {isCancelled && <h1>Waiting...</h1>}
  return (
    <div>
        <div className="questions-header">
           <div className="w-50 m-auto py-3">
            <InputGroup>
              {/* <InputGroupButtonDropdown addonType="append" isOpen={dropdownOpen} toggle={toggleDropDown}>
                <DropdownToggle caret className="search-dropdown">
                  <div className="filter-text">Filter</div>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem header>Header</DropdownItem>
                  <DropdownItem disabled>Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
              </InputGroupButtonDropdown> */}
              <Input placeholder="Search Questions"/>
            </InputGroup>
           </div>
           {authTokens ?
          <div><Button outline color="primary" onClick={handleAddingQuestion}>Add Questions</Button>{' '}</div>
          :
          <div><Link to='/signup-login'><Button outline color="primary">Login</Button>{' '}</Link></div>
        }
        </div>
        {authTokens && <AddQuestionPop isAddingQuestion={isAddingQuestion} toggle={handleAddingQuestion} findalltopics={findalltopics} tagTopics={tagTopics}/>}
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-8">
                  {quesResponse.map(quest=>(
                    <SingleQuestion quesData={quest} key={uuid()}/>

                  ))}
                </div>

                <div className="col-md-4">
                    <div style={{backgroundColor:"#ffffff"}}>
                      {/* <RelatedQues relatedQ = {relatedQuestions}/> */}
                    </div>
                  </div>            
            </div>
         </div>

    </div>
  );
}

export default Questions;