import React,{useState,useContext} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input,Label } from 'reactstrap';
import Select from 'react-select';
import { createUseStyles } from 'react-jss';
//Context
import { useAuth } from "../../context/auth";

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];
  
const useStyles = createUseStyles({
    modalMain:{
        maxWidth: '43.75rem'
    }
})
const AddQuestionPop = (props) => {
    const { userName } = useAuth();
    const classes = useStyles();
    const closeBtn = <button className="close" onClick={props.toggle}>&times;</button>;
    const [selectedOption,sertSelectedOption] = useState(null);
    const [questionTitle,setQuestionTitle] = useState('');
    const handleChange = selectedOption => {
        sertSelectedOption(selectedOption)
      };
      const handleAddQuestion = () =>{
          alert("addeinf")
      }
      const handleTextareaChange =(e)=>{
        alert('oo')
        console.log(e);
        
      }
    
      return (
      <div>
        {/* <Button color="danger" onClick={toggle}>{buttonLabel}</Button> */}
        <Modal isOpen={props.isAddingQuestion} toggle={props.toggle} className={classes.modalMain}>
          <ModalHeader toggle={props.toggle} close={closeBtn}>Add Question</ModalHeader>
            <h1>{userName}</h1>
          <ModalBody>
          <FormGroup>
            <Input type="textarea" name="text" className="addQuestionTextArea" rows="8" placeholder='Select your Question with "What","How","Why,etc"' onChange={()=>handleTextareaChange(this)}/>
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
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={props.toggle}>Cancel</Button>
            <Button color="primary" onClick={props.toggle} onClick={handleAddQuestion}>Add Question</Button>{' '}
          </ModalFooter>
        </Modal>
      </div>)
}

export default AddQuestionPop;