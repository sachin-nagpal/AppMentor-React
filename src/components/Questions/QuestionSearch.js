import React,{useState} from 'react';
import DivWithArrow from '../HOC/DivWithArrow';
import {InputGroup, Input} from 'reactstrap';
import { motion } from "framer-motion";

const variants = {
    open: {
        opacity: 1,
        y: 0,
        transition: {
            y: {
                stiffness: 1000,
                velocity: -100
            }
        }
    },
    closed: {
        opacity: 0,
        y: 50,
        transition: {
            y: {
                stiffness: 1000,
                velocity: -100
            }
        }
    },
  }


export default function QuestionSearch() {
    const [searchVal,setSearchVal] = useState('');
    const [isSearchOpen,setIsSearchOpen] = useState(false);
    const handleSearchOpen = (val) =>{
        setIsSearchOpen(val);
    }
    const handleSearchInputChange = (event) => {
        setSearchVal(event.target.value);
        if(searchVal.length > 2){
            handleSearchOpen(true);
        }else{
            handleSearchOpen(false);
        }
    }
    const handleKeyUp = () =>{
       
    }
    return (
        <div>
            <InputGroup>
              <Input placeholder="Search Questions" value={searchVal} onChange={handleSearchInputChange} onKeyUp={handleKeyUp}/>
            </InputGroup>
            <motion.div
                initial={{ opacity: "0" }}
                animate={isSearchOpen ? "open" : "closed"}
                variants={variants}>
                <DivWithArrow styles={{
                    borderCol: '#d7d7d7',
                    bgCol: '#f8f8f8',
                    minHeight: '9.375rem',
                    arrowPosFromLeft: '10%',
                    arrowSize: '0.625rem',
                    heigth: '11.25rem',
                    marginTop: '0.9375rem',
                    borderRadius:'5px',
                    cursor: 'default'
                }}>
                {searchVal}
            </DivWithArrow>
            </motion.div>
        </div>
    )
}
