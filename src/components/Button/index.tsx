import React, { FC } from "react";
import { IButton } from "./types";
import * as SC from "./styles";

const Button: FC<IButton> = ({
  text,
  width,
  onClick,
  border,
  padding,
  bgColor,
  color,
  borderBlockColor,
  borderRadius,
}) => {
  return (
    <SC.StyledButton
      onClick={onClick}
      style={{
        width,
        borderBlockColor,
        border,
        padding,
        backgroundColor: bgColor,
        color,
        borderRadius,
      }}
    >
      {text}
    </SC.StyledButton>
  );
};

export default Button;
