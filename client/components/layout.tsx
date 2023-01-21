import { ReactNode } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import HamburgerIcon from 'client/components/icon/hamburger';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  const handleMenuClick = () => {
    console.log('menu click');
  };

  return (
    <Wrapper>
      <HeaderWrapper>
        <Image src={'/logo.png'} alt="scrap" width="120" height="40" />
        <MenuWrapper onClick={handleMenuClick}>
          <HamburgerIcon />
        </MenuWrapper>
      </HeaderWrapper>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 375px;
  min-width: 375px;
  width: 100%;
  background-color: #fff;
  height: 100vh;
`;

const HeaderWrapper = styled.header`
  padding: 45px 15px 15px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuWrapper = styled.div`
  cursor: pointer;
`;
export default Layout;
