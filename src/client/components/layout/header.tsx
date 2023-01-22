import styled from 'styled-components';
import Image from 'next/image';
import BulbIcon from '@/client/components/icon/bulb';
import HomeIcon from '@/client/components/icon/home';
import SearchIcon from '@/client/components/icon/search';

function Header() {
  const handleMenuClick = () => {
    console.log('menu click');
  };

  return (
    <HeaderWrapper>
      <Image src={'/scrap.png'} alt="scrap" width="120" height="50" />
      <MenuWrapper onClick={handleMenuClick}>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <IconButton>
          <HomeIcon />
        </IconButton>
        <IconButton>
          <BulbIcon />
        </IconButton>
      </MenuWrapper>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  padding: 45px 0 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1296px;
  width: 100%;
  @media ${({ theme }) => theme.device.desktop} {
    max-width: 952px;
  }
  @media ${({ theme }) => theme.device.laptop} {
    max-width: 630px;
  }
  @media ${({ theme }) => theme.device.tablet} {
    max-width: 364px;
  }
`;

const MenuWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const IconButton = styled.div`
  border-radius: 50%;
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #eee;
    transition: all 0.5s;
  }
`;

export default Header;
