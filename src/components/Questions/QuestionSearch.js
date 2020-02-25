import React,{useState,useRef} from 'react';
import DivWithArrow from '../HOC/DivWithArrow';
import {InputGroup, Input} from 'reactstrap';
import { motion } from "framer-motion";
import {createUseStyles} from 'react-jss';
import SearchTags from './SearchTags';
import uuid from 'uuid';
import { avoidUnnecessarySearch } from '../../helpers/CancelRequest';
import {Link} from 'react-router-dom';

import OuterClickCheck from '../../hooks/OuterClickCheck';

//user context
import { useAuth } from "../../context/auth";

//Images 
import SearchIcon from '../../images/searchIcon.svg';

const useStyles= createUseStyles({
    modalContainer: {
        maxWidth: '60rem'
    },

    inputSearch:{
        border:'none'
    },

    questonSearchContainer:{
        position: 'relative',
        width: '100%'
    },
    questionSearchDrop:{
        position: 'absolute',
        width: '100%',
        zIndex: '10'
    },
    searchValContainer:{
        height: '3rem',
        display: 'flex',
        alignItems: 'center',
        // marginBottom: '0.9375rem',
        width: '100%',
        background: '#f7f7f7',
        padding: '0.625rem 0.9375rem',
        borderBottom: '1px solid #696969',
        '& img':{
            width: '1rem'
        },
    },
    allContent:{
        padding: '0.625rem 0.9375rem',
    },  
    relatedQuestionsTitle:{
        // padding: '0.625rem 0.9375rem'
        marginBottom: '1rem'
    },  
    searchFixed: {
        marginLeft : '0.5rem',
        fontSize: '1.125rem',
        fontWeight: '500',
        color: '#6f6f6f',
        fontFamily: 'Roboto',
    },
    searchingTxt: {
        fontWeight: '500',
        marginLeft : '0.5rem',
        color: '#406eb3',
        fontFamily: 'Roboto',
        fontSize: '1.125rem',   
    },
    searchIconContainer:{
        display: 'flex'
    },
    btnAddQues:{
        border: 'none',
        paddingLeft: '0',
        color: '#406eb3',
        background: '#ffffff'
    },
    divContainer:{
        boxShadow: '0 3px 8px 1px rgba(149, 149, 149, 0.75)',
        // zIndex: 12345
    }
})
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
            },
        }
    },
  }

export default function QuestionSearch({handleAddingQuestion}) {
    const classes = useStyles();
    const [searchVal,setSearchVal] = useState('');
    const [isSearchOpen,setIsSearchOpen] = useState(false);
    const [searchedData,setSearchedData] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const { authTokens } = useAuth();
    const innerRef = useRef(null);

    const handleSearchVal = (val) => {
        setSearchVal(val)
      }
      
    OuterClickCheck(
        e => setIsSearchOpen(false),
        innerRef
      );
    const handleSearchOpen = (val) =>{
        setIsSearchOpen(val);
    }
   const onChangeHandler = async e => {
       search(e.target.value);
       handleChange(e.target.value)
      };
    const handleChange = async (ev) =>{
        handleSearchVal(ev);
      }
    const search = async searchVal => {
        setIsLoading(true);
        const res = await avoidUnnecessarySearch(
            `${process.env.REACT_APP_API_HOST_URL}/search/${searchVal}`
          );
        // const response = await AxiosRequest().get(`${process.env.REACT_APP_API_HOST_URL}/search/${searchVal}`);
        const data = await res;
        console.log(data)
        if(data){
            setSearchedData(data.findallquestions);
        }
        else{
            setSearchedData([]);
        }
        setIsLoading(false);
      };
      function returnDisplay (){
        if(isSearchOpen){
            return 'block'
        }
        return 'none'
      }
    return (
        <div className={classes.questonSearchContainer} ref={innerRef}>
            <InputGroup>
              <Input placeholder="Search Questions" value={searchVal} onChange={onChangeHandler} onFocus={()=>handleSearchOpen(true)} className={classes.inputSearch}/>
            </InputGroup>
            <div className={classes.questionSearchDrop}>
                <motion.div
                    initial={{ opacity: "0" }}
                    animate={isSearchOpen ? "open" : "closed"}
                    variants={variants}>
                    <div className={classes.divContainer}> 
                    <DivWithArrow styles={{
                        borderCol: '#d7d7d7',
                        bgCol: '#ffffff',
                        minHeight: '9.375rem',
                        arrowPosFromLeft: '5%',
                        arrowSize: '0.625rem',
                        heigth: '20rem',
                        marginTop: '0.9375rem',
                        borderRadius:'5px',
                        cursor: 'default',
                        padding: '0',
                        triangleCol: '#ffffff',
                        // zIndex: '1234',
                    }}>
                    <div className={classes.searchValContainer}>
                        <div className={classes.searchIconContainer}><img src={SearchIcon} alt="SearchIcon"/><span className={classes.searchFixed}>Search: </span><span className={classes.searchingTxt}>{searchVal}</span></div>
                    </div>
                    <div className={classes.allContent}>
                            <div className={classes.relatedQuestionsTitle}>
                                {searchedData.length ? searchedData.map(data=>(<SearchTags key={uuid()} data={data}/>)) : ''}
                            </div> 
                        {authTokens ?
                            <div><button onClick={handleAddingQuestion} className={classes.btnAddQues}>+ Add Questions</button>{' '}</div>
                            :
                            <div><Link to='/signup-login'><button className={classes.btnAddQues}>+ Add Questions</button></Link></div>
                            }
                    </div>    
                </DivWithArrow>
                </div>
                </motion.div>
            </div>
        </div>
    )
}
