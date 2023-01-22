import { postType } from '@/client/types/post';
import styled from 'styled-components';
import Image from 'next/image';

function Card({ title, image, description, author }: postType) {
  return (
    <Wrapper>
      <TextWrapper>
        <div>
          <Author>{author}</Author>
        </div>
        <Title>{title}</Title>
        <Desc>{description}</Desc>
      </TextWrapper>
      <div>
        <BigImage src={image} alt="image" width={300} height={200} />
      </div>
      <div>
        <SmallImage src={image} alt="image" width={120} height={120} />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 300px;
  height: 280px;
  background-color: #fff;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
    0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);

  /* box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2); */

  @media only screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    height: 120px;
    flex-direction: row-reverse;
  }
`;

const TextWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media only screen and (max-width: 768px) {
    padding: 15px;
  }
`;

const Title = styled.div`
  font-size: 1rem;
  color: #353535;
  font-weight: 700;
`;

const Author = styled.div`
  font-size: 0.75rem;
  color: #4332f0;
  font-weight: 700;
`;
const Desc = styled.div`
  font-size: 0.75rem;
  color: #767676;
`;

const BigImage = styled(Image)`
  object-fit: cover;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const SmallImage = styled(Image)`
  display: none;
  object-fit: cover;
  @media only screen and (max-width: 768px) {
    display: block;
  }
`;
export default Card;
