import React, { ChangeEvent, FC, useCallback, useState } from "react";
import selectValue from "./mock/select.json";
import Select from "./components/Select";
import TemplateTypes from "./components/TemplateTypes";
import {
  emailSignatureData,
  pageLayoutData,
  emailSignatureTemplateData,
  singleImageGridTemplateData,
  twoImagesGridTemplateData,
  sliderGridTemplateData,
} from "./data/templates";
import Template from "./components/Template";
import "./App.css";

const App: FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [selectedTemplateType, setSelectedTemplateType] = useState<string>("");

  const handleOptionChange = useCallback(
    (value: ChangeEvent<HTMLSelectElement> | string) => {
      setSelectedOption(value as string);
    },
    []
  );

  const handleTemplateTypeChange = useCallback(
    (value: ChangeEvent<HTMLDivElement> | string) => {
      setSelectedTemplateType(value as string);
    },
    []
  );

  return (
    <div className="App">
      <Select options={selectValue} onChange={handleOptionChange} />
      {selectedOption && (
        <TemplateTypes
          handleTemplateTypeChange={handleTemplateTypeChange}
          type={selectedOption === "Email Signature Layout" ? "Email" : "Page"}
          data={
            selectedOption === "Email Signature Layout"
              ? emailSignatureData
              : pageLayoutData
          }
        />
      )}
      {selectedOption && (
        <Template
          data={
            selectedOption === "Email Signature Layout"
              ? emailSignatureTemplateData
              : selectedOption === "Page Layout" &&
                selectedTemplateType === "Single Image Grid"
              ? singleImageGridTemplateData
              : selectedOption === "Page Layout" &&
                selectedTemplateType === "2 Images Grid"
              ? twoImagesGridTemplateData
              : sliderGridTemplateData
          }
          type={selectedOption === "Email Signature Layout" ? "Email" : "Page"}
          selectedTemplateType={selectedTemplateType}
        />
      )}
    </div>
  );
};

export default App;
