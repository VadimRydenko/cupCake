import React from 'react';
import styled from 'styled-components/native';
import { isArray } from 'lodash';

import TextItem from './TextItem';

const ItemWithText = ({
  itemWidth,
  itemHeight,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  color,
  fontFamily,
  fontSize,
  lineHeight,
  letterSpacing,
  text,
}) => {
  return (
    <TextItemWrapper
      itemWidth={itemWidth}
      itemHeight={itemHeight}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
    >
      {isArray(text) ? 
        text.map((item) => (
          <TextItem
            key={item}
            color={color}
            fontFamily={fontFamily}
            fontSize={fontSize}
            lineHeight={lineHeight}
            letterSpacing={letterSpacing}
            text={item}
          />
        ),
        )
        : (
          <TextItem
            color={color}
            fontFamily={fontFamily}
            fontSize={fontSize}
            lineHeight={lineHeight}
            letterSpacing={letterSpacing}
            text={text}
          />
        )}
    </TextItemWrapper> 
  );
};

const TextItemWrapper = styled.View`
  align-items: center;
  justify-content: center;
  width: ${({ itemWidth }) => itemWidth || 'auto'};
  height: ${({ itemHeight }) => (itemHeight || 'auto')};
  margin-top: ${({ marginTop }) => (marginTop || 0)}px;
  margin-bottom: ${({ marginBottom }) => (marginBottom || 0)}px;
  margin-left: ${({ marginLeft }) => (marginLeft || 0)}px;
  margin-right: ${({ marginRight }) => (marginRight || 0)}px;
`;

export default ItemWithText;
