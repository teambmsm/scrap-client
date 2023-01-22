import styled from 'styled-components';
import Image from 'next/image';
import BulbIcon from '@/client/components/icon/bulb';
import SearchIcon from '@/client/components/icon/search';
import UserIcon from '@/client/components/icon/user';

function Header() {
  return (
    <HeaderWrapper>
      <Image src={'/scrap.png'} alt="scrap" width="120" height="50" />
      <MenuWrapper>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <IconButton>
          <UserIcon />
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
  margin: auto;
  max-width: 1296px;
  width: 100%;
  @media ${({ theme }) => theme.device.desktop} {
    max-width: 952px;
  }
  @media ${({ theme }) => theme.device.laptop} {
    max-width: 630px;
  }
`;

const MenuWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 20px;

  @media ${({ theme }) => theme.device.tablet} {
    display: none;
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

export default Header;
