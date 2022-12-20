import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import ButtonForm from '../components/ButtonForm';
import InputForm from '../components/InputForm';
import SelectForm from '../components/SelectForm';
import { fetchData } from '../utils/api';
import TableForm from '../components/TableForm';

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

export default function Technician() {
  const roles = [
    { id: 1, value: 'Administrateur' },
    { id: 2, value: 'Technicien' },
  ];
  const tableTitle = [
    { id: 1, value: 'Nom' },
    { id: 2, value: 'Role' },
    { id: 3, value: 'Action' },
  ];
  const url = 'http://localhost:5000/technicians';

  const [technician, setTechnician] = useState({
    name: '',
    role: '',
    id: null,
  });

  const [techs, setTechs] = useState([]);

  useEffect(() => {
    fetchData(url, setTechs);
  }, []);

  const handleSubmit = async (e) => {
    const data = { name: technician.name, role: technician.role };

    e.preventDefault();
    try {
      if (!technician.id) {
        await axios.post(url, data);
      } else {
        await axios.put(url + '/' + technician.id, data);
      }
      await fetchData(url, setTechs);
    } catch (error) {
      console.log(error);
    } finally {
      setTechnician((prev) => ({ ...prev, name: '', role: '' }));
    }
  };

  console.log(technician);

  return (
    <Container>
      <Left>
        <StyledTitle>Technicien</StyledTitle>
        <Form onSubmit={handleSubmit}>
          <InputForm
            label="Nom"
            type="text"
            name="name"
            placeholder="Saisir un nom"
            value={technician.name}
            action={setTechnician}
            required
          />
          <SelectForm
            label="Role"
            name="role"
            options={roles}
            value={technician.role}
            action={setTechnician}
            required
          />
          <ButtonForm name="Valider" backgroundColor="teal" type="submit" />
        </Form>
      </Left>
      <Right>
        <StyledTitle>Liste des techniciens</StyledTitle>
        <TableForm titles={tableTitle} data={techs} />
      </Right>
    </Container>
  );
}
