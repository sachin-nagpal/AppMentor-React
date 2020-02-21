import React, { Component } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../../styles/AnswersEditor.css'
import {Button} from 'reactstrap';
import BoldIcon from '../../images/B.png';
// Testing
import draftToHtml from 'draftjs-to-html';
// import htmlToDraft from 'html-to-draftjs';

const styleMap = {
  'P':{
    backgroundColor: 'red'
  }
}
// const imagePlugin = createImagePlugin();
function uploadImageCallBack(file) {
  return new Promise(
    (resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://api.imgur.com/3/image');
      xhr.setRequestHeader('Authorization', 'Client-ID XXXXX');
      const data = new FormData();
      data.append('image', file);
      xhr.send(data);
      xhr.addEventListener('load', () => {
        const response = JSON.parse(xhr.responseText);
        resolve(response);
      });
      xhr.addEventListener('error', () => {
        const error = JSON.parse(xhr.responseText);
        reject(error);
      });
    }
  );
}

class AnswerEditor extends Component {
 onEditorStateChange = (editorState)=>{
  this.props.handleEditorState(editorState)
  };
  render() {
    return (
      <div style={{marginBottom:'0'}}>
        <Editor
          editorState={this.props.editorState}
          onEditorStateChange={this.onEditorStateChange}
          placeholder="Write your answer."
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          toolbarClassName="demo-toolbar-custom"
          customStyleMap={styleMap}
          toolbar={{
            options: ['inline', 'list','emoji','image'],
            inline: {
              inDropdown: false,
              className: undefined,
              component: undefined,
              dropdownClassName: undefined,
              options: ['bold', 'italic'],
              bold: { className: 'bold' },
              italic: {className: 'italic'}
            },
            list: {
              inDropdown: false,
              className: undefined,
              component: undefined,
              dropdownClassName: undefined,
              options: ['unordered','ordered'],
              unordered: {className: 'unordered'},
              ordered: {className: 'ordered'}
              // unordered: { icon: unordered, className: undefined },
              // ordered: { icon: ordered, className: undefined },
              // indent: { icon: indent, className: undefined },
              // outdent: { icon: outdent, className: undefined },
            },
            emoji:{
              className: 'emoji',
            },
            textAlign: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: true },
            image: { uploadCallback: uploadImageCallBack, alt: { present: true, mandatory: true },className: 'image' },
          }}
        />
        {/* <textarea
          disabled
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        /> */}
      </div>
    );
  }
}

export default AnswerEditor;