import leftAlignImage from "../assets/LeftAlignImage.png";
import leftAlignImageSelected from "../assets/LeftAlignImageSelected.png";
import CenterAlignImage from "../assets/CenterAlignImage.png";
import CenterAlignImageSelected from "../assets/CenterAlignImageSelected.png";
import RightAlignImage from "../assets/RightAlignImage.png";
import RightAlignImageSelected from "../assets/RightAlignImageSelected.png";
import PageLayoutLeftImage from "../assets/PageLayoutLeftImage.png";
import PageLayoutLeftImageSelected from "../assets/PageLayoutLeftImageSelected.png";
import PageLayoutCenterImage from "../assets/PageLayoutCenterImage.png";
import PageLayoutCenterImageSelected from "../assets/PageLayoutCenterImageSelected.png";
import PageLayoutRightImage from "../assets/PageLayoutRightImage.png";
import PageLayoutRightImageSelected from "../assets/PageLayoutRightImageSelected.png";

import AvatarIcon from "../assets/AvatarIcon.png";
import FBIcon from "../assets/FBIcon.png";
import XIcon from "../assets/XIcon.png";
import InstaIcon from "../assets/InstaIcon.png";

import CalendarIcon from "../assets/CalendarIcon.png";
import ViewCountIcon from "../assets/EyeIcon.png";
import AvatarBig from "../assets/AvatarBig.png";
import TwoImagesGridTemplateAvatar from "../assets/TwoImagesGridTemplateAvatar.png";
import DescriptionImage from "../assets/DescriptionImage.png";

import SliderMainImage from "../assets/SliderMainImage.png";
import SliderSideImage from "../assets/SliderSideImage.png";

export const emailSignatureData = [
  {
    id: 1,
    title: "Left Align Layout",
    img: leftAlignImage,
    selectedImg: leftAlignImageSelected,
  },
  {
    id: 2,
    title: "Center Align Layout",
    img: CenterAlignImage,
    selectedImg: CenterAlignImageSelected,
  },
  {
    id: 3,
    title: "Right Align Layout",
    img: RightAlignImage,
    selectedImg: RightAlignImageSelected,
  },
];

export const pageLayoutData = [
  {
    id: 1,
    title: "Single Image Grid",
    img: PageLayoutLeftImage,
    selectedImg: PageLayoutLeftImageSelected,
  },
  {
    id: 2,
    title: "2 Images Grid",
    img: PageLayoutCenterImage,
    selectedImg: PageLayoutCenterImageSelected,
  },
  {
    id: 3,
    title: "Slider Grid",
    img: PageLayoutRightImage,
    selectedImg: PageLayoutRightImageSelected,
  },
];

export const emailSignatureTemplateData = {
  name: "Name",
  lastName: "Surname",
  avatar: AvatarIcon,
  position: "Job Title",
  social: [
    {
      id: 1,
      icon: FBIcon,
      url: "https://www.facebook.com",
    },
    {
      id: 2,
      icon: XIcon,
      url: "https://twitter.com",
    },
    {
      id: 3,
      icon: InstaIcon,
      url: "https://www.instagram.com",
    },
  ],
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
};

export const singleImageGridTemplateData = {
  title: "Title",
  categoryName: "Category name",
  authorName: "Author name",
  infoBlock: [
    {
      id: 1,
      icon: CalendarIcon,
      value: "Date",
    },
    {
      id: 2,
      icon: ViewCountIcon,
      value: "View count",
    },
  ],
  avatar: AvatarBig,
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  social: [
    {
      id: 1,
      icon: FBIcon,
      url: "https://www.facebook.com",
    },
    {
      id: 2,
      icon: XIcon,
      url: "https://twitter.com",
    },
    {
      id: 3,
      icon: InstaIcon,
      url: "https://www.instagram.com",
    },
  ],
};

export const twoImagesGridTemplateData = {
  coverImage: TwoImagesGridTemplateAvatar,
  social: [
    {
      id: 1,
      icon: FBIcon,
      url: "https://www.facebook.com",
    },
    {
      id: 2,
      icon: XIcon,
      url: "https://twitter.com",
    },
    {
      id: 3,
      icon: InstaIcon,
      url: "https://www.instagram.com",
    },
  ],
  title: "Title",
  date: {
    icon: CalendarIcon,
    value: "Date",
  },
  description: {
    img: DescriptionImage,
    topText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    bottomText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
};

export const sliderGridTemplateData = {
  title: "Title",
  categoryName: "Category name",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,Lorem Ipsum is simply",
  bulletPoints: [
    {
      id: 1,
      value: "Lorem Ipsum 1",
    },
    {
      id: 2,
      value: "Lorem Ipsum 2",
    },
    {
      id: 3,
      value: "Lorem Ipsum 3",
    },
    {
      id: 4,
      value: "Lorem Ipsum 4",
    },
  ],
  sliderImages: [
    {
      id: 1,
      img: SliderMainImage,
      main: true,
    },
    {
      id: 2,
      img: SliderSideImage,
      main: false,
    },
    {
      id: 3,
      img: SliderSideImage,
      main: false,
    },
    {
      id: 4,
      img: SliderSideImage,
      main: false,
    },
    {
      id: 5,
      img: SliderSideImage,
      main: false,
    },
  ],
};
