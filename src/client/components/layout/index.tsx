import { ReactNode } from 'react';
import styled from 'styled-components';
import SearchIcon from '@/client/components/icon/search';
import BulbIcon from '@/client/components/icon/bulb';
import HomeIcon from '@/client/components/icon/home';
import Header from '@/client/components/layout/header';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <Wrapper>
      <Header />
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
  @media ${({ theme }) => theme.device.desktop} {
    max-width: 952px;
    padding-bottom: 182px;
  }
  @media ${({ theme }) => theme.device.laptop} {
    max-width: 630px;
    padding-bottom: 172px;
  }
  @media ${({ theme }) => theme.device.tablet} {
    max-width: 364px;
    padding-left: 12px;
    padding-right: 12px;
  }
`;

export default Layout;
