import React, { FC, useRef } from "react";
import Button from "../Button";
import { useTemplate } from "../../hooks/useTemplate";
import { ESelectOptions, ETemplateType } from "../../types/globalTypes";
import { ITemplate } from "./types";
import * as SC from "./styles";

const Template: FC<ITemplate> = ({ data, type, selectedTemplateType }) => {
  const layoutRef = useRef<HTMLDivElement>(null);
  const { handleExportHtml, GlobalStyle } = useTemplate();

  return type === ESelectOptions.EMAIL ? (
    <>
      <SC.StyledTemplateMainContainer ref={layoutRef}>
        {selectedTemplateType === ETemplateType.leftAlignLayout ? (
          <SC.StyledLeftAlignLayout>
            <SC.StyledLeftAlignLayoutLeftBlock>
              <SC.StyledLeftAlignLayoutAvatar src={data.avatar} alt="Avatar" />
              <SC.StyledLeftAlignSocialBlock>
                {data.social.map((socialItem: any) => (
                  <SC.StyledLeftAlignSocialBlockItem key={socialItem.id}>
                    <SC.StyledLeftAlignSocialBlockItemImage
                      src={socialItem.icon}
                    />
                  </SC.StyledLeftAlignSocialBlockItem>
                ))}
              </SC.StyledLeftAlignSocialBlock>
            </SC.StyledLeftAlignLayoutLeftBlock>
            <SC.StyledLeftAlignLayoutRightBlock>
              <SC.StyledLeftAlignLayoutRightBlockNameSurName>
                {data.name} {data.lastName}
              </SC.StyledLeftAlignLayoutRightBlockNameSurName>
              <SC.StyledLeftAlignLayoutRightBlockJobTitle>
                {data.position}
              </SC.StyledLeftAlignLayoutRightBlockJobTitle>
              <SC.StyledLeftAlignLayoutRightBlockDescription>
                {data.description}
              </SC.StyledLeftAlignLayoutRightBlockDescription>
            </SC.StyledLeftAlignLayoutRightBlock>
          </SC.StyledLeftAlignLayout>
        ) : selectedTemplateType === ETemplateType.centerAlignLayout ? (
          <SC.StyledCenterAlignLayout>
            <SC.StyledLeftAlignLayoutLeftBlock>
              <SC.StyledLeftAlignLayoutAvatar src={data.avatar} />
              <SC.StyledLeftAlignSocialBlock>
                {data.social.map((socialItem: any) => (
                  <SC.StyledLeftAlignSocialBlockItem key={socialItem.id}>
                    <SC.StyledLeftAlignSocialBlockItemImage
                      src={socialItem.icon}
                    />
                  </SC.StyledLeftAlignSocialBlockItem>
                ))}
              </SC.StyledLeftAlignSocialBlock>
            </SC.StyledLeftAlignLayoutLeftBlock>
            <SC.StyledLeftAlignLayoutRightBlockNameSurName>
              {data.name} {data.lastName}
            </SC.StyledLeftAlignLayoutRightBlockNameSurName>
            <SC.StyledLeftAlignLayoutRightBlockJobTitle>
              {data.position}
            </SC.StyledLeftAlignLayoutRightBlockJobTitle>
            <SC.StyledLeftAlignLayoutRightBlockDescription>
              {data.description}
            </SC.StyledLeftAlignLayoutRightBlockDescription>
          </SC.StyledCenterAlignLayout>
        ) : (
          <SC.StyledLeftAlignLayout $isNeedReverse>
            <SC.StyledLeftAlignLayoutLeftBlock>
              <SC.StyledLeftAlignLayoutAvatar src={data.avatar} />
              <SC.StyledLeftAlignSocialBlock>
                {data.social.map((socialItem: any) => (
                  <SC.StyledLeftAlignSocialBlockItem key={socialItem.id}>
                    <SC.StyledLeftAlignSocialBlockItemImage
                      src={socialItem.icon}
                    />
                  </SC.StyledLeftAlignSocialBlockItem>
                ))}
              </SC.StyledLeftAlignSocialBlock>
            </SC.StyledLeftAlignLayoutLeftBlock>
            <SC.StyledLeftAlignLayoutRightBlock>
              <SC.StyledLeftAlignLayoutRightBlockNameSurName>
                {data.name} {data.lastName}
              </SC.StyledLeftAlignLayoutRightBlockNameSurName>
              <SC.StyledLeftAlignLayoutRightBlockJobTitle>
                {data.position}
              </SC.StyledLeftAlignLayoutRightBlockJobTitle>
              <SC.StyledLeftAlignLayoutRightBlockDescription>
                {data.description}
              </SC.StyledLeftAlignLayoutRightBlockDescription>
            </SC.StyledLeftAlignLayoutRightBlock>
          </SC.StyledLeftAlignLayout>
        )}
        <GlobalStyle />
      </SC.StyledTemplateMainContainer>
      <SC.StyledButtonWrapper>
        <Button
          width="200px"
          text="Export as HTML"
          color="#4764FF"
          border="1px solid"
          bgColor="inherit"
          borderRadius="4px"
          padding="14px 24px"
          borderBlockColor="#4764FF"
          onClick={() => handleExportHtml(layoutRef)}
        />
      </SC.StyledButtonWrapper>
    </>
  ) : (
    <>
      <SC.StyledTemplateMainContainer ref={layoutRef}>
        {selectedTemplateType === ETemplateType.singleImageGrid ? (
          <SC.StyledSingleImageGrid>
            <SC.StyledSingleImageGridCategory>
              {data.categoryName}
            </SC.StyledSingleImageGridCategory>
            <SC.StyledSingleImageGridTitle>
              {data.title}
            </SC.StyledSingleImageGridTitle>
            <SC.StyledSingleImageGridInfoBlock>
              <SC.StyledSingleImageGridInfoBlockItem>
                {data.authorName}
              </SC.StyledSingleImageGridInfoBlockItem>
              {data.infoBlock.map((infoBlockItem: any) => (
                <SC.StyledSingleImageGridInfoBlockItem key={infoBlockItem.id}>
                  <SC.StyledSingleImageGridInfoBlockItemImg
                    src={infoBlockItem.icon}
                  />
                  {infoBlockItem.value}
                </SC.StyledSingleImageGridInfoBlockItem>
              ))}
            </SC.StyledSingleImageGridInfoBlock>
            <SC.StyledSingleImageGridAvatar src={data.avatar} alt="Avatar" />
            <SC.StyledSingleImageGridDescription>
              {data.description}
            </SC.StyledSingleImageGridDescription>
            <SC.StyledSingleImageGridSocialBlock>
              <SC.StyledSingleImageGridSocialBlockItem>
                Share
              </SC.StyledSingleImageGridSocialBlockItem>
              {data.social.map((socialItem: any) => (
                <SC.StyledSingleImageGridSocialBlockItem key={socialItem.id}>
                  <SC.StyledLeftAlignSocialBlockItemImage
                    src={socialItem.icon}
                  />
                </SC.StyledSingleImageGridSocialBlockItem>
              ))}
            </SC.StyledSingleImageGridSocialBlock>
          </SC.StyledSingleImageGrid>
        ) : selectedTemplateType === ETemplateType.twoImagesGrid ? (
          <SC.StyledTwoImagesGrid>
            <SC.StyledTwoImagesGridAvatar src={data.coverImage} />
            <SC.StyledTwoImagesGridBottomBlock>
              <SC.StyledTwoImagesGridSocialBlock>
                <SC.StyledTwoImagesGridSocialBlockItem>
                  Share
                </SC.StyledTwoImagesGridSocialBlockItem>
                {data.social.map((socialItem: any) => (
                  <SC.StyledTwoImagesGridSocialBlockItem key={socialItem.id}>
                    <SC.StyledLeftAlignSocialBlockItemImage
                      src={socialItem.icon}
                    />
                  </SC.StyledTwoImagesGridSocialBlockItem>
                ))}
              </SC.StyledTwoImagesGridSocialBlock>
              <SC.StyledTwoImagesGridRightBlock>
                <SC.StyledTwoImagesGridRightBlockTitle>
                  {data.title}
                </SC.StyledTwoImagesGridRightBlockTitle>
                <SC.StyledTwoImagesGridRightBlockDate>
                  <SC.StyledTwoImagesGridRightBlockDateIcon
                    src={data.date.icon}
                  />
                  {data.date.value}
                </SC.StyledTwoImagesGridRightBlockDate>
                <SC.StyledTwoImagesGridRightBlockDescription>
                  {data.description.topText}
                </SC.StyledTwoImagesGridRightBlockDescription>
                <SC.StyledTwoImagesGridAvatar src={data.description.img} />
                <SC.StyledTwoImagesGridRightBlockDescription>
                  {data.description.bottomText}
                </SC.StyledTwoImagesGridRightBlockDescription>
              </SC.StyledTwoImagesGridRightBlock>
            </SC.StyledTwoImagesGridBottomBlock>
          </SC.StyledTwoImagesGrid>
        ) : selectedTemplateType === ETemplateType.sliderGrid ? (
          <SC.StyledSliderGrid>
            <SC.StyledSliderGridLeftBlock>
              <SC.StyledLeftBlockSideImages>
                {data.sliderImages.sideImages.map((elem: any) => (
                  <SC.StyledLeftBlockSideImageItem key={elem.id}>
                    <SC.StyledLeftBlockSideImage
                      src={elem.img}
                      alt={"Side Image"}
                    />
                  </SC.StyledLeftBlockSideImageItem>
                ))}
              </SC.StyledLeftBlockSideImages>
              <SC.StyledSliderBlockMainImage
                src={data.sliderImages.mainSliderImage}
              />
            </SC.StyledSliderGridLeftBlock>
            <SC.StyledSliderGridRightBlock>
              <SC.StyledSliderGridCategoryName>
                {data.categoryName}
              </SC.StyledSliderGridCategoryName>
              <SC.StyledSliderGridTitle>{data.title}</SC.StyledSliderGridTitle>
              <SC.StyledSliderGridDescription>
                {data.description}
              </SC.StyledSliderGridDescription>
              <SC.StyledButtonControllerWrapper>
                <Button
                  width="202px"
                  text="Button"
                  color="#FFFFFF"
                  border="none"
                  bgColor="#000000"
                  borderRadius="50px"
                  padding="12px 20px"
                  onClick={() => {}}
                />
                <Button
                  width="202px"
                  text="Button"
                  color="#000000"
                  border="1px solid"
                  bgColor="#FFFFFF"
                  borderRadius="50px"
                  padding="12px 20px"
                  onClick={() => {}}
                />
              </SC.StyledButtonControllerWrapper>
              <SC.StyledSliderGridBulletPoints>
                {data.bulletPoints.map((bulletPoint: any) => (
                  <SC.StyledSliderGridBulletPointsItem key={bulletPoint.id}>
                    {bulletPoint.value}
                  </SC.StyledSliderGridBulletPointsItem>
                ))}
              </SC.StyledSliderGridBulletPoints>
            </SC.StyledSliderGridRightBlock>
          </SC.StyledSliderGrid>
        ) : null}
      </SC.StyledTemplateMainContainer>
      <SC.StyledButtonWrapper>
        <Button
          width="200px"
          text="Export as HTML"
          color="#4764FF"
          border="1px solid"
          bgColor="inherit"
          borderRadius="4px"
          padding="14px 24px"
          borderBlockColor="#4764FF"
          onClick={() => handleExportHtml(layoutRef)}
        />
      </SC.StyledButtonWrapper>
    </>
  );
};

export default Template;
