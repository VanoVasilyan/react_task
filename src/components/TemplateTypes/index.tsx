import React, { FC, useEffect, useState } from "react";
import { ITemplateTypes } from "./types";
import * as SC from "./styles";

const TemplateTypes: FC<ITemplateTypes> = ({
  data,
  type,
  handleTemplateTypeChange,
}) => {
  const [singleTypeSelectedTitle, setSingleTypeSelectedTitle] =
    useState<string>("");

  useEffect(() => {
    setSingleTypeSelectedTitle(data[0].title);
    handleTemplateTypeChange(data[0].title);
  }, [data, handleTemplateTypeChange]);

  return (
    <SC.StyledTemplateTypesMainContainer>
      <SC.StyledTemplateTypesHeading>
        Template Types
      </SC.StyledTemplateTypesHeading>
      <SC.StyledTemplateTypesContainer>
        {data.map((item, index) => (
          <SC.StyledSingleTemplateType
            $isMiddleElement={index === 1}
            $isSelected={item.title === singleTypeSelectedTitle}
            type={type}
            key={item.id}
          >
            <SC.StyledSingleTemplateTypeInput
              hidden
              name="item"
              type="radio"
              value={item.title}
              onClick={(e: any) => {
                setSingleTypeSelectedTitle(e.target.value);
                handleTemplateTypeChange(e.target.value);
              }}
            />
            <SC.StyledSingleTemplateImage
              src={
                item.title === singleTypeSelectedTitle
                  ? item.selectedImg
                  : item.img
              }
              alt={item.title}
            />
            <SC.StyledSingleTemplateTitle
              type={type}
              $addMoreMargin={index === data.length - 1 && type !== "Email"}
            >
              {item.title}
            </SC.StyledSingleTemplateTitle>
          </SC.StyledSingleTemplateType>
        ))}
      </SC.StyledTemplateTypesContainer>
    </SC.StyledTemplateTypesMainContainer>
  );
};

export default TemplateTypes;
