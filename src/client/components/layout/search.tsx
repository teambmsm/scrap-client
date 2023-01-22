import BulbIcon from '@/client/components/icon/bulb';
import DeleteIcon from '@/client/components/icon/delete';
import styled from 'styled-components';

interface SearchProps {
  isOpen: boolean;
  onClose: () => void;
}
function Search({ isOpen, onClose }: SearchProps) {
  return (
    <>
      <Wrapper className={isOpen ? 'open' : ''}>
        <InnerWrapper>
          <Inner>
            <CloseButton onClick={onClose}>
              <DeleteIcon />
            </CloseButton>
            <span>KaKao</span>
            <span>KaKao</span>
            <span>KaKao</span>
            <span>KaKao</span>
            <span>KaKao</span>
            <span>KaKao</span>
            <span>KaKao</span>
            <span>KaKao</span>
            <span>KaKao</span>
            <span>KaKao</span>
            <span>KaKao</span>
            <span>KaKao</span>
          </Inner>
        </InnerWrapper>
      </Wrapper>
    </>
  );
}

const Inner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

const Wrapper = styled.section`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transform: translateY(-100%);
  transition: all 0.2s;

  /* &::before {
    opacity: 0;
    background: #fff;
    transition: opacity 0.6s;
    position: absolute;
    width: 100%;
    height: 100%;
    content: '';
  } */

  &.open {
    display: block;

    z-index: 3000;
    transform: translateY(0);
    /* 
    &::before {
      opacity: 0.5;
    } */
  }
`;

const InnerWrapper = styled.div`
  background: #fff;
  /* opacity: 0; */
  transition: opacity 0.6s;
  opacity: 1;

  display: flex;
  flex-direction: column;
`;
export default Search;
