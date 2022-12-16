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

export default function SelectForm({ label, options }) {
  return (
    <Container>
      <LabelForm label={label} />
      <StyledSelect>
        {options.map((option) => (
          <StyledOption key={option.id}>{option.role}</StyledOption>
        ))}
      </StyledSelect>
    </Container>
  );
}
