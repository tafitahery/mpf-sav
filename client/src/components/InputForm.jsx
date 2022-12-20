import React from 'react';
import styled from 'styled-components';
import LabelForm from './LabelForm';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 300px;
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
`;

export default function InputForm(props) {
  const { label, action, ...other } = props;

  return (
    <Container>
      <LabelForm label={label} />
      <Input
        {...other}
        onChange={(e) =>
          action((prev) => ({ ...prev, [e.target.name]: e.target.value }))
        }
      />
    </Container>
  );
}
