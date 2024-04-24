import { ChangeEvent } from "react";

export interface ITemplateType {
  id: number;
  title: string;
  img: string;
  selectedImg: string;
}

export interface ITemplateTypes {
  data: ITemplateType[];
  type: string;
  handleTemplateTypeChange: (
    value: ChangeEvent<HTMLDivElement> | string
  ) => void;
}
