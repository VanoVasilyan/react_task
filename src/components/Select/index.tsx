import React, { FC, useState } from "react";
import { ISelect, ISelectOption } from "./types";
import * as SC from "./styles";

const Select: FC<ISelect> = ({ options, onChange }) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <SC.StyledSelectElement
      $focused={isFocused}
      onClick={() => setIsFocused((prev) => !prev)}
      onBlur={() => setIsFocused(false)}
      onChange={(e) => {
        onChange(e.target.value);
      }}
    >
      {options.map((option: ISelectOption) => (
        <SC.StyledSelectOption
          key={option.id}
          onSelect={() => setIsFocused(false)}
          selected={option.defaultSelected}
          disabled={option.defaultSelected}
          hidden={option.defaultSelected}
          value={option.defaultSelected ? "" : option.value}
        >
          {option.value}
        </SC.StyledSelectOption>
      ))}
    </SC.StyledSelectElement>
  );
};

export default Select;
