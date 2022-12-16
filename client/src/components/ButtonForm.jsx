import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: max-content;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: white;
  cursor: pointer;
`;

export default function ButtonForm(props) {
  const { name, ...other } = props;

  return <StyledButton {...other}>{name}</StyledButton>;
}
