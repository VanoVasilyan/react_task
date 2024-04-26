import React, { FC } from "react";
import Select from "../Select";
import TemplateTypes from "../TemplateTypes";
import Template from "../Template";
import { useApp } from "../../hooks/useApp";
import { EPageType, ESelectOptions } from "../../types/globalTypes";
import * as SC from "./styles";

const App: FC = () => {
  const {
    selectValue,
    selectedOption,
    selectedTemplateType,
    emailSignatureData,
    pageLayoutData,
    handleOptionChange,
    handleTemplateTypeChange,
    returnTemplateDataByTemplateType,
  } = useApp();

  return (
    <SC.StyledAppContainer>
      <Select options={selectValue} onChange={handleOptionChange} />
      {selectedOption && (
        <TemplateTypes
          handleTemplateTypeChange={handleTemplateTypeChange}
          type={
            selectedOption === EPageType.EMAIL_SIGNATURE_LAYOUT
              ? ESelectOptions.EMAIL
              : ESelectOptions.PAGE
          }
          data={
            selectedOption === EPageType.EMAIL_SIGNATURE_LAYOUT
              ? emailSignatureData
              : pageLayoutData
          }
        />
      )}
      {selectedOption && (
        <Template
          data={returnTemplateDataByTemplateType(
            selectedOption,
            selectedTemplateType
          )}
          type={
            selectedOption === EPageType.EMAIL_SIGNATURE_LAYOUT
              ? ESelectOptions.EMAIL
              : ESelectOptions.PAGE
          }
          selectedTemplateType={selectedTemplateType}
        />
      )}
    </SC.StyledAppContainer>
  );
};

export default App;
