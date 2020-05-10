import React from 'react';
import styled from 'styled-components/native';

const TextItem = ({
  color,
  fontFamily,
  fontSize,
  lineHeight,
  letterSpacing,
  text,
}) => {
  return (
    <Item
      color={color}
      fontFamily={fontFamily}
      fontSize={fontSize}
      lineHeight={lineHeight}
      letterSpacing={letterSpacing}
    >
      {text}
    </Item>
  );
};

const Item = styled.Text`
  color: ${({ color }) => color || 'white'};
  text-align: center;
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ fontSize }) => fontSize};
  line-height: ${({ lineHeight }) => lineHeight || '0'};
  letter-spacing: ${({ letterSpacing }) => letterSpacing || '0'};
`;

export default TextItem;
