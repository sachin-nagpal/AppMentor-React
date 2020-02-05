import React, { useState, useEffect } from 'react';
// import './App.css';
import SingleQuestion from '../components/SingleQuestion';
import '../styles/Questions.css';
// import '../styles/css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

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

const Questions = (props) => {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [splitButtonOpen, setSplitButtonOpen] = useState(false);

  const toggleDropDown = () => setDropdownOpen(!dropdownOpen);

  const toggleSplit = () => setSplitButtonOpen(!splitButtonOpen);

  const [quesResponse, setResponse] = useState([]);
  const [relatedQuestions,setRelatedQuestions] = useState([]);

  useEffect(() => {
        axios.get('http://localhost/MyApplicationMentor/getallquestion')
          .then(function (response) {
            // handle success
            console.log(response.data);
            setResponse(response.data.findallquestions);
            setRelatedQuestions(response.data.relatedquestions);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .finally(function () {
            // always executed
          });
  }, [])

  return (
    <div>

        <div className="questions-header">
           <div className="w-50 m-auto py-3">
            <InputGroup>
              <InputGroupButtonDropdown addonType="append" isOpen={dropdownOpen} toggle={toggleDropDown}>
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
              </InputGroupButtonDropdown>
              <Input />
            </InputGroup>
           </div>
        </div>
      
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-8">
                  {quesResponse.map(quest=>(
                    <SingleQuestion quesData={quest}/>

                  ))}
                </div>

                <div className="col-md-4">
                    <div style={{backgroundColor:"#ffffff"}}>
                      <RelatedQues relatedQ = {quesResponse.relatedquestions}/>
                    </div>
                  </div>            
            </div>
         </div>

    </div>
  );
}

export default Questions;