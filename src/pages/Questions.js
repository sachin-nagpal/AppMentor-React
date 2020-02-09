import React, { useState, useEffect,useContext } from 'react';
import SingleQuestion from '../components/SingleQuestion';
import '../styles/Questions.css';
import axios from 'axios';
import uuid from 'uuid';

//user context
import {UserLoginState} from '../context/UserLoginState';


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

  const {userInfo} = useContext(UserLoginState);

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
        <div>Add Questions</div>
        </div>
      
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