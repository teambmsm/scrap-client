import styled from 'styled-components';

function Layout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  max-width: 375px;
  min-width: 375px;
  width: 100%;
  background-color: #fff;
  height: 100vh;
`;
export default Layout;
