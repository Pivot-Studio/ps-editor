import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import MonacoEditor, { monaco } from 'react-monaco-editor';
import { EditorProps, EditorExposeType } from './type';
// eslint-disable-next-line react/display-name
const Editor = forwardRef<EditorExposeType, EditorProps>((props, ref) => {
  const { width = '100%', height = '600px', language, value = '' } = props;
  const EditorRef = useRef<monaco.editor.IStandaloneCodeEditor>();
  const editorDidMount = (
    editor: monaco.editor.IStandaloneCodeEditor,
    monaco
  ) => {
    // console.log('editorDidMount', editor,monaco);
    EditorRef.current = editor;
    editor.focus();
  };
  const getSelectionVal = () => {
    if (!EditorRef.current) {
      return;
    }
    const selection = EditorRef.current.getSelection(); // 获取光标选中的值
    if (!selection) return;
    const model = EditorRef.current.getModel();
    return model?.getValueInRange(selection);
  };
  const onChange = (
    newValue: string,
    e: monaco.editor.IModelContentChangedEvent
  ) => {
    console.log('onChange', newValue, e);
  };
  const options = {
    selectOnLineNumbers: true,
  };

  useImperativeHandle(ref, () => ({
    getSelectionVal,
  }));
  return (
    <MonacoEditor
      width={width}
      height={height}
      language={language}
      theme="vs-dark"
      value={value}
      options={options}
      onChange={onChange}
      editorDidMount={editorDidMount}
    />
  );
});
export default Editor;
