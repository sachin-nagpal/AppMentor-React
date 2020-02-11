import React,{useState,useContext,useEffect,useRef} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input,Label,Badge} from 'reactstrap';
import Select from 'react-select';
import { createUseStyles } from 'react-jss';
import axios from 'axios';
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
        setSelectedOption(selectedOption)
      };
     
      const handleAddQuestion = () =>{
        const ids = selectedOption.map(id=>id.id);        
          props.toggle();
          axios.post('http://localhost/MyApplicationMentor/addquestion',{
            unique: authTokens,
            title: textAreaval,
            topics: ids
          })
              .then(function (response) {
                // handle success
                setIsReRender(!isReRender);
                console.log(response);
              })
              .catch(function (error) {
                // handle error
                console.log(error);
              })
              .finally(function () {
                // always executed
              });
      }
      const handleTextareaChange =(evt)=>{
        // let val = evt.target.val
        setTextAreaVal(evt.target.value);
      }
      const handleBadgeChanges = (data)=>{
        setSelectedOption([...selectedOption,{value: data.value,label: data.label, id: data.id}])
      }
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
        <Badges data={{value:topic.slug, label:topic.name, id:topic.id}} handleBadgeChanges={handleBadgeChanges}/>
      ))}
      </div>
        {/* <Button onClick={()=>setSelectedOption([...selectedOption,{value: 'test',label: 'label', id: '111'}])}/> */}
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={props.toggle}>Cancel</Button>
            <Button color="primary" onClick={handleAddQuestion}>Add Question</Button>{' '}
          </ModalFooter>
        </Modal>
      </div>)
}

const Badges = (props)=>{
  return <Badge onClick={()=>props.handleBadgeChanges(props.data)} color="primary">{props.data.label}</Badge>
}
export default AddQuestionPop;