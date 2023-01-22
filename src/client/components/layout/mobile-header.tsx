import styled from 'styled-components';
import Image from 'next/image';
import { useState } from 'react';
import BulbIcon from '@/client/components/icon/bulb';
import DeleteIcon from '@/client/components/icon/delete';
import HomeIcon from '@/client/components/icon/home';
import SearchIcon from '@/client/components/icon/search';
import HamburgerIcon from '@/client/components/icon/hamburger';

function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(true);
    console.log('menu click');
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <HeaderWrapper>
      <Image src={'/scrap.png'} alt="scrap" width="120" height="50" />
      <MobileMenuWrapper>
        <IconButton onClick={handleMenuClick}>
          <HamburgerIcon />
        </IconButton>
      </MobileMenuWrapper>
      <MobileNav className={isOpen ? 'on' : ''}>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <IconButton>
          <HomeIcon />
        </IconButton>
        <IconButton>
          <BulbIcon />
        </IconButton>
        <CloseButton onClick={handleCloseMenu}>
          <DeleteIcon />
        </CloseButton>
      </MobileNav>
    </HeaderWrapper>
  );
}

const CloseButton = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

const MobileNav = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  width: 100%;
  height: 100%;
  transform: translateX(100%);
  transition: all 0.3s ease-out 0s;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &.on {
    transform: translateX(0);
  }
`;

const HeaderWrapper = styled.header`
  padding: 45px 0 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  max-width: 364px;
`;

const MobileMenuWrapper = styled.div`
  display: none;

  @media ${({ theme }) => theme.device.tablet} {
    display: block;
  }
`;

const IconButton = styled.div`
  border-radius: 50%;
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #eee;
    transition: all 0.5s;
  }
`;
export default MobileHeader;
