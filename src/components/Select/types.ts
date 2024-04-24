import { ChangeEvent } from "react";

export interface ISelectOption {
  id: number;
  defaultSelected: boolean;
  value: string;
}

export interface ISelect {
  options: ISelectOption[];
  onChange: (value: ChangeEvent<HTMLSelectElement> | string) => void;
}
