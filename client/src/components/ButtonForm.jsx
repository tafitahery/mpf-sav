import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 75px;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  margin: 10px 0px;
  background-color: ${({ action }) => (action === 'valid' ? 'teal' : 'red')};
  color: white;
  cursor: pointer;
`;

export default function ButtonForm(props) {
  const { name, ...other } = props;

  return <StyledButton {...other}>{name}</StyledButton>;
}
