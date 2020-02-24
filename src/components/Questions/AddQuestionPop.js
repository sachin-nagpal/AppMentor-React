import React,{useState,useContext,useEffect,useRef} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input,Label,Badge} from 'reactstrap';
import Select from 'react-select';
import { createUseStyles } from 'react-jss';
import AxiosRequest from '../../helpers/AxiosRequests';
import { Tooltip } from 'reactstrap';
import uuid from 'uuid';
import '../../styles/ModalCustom.css'
//Context
import { useAuth } from "../../context/auth";
import Tag from '../Tag';
  
const useStyles = createUseStyles({
    heading:{
      color: '#295caa',
      width: '100%',
      padding: '0px',
      fontSize: '1.5rem'
    },
    modalMain:{
        maxWidth: '43.75rem',
        borderRadius: '40px'
    },
    userImg:{
      borderRadius: '50%'
    },
    userName:{
      color: "#444444",
      fontSize:"1.3rem",
      paddingLeft: '0.5rem',
      marginBottom: '0rem'
    },
    asked:{
      color: '#7c7c7c',
      letterSpacing: '0.5px',
      letterSpacing: '1px'
    },
    askedBar:{
      backgroundColor: '#f0f0f0 !important'
    },
    userInfoCont:{
      borderTop: '2px solid #f0f0f0',
      background: '#f0f0f0',
      display: 'flex',
      alignItems: 'center',
      padding: '0.4rem 0rem 0.4rem 2rem',
      display: 'flex',
      '& img': {
        width: '2.5rem'
      }
    },

    suggestedTags: {
      color: '#505050',
      fontFamily: 'Roboto',
      fontWeight: '600'
    },
    placeholder:{
      color: '#b3b3b3',
      fontFamily: 'Roboto',
      borderRadius: '40px'
    },
    submitBtn:{
      background: '#007fbd !important',
      color: '#fefefe !important',
      fontWeight:'500'
    }
})

const AddQuestionPop = (props, {colors}) => {
    const { userName,authTokens,userImg } = useAuth();
    const classes = useStyles();
    const closeBtn = <button className="close" onClick={props.toggle}>&times;</button>;
    const [selectedOption,setSelectedOption] = useState([]);
    const [questionTitle,setQuestionTitle] = useState('');
    const [textAreaval,setTextAreaVal] = React.useState('');
    const [isReRender,setIsReRender] = useState(false);
    // const [options,setOptions] = useState([]);
    useEffect(() => {
      // setTextAreaVal(props.searchVal)
      console.log(props.searchVal);
      
    }, [])
    const optionVal = props.findalltopics.map(topic=>{
        return {value: topic.slug,label: topic.name, id: topic.id}
      })
    
    const options = optionVal;
    const handleChange = selectedOption => {
      if(selectedOption && selectedOption.length > 0 ){
        setIsDisabled(false);
      }
      else{
        setIsDisabled(true);
      }
        setSelectedOption(selectedOption)
      };
     
      const handleAddQuestion = () =>{
        const ids = selectedOption.map(id=>id.id);        
          props.toggle();
            (async function () {
              const response = await AxiosRequest().post(`${process.env.REACT_APP_API_HOST_URL}/addquestion`,{unique: authTokens,
                title: textAreaval,
                topics: ids});
                setIsReRender(!isReRender);
                console.log(response);
                props.setIsReload(!props.isReload);
            })();
      }
    // Question Text
      const handleTextareaChange =(evt)=>{
        setTextAreaVal(evt.target.value);
      }
      const handleBadgeChanges = (data)=>{
        console.log("badge Change")
        if(selectedOption){
          // if(selectedOption.length > 0 ){
          //   setIsDisabled(false);
          // }
          // else{
          //   setIsDisabled(true);
          // }
        const allSelectedVals = selectedOption.map(selected => {
          return selected.value;
        })
      
        if(allSelectedVals.includes(data.value)){
          return;
        }
        setSelectedOption([...selectedOption,{value: data.value,label: data.label, id: data.id}])
      }
      else{
          setSelectedOption([...[],{value: data.value,label: data.label, id: data.id}])
      }
        
        console.log(selectedOption);
      }
      const [isDisbled,setIsDisabled] = useState(true)      
      return (
      <div className={classes.abc}>
        {/* <Button color="danger" onClick={toggle}>{buttonLabel}</Button> */}
        <Modal isOpen={props.isAddingQuestion} toggle={props.toggle} className={classes.modalMain}>
          <div>
          <ModalHeader toggle={props.toggle} close={closeBtn} className={classes.heading}>
            Add Question
          </ModalHeader>
          <div className="askedBar">
            <div className={classes.userInfoCont}>
              <img src={userImg} className={classes.userImg} alt='user Image'/>
              <h1 className={classes.userName}>{userName} <span className={classes.asked}>asked</span></h1>
            </div>
          </div>
          <ModalBody>
          <FormGroup className={classes.placeholder}>
            <Input type="textarea" value={textAreaval} name="text" rows="8" placeholder='Start your Question with “What”, “How”, “Why”, etc."' onChange={handleTextareaChange}/>
        </FormGroup>
        <FormGroup>
        <Label for="exampleSelectMulti" className={classes.suggestedTags}>Tags</Label>
            <Select
            value={selectedOption}
            onChange={handleChange}
            options={options}
            isMulti={true}
            />
      </FormGroup>
      {/* onClick={()=>setSelectedOption([...selectedOption,{value: this.value,label: this.name, id: this.id}])} */}
      <div>
        <div className={classes.suggestedTags}>Suggested Tags</div>
      {props.tagTopics.map(topic=>(
        <span id={topic.id} key={uuid()}>
            {/* <Tag key={uuid()} style={{color: colors.tagColor[Math.floor(Math.random() * colors.tagColor.length)] , bgColor: colors.tagBgColor[Math.floor(Math.random() * colors.tagBgColor.length)]}} data={{value:topic.slug, label:topic.name, id:topic.id}}/> */}
            <Badges data={{value:topic.slug, label:topic.name, id:topic.id}} handleBadgeChanges={handleBadgeChanges} />
        </span>
      ))}
      </div>
        {/* <Button onClick={()=>setSelectedOption([...selectedOption,{value: 'test',label: 'label', id: '111'}])}/> */}
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={props.toggle}>Cancel</Button>
            <Button color="primary" onClick={handleAddQuestion} disabled={isDisbled} id="addBtn" className={classes.submitBtn}>
              Add Question
            </Button>{' '}
          </ModalFooter>
          </div>
        </Modal>
      </div>)
}

const Badges = (props)=>{
  return <Badge onClick={()=>props.handleBadgeChanges(props.data)} color="primary">{props.data.label}</Badge>
}

AddQuestionPop.defaultProps={
  colors : {
      tagColor : ['#4c70ab', '#ac5d1c;' , '#a64141', '#2e9557'],
      tagBgColor : ['#eaf8ff', '#fff5ea' , '#fff4f4', '#eafff2']
  }
}
export default AddQuestionPop;