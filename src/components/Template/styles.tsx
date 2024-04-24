import styled from "styled-components";

export const StyledTemplateMainContainer = styled.div`
  margin-top: 100px;
  width: 100%;
`;

export const StyledLeftAlignLayout = styled.div<{ $isNeedReverse?: boolean }>`
  max-width: 688px;
  display: flex;
  gap: 20px;
  flex-direction: ${({ $isNeedReverse }) => $isNeedReverse && "row-reverse"};
`;

export const StyledRightAlignLayout = styled.div<{ $isNeedReverse?: boolean }>`
  max-width: 688px;
  display: flex;
  gap: 20px;
  flex-direction: ${({ $isNeedReverse }) => $isNeedReverse && "row-reverse"};
`;

export const StyledLeftAlignLayoutLeftBlock = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 160px;
`;

export const StyledLeftAlignLayoutAvatar = styled.img``;

export const StyledLeftAlignSocialBlock = styled.ul`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 0;
`;

export const StyledLeftAlignSocialBlockItem = styled.li`
  list-style: none;
  cursor: pointer;
`;

export const StyledLeftAlignSocialBlockItemImage = styled.img``;

export const StyledLeftAlignLayoutRightBlock = styled.div`
  max-width: 508px;
`;

export const StyledLeftAlignLayoutRightBlockNameSurName = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin: 0;
`;

export const StyledLeftAlignLayoutRightBlockJobTitle = styled.p`
  font-size: 20px;
  font-weight: 400;
  margin: 0;
`;

export const StyledLeftAlignLayoutRightBlockDescription = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin: 36px 0 0 0;
`;

export const StyledCenterAlignLayout = styled.div`
  max-width: 508px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledButtonWrapper = styled.div`
  margin-top: 100px;
`;

export const StyledSingleImageGrid = styled.div`
  max-width: 612px;
  display: flex;
  flex-direction: column;
`;

export const StyledSingleImageGridCategory = styled.p`
  font-size: 21px;
  font-weight: 500;
  margin: 0;
`;

export const StyledSingleImageGridTitle = styled.p`
  font-size: 60px;
  font-weight: 700;
  margin: 0;
`;

export const StyledSingleImageGridInfoBlock = styled.ul`
  display: flex;
  align-items: center;
  gap: 100px;
  padding: 0;
`;

export const StyledSingleImageGridInfoBlockItem = styled.li`
  display: flex;
  gap: 16px;
  list-style: none;
`;

export const StyledSingleImageGridInfoBlockItemImg = styled.img``;

export const StyledSingleImageGridAvatar = styled.img``;

export const StyledSingleImageGridDescription = styled.div`
  margin-top: 16px;
`;

export const StyledSingleImageGridSocialBlock = styled.ul`
  display: flex;
  gap: 10px;
  padding: 0;
  margin: 40px 0 0 0;
`;

export const StyledSingleImageGridSocialBlockItem = styled.li`
  list-style: none;
  cursor: pointer;
`;

export const StyledTwoImagesGrid = styled.div`
  max-width: 653px;
  display: flex;
  flex-direction: column;
`;

export const StyledTwoImagesGridAvatar = styled.img`
  width: 100%;
`;

export const StyledTwoImagesGridBottomBlock = styled.div`
  display: flex;
  align-items: baseline;
  gap: 20px;
`;

export const StyledTwoImagesGridSocialBlock = styled.ul`
  display: flex;
  gap: 10px;
  padding: 0;
  margin: 40px 0 0 0;
`;

export const StyledTwoImagesGridSocialBlockItem = styled.li`
  list-style: none;
  cursor: pointer;
`;

export const StyledTwoImagesGridRightBlock = styled.div``;

export const StyledTwoImagesGridRightBlockTitle = styled.p`
  font-size: 21px;
  font-weight: 500;
  margin: 0;
`;

export const StyledTwoImagesGridRightBlockDate = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 8px;
`;

export const StyledTwoImagesGridRightBlockDateIcon = styled.img``;

export const StyledTwoImagesGridRightBlockDescription = styled.p``;

export const StyledSliderGrid = styled.div`
  max-width: 1130px;
  display: flex;
  gap: 30px;
`;

export const StyledSliderGridLeftBlock = styled.div`
  display: flex;
  gap: 20px;
`;

export const StyledLeftBlockSideImages = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;
  margin: 0;
  gap: 50px;
`;

export const StyledLeftBlockSideImageItem = styled.li`
  list-style: none;
  cursor: pointer;
`;

export const StyledLeftBlockSideImage = styled.img``;

export const StyledSliderBlockMainImage = styled.img`
  width: 100%;
  max-width: 466px;
  min-width: 466px;
`;

export const StyledSliderGridRightBlock = styled.div``;

export const StyledSliderGridCategoryName = styled.p`
  margin: 0;
  font-size: 21px;
  font-weight: 500;
`;

export const StyledSliderGridTitle = styled.p`
  font-size: 60px;
  font-weight: 700;
  margin: 0;
`;

export const StyledSliderGridDescription = styled.p`
  font-size: 20px;
  font-weight: 400;
`;

export const StyledButtonControllerWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const StyledSliderGridBulletPoints = styled.ul`
  padding: 0;
  margin: 30px 0px 0px 30px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const StyledSliderGridBulletPointsItem = styled.li`
  cursor: pointer;
  font-size: 20px;
  font-weight: 400;
`;
