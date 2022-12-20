import styled from 'styled-components';

import ButtonForm from './ButtonForm';

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

export default function TableForm({ titles, data }) {
  const keys = (obj) => {
    let res = [];
    const array = Object.keys(obj);
    for (const elt of array) {
      if (elt !== 'id') {
        res.push(elt);
      }
    }
    return res;
  };

  // const handleDelete = async (id) => {
  //   try {
  //     await axios.delete(url + '/' + id);
  //     await fetchData(url, setTechs);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const handleEdit = async (id) => {
  //   try {
  //     const { data } = await axios.get(url + '/' + id);
  //     setName(data.name);
  //     setRole(data.role);
  //     setId(id);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <StyledTable>
      <thead>
        <StyledTr>
          {titles.map((title) => (
            <StyledTh key={title.id}>{title.value}</StyledTh>
          ))}
        </StyledTr>
      </thead>
      <tbody>
        {data.map((elt) => (
          <StyledTr key={elt.id}>
            {keys(elt).map((key, index) => (
              <StyledTd key={index}>{elt[key]}</StyledTd>
            ))}
            <StyledTd>
              <ButtonForm
                name="Editer"
                backgroundColor="#33B8FF"
                // onClick={() => handleEdit(tech.id)}
              />{' '}
              <ButtonForm
                name="Supprimer"
                backgroundColor="#FF5733"
                // onClick={() => handleDelete(tech.id)}
              />
            </StyledTd>
          </StyledTr>
        ))}
      </tbody>
    </StyledTable>
  );
}
