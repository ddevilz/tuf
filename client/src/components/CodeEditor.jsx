import { Editor } from "@monaco-editor/react";
import { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import Container from "./Container";
import { CODE_SNIPPETS } from "../constants";

const CodeEditor = ({ name, value, onChange, language }) => {
  const editorRef = useRef(null);
  const [editorValue, setEditorValue] = useState(value);

  useEffect(() => {
    setEditorValue(CODE_SNIPPETS[language] || `// write some ${language} code`);
  }, [language]);

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const handleEditorChange = (newValue) => {
    setEditorValue(newValue);
    onChange && onChange({ target: { name, value: newValue } });
  };

  return (
    <>
      <Container>
        <Editor
          width="50vw"
          height="60vh"
          theme="vs-light"
          language={language}
          defaultValue={
            CODE_SNIPPETS[language] || `// write some ${language} code`
          }
          onMount={onMount}
          value={editorValue}
          onChange={handleEditorChange}
        />
      </Container>
    </>
  );
};

CodeEditor.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
};

export default CodeEditor;
