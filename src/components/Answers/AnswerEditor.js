import React, { Component } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../../styles/AnswersEditor.css'
import {Button} from 'reactstrap';
// Testing
import draftToHtml from 'draftjs-to-html';
// import htmlToDraft from 'html-to-draftjs';

// const imagePlugin = createImagePlugin();

class AnswerEditor extends Component {
  state = {
    editorState: EditorState.createEmpty(),
  }


 onEditorStateChange = (editorState)=>{
   this.setState({
     editorState
    });
  };
  render() {
    const { editorState } = this.state;
    return (
      <div style={{backgroundColor: 'white', height: '20rem', marginBottom:'2rem'}}>
        <Editor
          editorState={editorState}
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
          placeholder="Write your answer."
          // plugins={[imagePlugin]}
          onEditorStateChange={this.onEditorStateChange}
          toolbar={{
             image: {
              //  icon: image,
               className: undefined,
               component: undefined,
               popupClassName: undefined,
               urlEnabled: true,
               uploadEnabled: true,
               alignmentEnabled: true,
               uploadCallback: undefined,
               previewImage: false,
               inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
               alt: {
                 present: false,
                 mandatory: false
               },
               defaultSize: {
                 height: 'auto',
                 width: 'auto',
               },
             },
          }}
        />
        {/* <textarea
          disabled
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        /> */}
        <Button onClick={()=>this.props.handlePostAnswer(editorState.getCurrentContent())}>Submit</Button>
      </div>
    );
  }
}

export default AnswerEditor;