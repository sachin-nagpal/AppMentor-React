import React from 'react';
import EditorJs from 'react-editor-js';
// import Embed from '@editorjs/embed'
// import Table from '@editorjs/table'
// import Paragraph from '@editorjs/paragraph'
// import List from '@editorjs/list'
// import Warning from '@editorjs/warning'
// import LinkTool from '@editorjs/link'
// import Image from '@editorjs/image'
// import Raw from '@editorjs/raw'
// import Header from '@editorjs/header'
// import Quote from '@editorjs/quote'
// import Marker from '@editorjs/marker'
// import InlineCode from '@editorjs/inline-code'
// import SimpleImage from '@editorjs/simple-image'
 
//  const EDITOR_JS_TOOLS = {
//   embed: Embed,
//   table: Table,
//   paragraph: Paragraph,
//   list: List,
//   warning: Warning,
//   linkTool: LinkTool,
//   image: Image,
//   raw: Raw,
//   header: Header,
//   quote: Quote,
//   marker: Marker,
//   inlineCode: InlineCode,
//   simpleImage: SimpleImage
// }

class MyEditor extends React.Component {

  render() {
    var data = 'dagta';

    return (
        <div>
            <EditorJs data={data} />
        </div>
    );
  }
}

export default MyEditor;
