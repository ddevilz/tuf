import { Select, Typography } from "antd";
import { LANGUAGE_VERSIONS } from "../constants";
import PropTypes from "prop-types";

const { Text } = Typography;
const { Option } = Select;

const LanguageSelector = ({ language, onSelect }) => {
  const languages = Object.entries(LANGUAGE_VERSIONS);

  const handleChange = (value) => {
    const selectedLanguage = languages.find(([lang]) => lang === value);
    if (selectedLanguage) {
      const [lang, { id }] = selectedLanguage;
      onSelect(lang, id);
    }
  };

  return (
    <Select value={language} style={{ width: 200 }} onChange={handleChange}>
      {languages.map(([lang, { id, version }]) => (
        <Option
          key={lang}
          value={lang}
          data-id={id}
          style={{ backgroundColor: lang === language ? "#f0f0f0" : "" }}
        >
          <Text strong={lang === language}>{lang}</Text>&nbsp;
          <Text type="secondary">({version})</Text>
        </Option>
      ))}
    </Select>
  );
};

LanguageSelector.propTypes = {
  language: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default LanguageSelector;
