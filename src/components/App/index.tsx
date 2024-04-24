import React, { FC } from "react";
import selectValue from "../../mock/select.json";
import Select from "../Select";
import TemplateTypes from "../TemplateTypes";
import Template from "../Template";
import { useApp } from "../../hooks/useApp";
import * as SC from "./styles";

const App: FC = () => {
  const {
    selectedOption,
    selectedTemplateType,
    emailSignatureData,
    pageLayoutData,
    emailSignatureTemplateData,
    singleImageGridTemplateData,
    twoImagesGridTemplateData,
    sliderGridTemplateData,
    handleOptionChange,
    handleTemplateTypeChange,
  } = useApp();

  return (
    <SC.StyledAppContainer>
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
    </SC.StyledAppContainer>
  );
};

export default App;
