import React from 'react';
import styled from 'styled-components';
import LabelForm from './LabelForm';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledSelect = styled.select`
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
`;

const StyledOption = styled.option``;

export default function SelectForm(props) {
  const { label, options, action, ...other } = props;

  return (
    <Container>
      <LabelForm label={label} />
      <StyledSelect {...other} onChange={(e) => action(e.target.value)}>
        <StyledOption value=""></StyledOption>
        {options.map((option) => (
          <StyledOption key={option.id} value={option.role}>
            {option.role}
          </StyledOption>
        ))}
      </StyledSelect>
    </Container>
  );
}
