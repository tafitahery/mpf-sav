import styled from 'styled-components';

import Title from '../components/Title';

const Container = styled.div`
  height: 50px;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

const Logo = styled.span`
  font-size: 32px;
  font-weight: 800;
`;

const Hamburger = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 50%;
  cursor: pointer;
`;

const Bare = styled.span`
  width: 30px;
  height: 3px;
  background-color: white;
`;

export default function Navbar({ isHidden, setIsHidden }) {
  const name = window.location.href.split('/')[3];
  const title = {
    '': 'Intervention',
    machine: 'Machine',
    client: 'Client',
    technician: 'Technicien',
    report: 'Rapport',
  };

  return (
    <Container>
      <Logo>.mfpSAV</Logo>
      <Title title={title[name]} />
      <Hamburger onClick={() => setIsHidden(!isHidden)}>
        <Bare></Bare>
        <Bare></Bare>
        <Bare></Bare>
      </Hamburger>
    </Container>
  );
}
