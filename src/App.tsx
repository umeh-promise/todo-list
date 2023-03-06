import styled from 'styled-components';

function App() {
  return (
    <Wrapper>
      <h1>UNIZIK PORTAL REDESIGN</h1>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;

  h1 {
    font-weight: 800;
    font-size: 6rem;
  }
`;
