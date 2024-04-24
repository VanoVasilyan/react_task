export interface ITemplate {
  type: string;
  data: any;
  selectedTemplateType: string;
}

export enum ETemplateType {
  leftAlignLayout = "Left Align Layout",
  centerAlignLayout = "Center Align Layout",
  rightAlignLayout = "Right Align Layout",
  singleImageGrid = "Single Image Grid",
  twoImagesGrid = "2 Images Grid",
  sliderGrid = "Slider Grid",
}
