import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  position: absolute;
  right: 50%;
  top: -5px;
  color: white;
`;

export default function Title({ title }) {
  return <StyledTitle>{title}</StyledTitle>;
}
