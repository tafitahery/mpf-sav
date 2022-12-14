import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 200px;
  height: calc(100vh - 50px);
  position: absolute;
  right: 0;
  background-color: black;
  color: lightgray;
  display: flex;
  align-items: center;
`;

const List = styled.ul`
  list-style: none;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ListItem = styled.li`
  font-size: 24px;
  &:hover {
    font-size: 26px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export default function Menu() {
  return (
    <Container>
      <List>
        <ListItem>
          <StyledLink to="/">Intervention</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to="/client">Client</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to="/machine">Machine</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to="/technician">Technicien</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to="/report">Rapport</StyledLink>
        </ListItem>
      </List>
    </Container>
  );
}
