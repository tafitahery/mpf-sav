import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import ButtonForm from '../components/ButtonForm';
import InputForm from '../components/InputForm';
import SelectForm from '../components/SelectForm';
import { fetchData } from '../utils/api';

const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 65%;
`;

const Left = styled.div`
  flex: 1;
  height: 95%;
  margin: 20px;
  padding: 0 10px;
  border-radius: 10px;
  -webkit-box-shadow: -1px 5px 9px -1px rgba(0, 0, 0, 0.46);
  box-shadow: -1px 5px 9px -1px rgba(0, 0, 0, 0.46);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledTitle = styled.h1``;

const Right = styled.div`
  flex: 1;
  height: 95%;
  margin: 20px;
  padding: 0 10px;
  border-radius: 10px;
  -webkit-box-shadow: -1px 5px 9px -1px rgba(0, 0, 0, 0.46);
  box-shadow: -1px 5px 9px -1px rgba(0, 0, 0, 0.46);
  overflow: scroll;
`;

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const StyledTr = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
  &:hover {
    background-color: #ddd;
  }
`;

const StyledTh = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: black;
  color: white;
`;

const StyledTd = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

export default function Machine() {
  const types = [
    { id: 1, value: 'Copieur' },
    { id: 2, value: 'Caisse' },
    { id: 3, value: 'Autre' },
  ];
  const colors = [
    { id: 1, value: 'Noir et Blanc' },
    { id: 2, value: 'Couleur' },
  ];
  const url = 'http://localhost:5000/machines';

  const [model, setModel] = useState('');
  const [type, setType] = useState('');
  const [color, setColor] = useState('');
  const [machines, setMachines] = useState([]);
  const [id, setId] = useState(null);

  useEffect(() => {
    fetchData(url, setMachines);
  }, []);

  const handleSubmit = async (e) => {
    const data = { model, type, color };

    e.preventDefault();
    try {
      if (!id) {
        await axios.post(url, data);
      } else {
        await axios.put(url + '/' + id, data);
      }
      await fetchData(url, setMachines);
    } catch (error) {
      console.log(error);
    } finally {
      setColor('');
      setType('');
      setModel('');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(url + '/' + id);
      await fetchData(url, setMachines);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async (id) => {
    try {
      const { data } = await axios.get(url + '/' + id);
      setModel(data.model);
      setType(data.type);
      setColor(data.color);
      setId(id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Left>
        <StyledTitle>Machine</StyledTitle>
        <Form onSubmit={handleSubmit}>
          <InputForm
            label="Modèle"
            type="text"
            placeholder="Saisir un nom"
            value={model}
            action={setModel}
            required
          />
          <SelectForm
            label="Type"
            options={types}
            value={type}
            action={setType}
            required
          />
          <SelectForm
            label="Couleur"
            options={colors}
            value={color}
            action={setColor}
            disabled={type !== 'Copieur'}
            required
          />
          <ButtonForm name="Valider" backgroundColor="teal" type="submit" />
        </Form>
      </Left>
      <Right>
        <StyledTitle>Liste des machines</StyledTitle>
        <StyledTable>
          <thead>
            <StyledTr>
              <StyledTh>Modèle</StyledTh>
              <StyledTh>Type</StyledTh>
              <StyledTh>Color</StyledTh>
              <StyledTh>Action</StyledTh>
            </StyledTr>
          </thead>
          <tbody>
            {machines.map((machine) => (
              <StyledTr key={machine.id}>
                <StyledTd>{machine.model}</StyledTd>
                <StyledTd>{machine.type}</StyledTd>
                <StyledTd>{machine.color}</StyledTd>
                <StyledTd>
                  <ButtonForm
                    name="Editer"
                    backgroundColor="#33B8FF"
                    onClick={() => handleEdit(machine.id)}
                  />{' '}
                  <ButtonForm
                    name="Supprimer"
                    backgroundColor="#FF5733"
                    onClick={() => handleDelete(machine.id)}
                  />
                </StyledTd>
              </StyledTr>
            ))}
          </tbody>
        </StyledTable>
      </Right>
    </Container>
  );
}
