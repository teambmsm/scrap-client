import { ReactNode } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import HamburgerIcon from '@/client/components/icon/hamburger';

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
        <Image src={'/scrap.png'} alt="scrap" width="120" height="50" />
        <MenuWrapper onClick={handleMenuClick}>
          <HamburgerIcon />
        </MenuWrapper>
      </HeaderWrapper>
      <MainWrapper>{children}</MainWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-width: 100vw;
  flex: 1;
  background-color: #ffffff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainWrapper = styled.div`
  max-width: 1296px;
  width: 100%;
  @media screen and (max-width: 1439px) {
    max-width: 952px;
    padding-bottom: 182px;
  }
  @media screen and (max-width: 1023px) {
    padding-bottom: 172px;
    max-width: 630px;
  }
  @media only screen and (max-width: 768px) {
    max-width: 375px;
    padding-left: 12px;
    padding-right: 12px;
  }
`;

const HeaderWrapper = styled.header`
  padding: 45px 0 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1296px;
  width: 100%;
  @media screen and (max-width: 1439px) {
    max-width: 952px;
  }
  @media screen and (max-width: 1023px) {
    max-width: 630px;
  }
  @media only screen and (max-width: 768px) {
    max-width: 364px;
  }
`;

const MenuWrapper = styled.div`
  cursor: pointer;
`;
export default Layout;
