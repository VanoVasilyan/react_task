import { ChangeEvent, useCallback, useState } from "react";
import {
  emailSignatureData,
  pageLayoutData,
  emailSignatureTemplateData,
  singleImageGridTemplateData,
  twoImagesGridTemplateData,
  sliderGridTemplateData,
} from "../data/templates";

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

  return {
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
  };
};
