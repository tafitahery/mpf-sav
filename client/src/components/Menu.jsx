import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 200px;
  height: calc(100vh - 50px);
  position: absolute;
  right: 0;
  background-color: black;
  color: lightgray;
  display: ${({ isHidden }) => (isHidden ? 'none' : 'flex')};
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

export default function Menu({ isHidden, setIsHidden }) {
  const handleClick = () => {
    setIsHidden(true);
  };

  return (
    <Container isHidden={isHidden}>
      <List>
        <ListItem>
          <StyledLink to="/" onClick={handleClick}>
            Intervention
          </StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to="/client" onClick={handleClick}>
            Client
          </StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to="/machine" onClick={handleClick}>
            Machine
          </StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to="/technician" onClick={handleClick}>
            Technicien
          </StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to="/report" onClick={handleClick}>
            Rapport
          </StyledLink>
        </ListItem>
      </List>
    </Container>
  );
}
