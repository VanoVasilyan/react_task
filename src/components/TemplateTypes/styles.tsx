import styled, { css } from "styled-components";

export const StyledTemplateTypesMainContainer = styled.div`
  margin-top: 50px;
`;

export const StyledTemplateTypesContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const StyledTemplateTypesHeading = styled.h1`
  font-size: 18px;
  font-weight: 400;
`;

export const StyledSingleTemplateType = styled.label<{
  $isMiddleElement?: boolean;
  $isSelected?: boolean;
  type: string;
}>`
  ${({ $isMiddleElement, type }) =>
    $isMiddleElement
      ? css`
          display: block;
        `
      : type !== "Page"
      ? css`
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        `
      : css``}
  width: 100%;
  height: ${({ type }) => (type === "Email" ? "261px" : "324px")};
  min-width: 330px;
  max-width: 330px;
  ${({ type, $isMiddleElement }) =>
    type === "Email"
      ? css`
          padding: ${$isMiddleElement ? "9px" : "60px"} 60px 9px 60px;
        `
      : css`
          padding: ${$isMiddleElement ? "9px" : "60px"} 0 0;
        `}

  text-align: ${({ $isMiddleElement, type }) =>
    $isMiddleElement || type === "Page" ? "center" : "unset"};
  border-radius: 4px;
  border: 1px solid
    ${({ $isSelected }) => ($isSelected ? "#4764FF" : "#dedede")};
  color: ${({ $isSelected }) => ($isSelected ? "#4764FF" : "#dedede")};
  cursor: pointer;
`;

export const StyledSingleTemplateTypeInput = styled.input``;

export const StyledSingleTemplateImage = styled.img``;

export const StyledSingleTemplateTitle = styled.p<{
  type: string;
  $addMoreMargin?: boolean;
}>`
  margin: 0;
  margin-top: ${({ $addMoreMargin }) => ($addMoreMargin ? "74px" : "10px")};
`;
