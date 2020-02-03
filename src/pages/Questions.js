import React, { useState } from 'react';
import './App.css';
import '../styles/Questions.css';
import '../styles/css';
import 'bootstrap/dist/css/bootstrap.min.css';
import edit from './edit.png';
import img from './image.jpeg';
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
                    <div>
                      <div className="d-flex">
                        <div className="asked-by">Asked by</div>
                        <div className="asked-by-name">Ashmeet Singh</div>
                        <div className="asked-by"> in </div>
                        <div className="asked-by-name">Business Analytics, MBA and France Universities</div>
                      </div>

                      <div className="questions__questions">What are the best universities in France to study business analytics for two years?</div>

                      <div className="questions__answers-about"><img src={edit} height="20px" width="20px"></img> 1 <div style={{height:"5px", width:"5px", borderRadius:"50%", backgroundColor: "#c4c4c4"}}></div> 3 days ago</div>
                    
                      <div className="questions__answers-container">
                        <div className="answers-triangle"></div>
                        <div className="questions__answers">
                          Hey there,Masters in Business Analytics is a perfect blend of Data Science, Information Theory, Business Intelligence, and Computer Science. Its major aim is to change heavy data into actionable intelligence by using different quantitative and statistical methods. Many reputed...  <span style={{color: "#0074d3"}}>(Read More)</span>

                          <div className="user-about-container">
                            <div className="d-flex align-items-center">
                              <img className="user-img" src={img}></img>
                              <div className="questions__user-about">
                                <div style={{fontSize:"17px"}}>username</div> 
                                <div style={{fontSize:"15px"}}>userabout</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div style={{backgroundColor:"#ffffff"}}>
                      <RelatedQues/>
                    </div>
                  </div>            
            </div>
         </div>

    </div>
  );
}

export default Questions;