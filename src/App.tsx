import styled from 'styled-components';

import logo from './assets/icons/logo.svg';

function App() {
  return (
    <Wrapper>
      <img src={logo} alt='logo' className='logo' />
      <h1 className='text-[#213547]'>UNIZIK PORTAL REDESIGN</h1>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .logo {
    width: 20rem;
    object-fit: cover;
  }

  h1 {
    font-weight: 800;
    font-size: 6rem;
  }
`;
