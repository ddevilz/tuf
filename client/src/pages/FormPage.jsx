import { useState } from "react";
import Container from "../components/Container";
import { Input, Form, Button } from "antd";
import CodeEditor from "../components/CodeEditor";
import LanguageSelector from "../components/LanguageSelector";

const FormPage = () => {
  const [formInput, setFormInput] = useState({
    username: "",
    source_code: "",
    stdin: "",
    language: "",
    language_id: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormInput({
      ...formInput,
      [name]: value,
    });
  };

  const onSelect = (language, id) => {
    setFormInput({
      ...formInput,
      language: language,
      language_id: id,
    });
  };

  const handleSubmit = () => {
    console.log(formInput);
  };

  return (
    <Container>
      <Form>
        <Form.Item label="Username">
          <Input
            name="username"
            value={formInput.username}
            onChange={handleInputChange}
          />
        </Form.Item>
        <Form.Item label="Language">
          <LanguageSelector language={formInput.language} onSelect={onSelect} />
        </Form.Item>
        <Form.Item label="Source Code">
          <CodeEditor
            name="source_code"
            value={formInput.source_code}
            onChange={handleInputChange}
            language={formInput.language}
          />
        </Form.Item>
        <Form.Item label="Standard Input" name="stdin">
          <Input.TextArea
            name="stdin"
            value={formInput.stdin}
            onChange={handleInputChange}
            placeholder="Enter standard input here"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Container>
  );
};

export default FormPage;
