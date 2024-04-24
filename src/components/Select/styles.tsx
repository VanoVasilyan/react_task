import styled from "styled-components";
import arrowIconDown from "../../assets/icons/ArrowIconDown.svg";
import arrowIconUp from "../../assets/icons/ArrowIconUp.svg";

export const StyledSelectElement = styled.select<{ $focused?: boolean }>`
  width: 100%;
  max-width: 454px;
  border: 1px solid #dedede;
  border-radius: 4px;
  padding: 8px 16px;
  outline: none;
  cursor: pointer;
  appearance: none;

  background: url(${({ $focused }) => ($focused ? arrowIconUp : arrowIconDown)})
    white no-repeat calc(100% - 10px) !important;

  &:focus {
    border: 1px solid #000000;
  }
`;

export const StyledSelectOption = styled.option`
  padding: 8px 16px;
  height: 50px;
`;
