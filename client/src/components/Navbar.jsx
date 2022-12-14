import styled from 'styled-components';

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

export default function Navbar() {
  return (
    <Container>
      <Logo>.mfpSAV</Logo>
      <Hamburger>
        <Bare></Bare>
        <Bare></Bare>
        <Bare></Bare>
      </Hamburger>
    </Container>
  );
}
