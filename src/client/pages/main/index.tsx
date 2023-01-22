import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from '@/client/components/card';
import Layout from '@/client/components/layout';
import { PostType } from '@/client/types/post';
import { requestGET } from '@/client/api';

function Main() {
  const [posts, setPosts] = useState<PostType[]>([]);

  const getPosts = async () => {
    const data = await requestGET('/post');
    setPosts(data);
  };
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Layout>
      <CardContainer>
        {posts.map((data) => (
          <Card {...data} key={data.id} />
        ))}
      </CardContainer>
    </Layout>
  );
}

const CardContainer = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  @media ${({ theme }) => theme.device.laptop} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${({ theme }) => theme.device.tablet} {
    display: flex;
    flex-direction: column;
  }
`;
export default Main;
