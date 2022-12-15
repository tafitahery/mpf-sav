import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  color: gray;
  margin-bottom: 5px;
  font-size: 24px;
`;

const Input = styled.input`
  width: 300px;
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
`;

export default function InputForm(props) {
  const { label, ...other } = props;

  return (
    <Container>
      <Label htmlFor="">{label}</Label>
      <Input {...other} />
    </Container>
  );
}
