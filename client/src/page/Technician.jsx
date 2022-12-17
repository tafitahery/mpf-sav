import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import ButtonForm from '../components/ButtonForm';
import InputForm from '../components/InputForm';
import SelectForm from '../components/SelectForm';

const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 50%;
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

export default function Technician() {
  const options = [
    { id: 1, role: 'Administrateur' },
    { id: 2, role: 'Technicien' },
  ];

  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    fetchTech();
  }, []);

  const fetchTech = async () => {
    const { data } = await axios.get('http://localhost:5000/technicians');
    setTechs(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/technicians', { name, role });
      await fetchTech();
    } catch (error) {
      console.log(error);
    } finally {
      setRole('');
      setName('');
    }
  };

  return (
    <Container>
      <Left>
        <StyledTitle>Technicien</StyledTitle>
        <Form onSubmit={handleSubmit}>
          <InputForm
            label="Nom"
            type="text"
            placeholder="Saisir un nom"
            value={name}
            action={setName}
          />
          <SelectForm
            label="Role"
            options={options}
            value={role}
            action={setRole}
          />
          <ButtonForm name="Valider" backgroundColor="teal" type="submit" />
        </Form>
      </Left>
      <Right>
        <StyledTitle>Liste des techniciens</StyledTitle>
        <StyledTable>
          <thead>
            <StyledTr>
              <StyledTh>Nom</StyledTh>
              <StyledTh>Role</StyledTh>
              <StyledTh>Action</StyledTh>
            </StyledTr>
          </thead>
          <tbody>
            {techs.map((tech) => (
              <StyledTr key={tech.id}>
                <StyledTd>{tech.name}</StyledTd>
                <StyledTd>{tech.role}</StyledTd>
                <StyledTd>
                  <ButtonForm name="Supprimer" backgroundColor="red" />
                </StyledTd>
              </StyledTr>
            ))}
          </tbody>
        </StyledTable>
      </Right>
    </Container>
  );
}
