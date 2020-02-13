import React,{useState,useContext,useEffect,useRef} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input,Label,Badge} from 'reactstrap';
import Select from 'react-select';
import { createUseStyles } from 'react-jss';
import AxiosRequest from '../../helpers/AxiosRequests';
import { Tooltip } from 'reactstrap';

//Context
import { useAuth } from "../../context/auth";
  
const useStyles = createUseStyles({
    modalMain:{
        maxWidth: '43.75rem'
    }
})
const AddQuestionPop = (props) => {
    const { userName,authTokens } = useAuth();
    const classes = useStyles();
    const closeBtn = <button className="close" onClick={props.toggle}>&times;</button>;
    const [selectedOption,setSelectedOption] = useState([]);
    const [questionTitle,setQuestionTitle] = useState('');
    const [textAreaval,setTextAreaVal] = React.useState('');
    const [isReRender,setIsReRender] = useState(false);
    // const [options,setOptions] = useState([]);
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
            })();
      }
    // Question Text
      const handleTextareaChange =(evt)=>{
        setTextAreaVal(evt.target.value);
      }
      const handleBadgeChanges = (data)=>{
        if(selectedOption){
          if(selectedOption && selectedOption.length > 0 ){
            setIsDisabled(false);
          }
          else{
            setIsDisabled(true);
          }
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
      <div>
        {/* <Button color="danger" onClick={toggle}>{buttonLabel}</Button> */}
        <Modal isOpen={props.isAddingQuestion} toggle={props.toggle} className={classes.modalMain}>
          <ModalHeader toggle={props.toggle} close={closeBtn}>Add Question</ModalHeader>
            <h1>{userName}</h1>
          <ModalBody>
          <FormGroup>
            <Input type="textarea" value={textAreaval} name="text" className="addQuestionTextArea" rows="8" placeholder='Select your Question with "What","How","Why,etc"' onChange={handleTextareaChange}/>
        </FormGroup>
        <FormGroup>
        <Label for="exampleSelectMulti">Tabs</Label>
            <Select
            value={selectedOption}
            onChange={handleChange}
            options={options}
            isMulti={true}
            />
      </FormGroup>
      {/* onClick={()=>setSelectedOption([...selectedOption,{value: this.value,label: this.name, id: this.id}])} */}
      <div>
      {props.tagTopics.map(topic=>(
        <span id={topic.id}>
        <Badges data={{value:topic.slug, label:topic.name, id:topic.id}} handleBadgeChanges={handleBadgeChanges} />
        </span>
      ))}
      </div>
        {/* <Button onClick={()=>setSelectedOption([...selectedOption,{value: 'test',label: 'label', id: '111'}])}/> */}
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={props.toggle}>Cancel</Button>
            <Button color="primary" onClick={handleAddQuestion} disabled={isDisbled} id="addBtn">
              Add Question
            </Button>{' '}
          </ModalFooter>
        </Modal>
      </div>)
}

const Badges = (props)=>{
  return <Badge onClick={()=>props.handleBadgeChanges(props.data)} color="primary">{props.data.label}</Badge>
}
export default AddQuestionPop;