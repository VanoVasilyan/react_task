export enum ESelectOptions {
  EMAIL = "Email",
  PAGE = "Page",
}

export enum EPageType {
  EMAIL_SIGNATURE_LAYOUT = "Email Signature Layout",
  PAGE_LAYOUT = "Page Layout",
}

export enum ETemplateType {
  leftAlignLayout = "Left Align Layout",
  centerAlignLayout = "Center Align Layout",
  rightAlignLayout = "Right Align Layout",
  singleImageGrid = "Single Image Grid",
  twoImagesGrid = "2 Images Grid",
  sliderGrid = "Slider Grid",
}

export type TemplateType = {
  id: number;
  title: string;
  img: string;
  selectedImg: string;
};

export type TSocial = {
  id: number;
  icon: string;
  url: string;
};

export type TEmailSignatureTemplateData = {
  name: string;
  lastName: string;
  avatar: string;
  position: string;
  social: TSocial[];
  description: string;
};

export type TInfoBlockItem = {
  id: number;
  icon: string;
  value: string;
};

export type TSingleImageGridTemplateData = {
  title: string;
  categoryName: string;
  authorName: string;
  infoBlock: TInfoBlockItem[];
  avatar: string;
  description: string;
  social: TSocial[];
};

export type TwoImagesGridTemplateDataType = {
  title: string;
  coverImage: string;
  date: {
    icon: string;
    value: string;
  };
  social: TSocial[];
  description: {
    img: string;
    topText: string;
    bottomText: string;
  };
};

export type TBulletPoint = {
  id: number;
  value: string;
};

export type TSideImage = {
  id: number;
  img: string;
  main: boolean;
};

export type TSliderGridTemplateData = {
  title: string;
  categoryName: string;
  description: string;
  bulletPoints: TBulletPoint[];
  sliderImages: {
    mainSliderImage: string;
    sideImages: TSideImage[];
  };
};
