import React, { useRef } from 'react';
import Editor from './components/Editor';
import { EditorExposeType } from './components/Editor/type';
function App() {
  const EditorRef = useRef<EditorExposeType>(null);
  const editorOption = {
    language: 'zhanjingxi',
  };
  return (
    <>
      <Editor ref={EditorRef} {...editorOption} />
      <button
        onClick={() => {
          console.log(EditorRef.current?.getSelectionVal());
        }}
      >
        获取选中值
      </button>
    </>
  );
}

export default App;
