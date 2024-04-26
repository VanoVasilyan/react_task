import { ChangeEvent, useCallback, useState } from "react";
import selectValue from "../mock/select.json";
import {
  emailSignatureData,
  pageLayoutData,
  emailSignatureTemplateData,
  singleImageGridTemplateData,
  twoImagesGridTemplateData,
  sliderGridTemplateData,
} from "../data/templates";
import { EPageType, ETemplateType } from "../types/globalTypes";

export const useApp = () => {
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

  const returnTemplateDataByTemplateType = useCallback(
    (selectedOption: string, selectedTemplateType: string) => {
      if (selectedOption === EPageType.EMAIL_SIGNATURE_LAYOUT) {
        return emailSignatureTemplateData;
      } else if (
        selectedOption === EPageType.PAGE_LAYOUT &&
        selectedTemplateType === ETemplateType.singleImageGrid
      ) {
        return singleImageGridTemplateData;
      } else if (
        selectedOption === EPageType.PAGE_LAYOUT &&
        selectedTemplateType === ETemplateType.twoImagesGrid
      ) {
        return twoImagesGridTemplateData;
      }

      return sliderGridTemplateData;
    },
    []
  );

  return {
    selectedOption,
    selectedTemplateType,
    emailSignatureData,
    pageLayoutData,
    selectValue,
    handleOptionChange,
    handleTemplateTypeChange,
    returnTemplateDataByTemplateType,
  };
};
