import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  color: white;
`;

export default function Title({ title }) {
  return <StyledTitle>{title}</StyledTitle>;
}
