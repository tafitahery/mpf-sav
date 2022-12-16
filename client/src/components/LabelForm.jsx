import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  color: gray;
  margin-bottom: 5px;
  font-size: 24px;
`;

export default function LabelForm({ label }) {
  return <StyledLabel>{label}</StyledLabel>;
}
