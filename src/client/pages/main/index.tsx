import Card from '@/client/components/card';
import Layout from '@/client/components/layout';
import styled from 'styled-components';

const dummy = [
  {
    id: '1',
    url: '',
    title: '수미칩은 맛있다. 왜냐하면 맛있기 때문이다.',
    tags: ['수미칩', '세벳돈 조아요 >-<'],
    image:
      'https://images.unsplash.com/photo-1673379324645-21a670fc74c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzODQwNTZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzQzNzgwMDI&ixlib=rb-4.0.3&q=80&w=400',
    author: '수미칩',
    description: '수미칩은 맛있다. 왜냐하면 수미칩은 맛있기 때문이다.',
    createdAt: undefined,
    view: 0,
  },
  {
    id: '2',
    url: '',
    title: '수미칩은 맛있다. 왜냐하면 맛있기 때문이다.',
    tags: ['수미칩', '세벳돈 조아요 >-<'],
    image:
      'https://images.unsplash.com/photo-1673379324645-21a670fc74c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzODQwNTZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzQzNzgwMDI&ixlib=rb-4.0.3&q=80&w=400',
    author: '수미칩',
    description: '수미칩은 맛있다. 왜냐하면 수미칩은 맛있기 때문이다.',
    createdAt: undefined,
    view: 0,
  },
  {
    id: '3',
    url: '',
    title: '수미칩은 맛있다. 왜냐하면 맛있기 때문이다.',
    tags: ['수미칩', '세벳돈 조아요 >-<'],
    image:
      'https://images.unsplash.com/photo-1673379324645-21a670fc74c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzODQwNTZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzQzNzgwMDI&ixlib=rb-4.0.3&q=80&w=400',
    author: '수미칩',
    description: '수미칩은 맛있다. 왜냐하면 수미칩은 맛있기 때문이다.',
    createdAt: undefined,
    view: 0,
  },
  {
    id: '4',
    url: '',
    title: '수미칩은 맛있다. 왜냐하면 맛있기 때문이다.',
    tags: ['수미칩', '세벳돈 조아요 >-<'],
    image:
      'https://images.unsplash.com/photo-1673379324645-21a670fc74c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzODQwNTZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzQzNzgwMDI&ixlib=rb-4.0.3&q=80&w=400',
    author: '수미칩',
    description: '수미칩은 맛있다. 왜냐하면 수미칩은 맛있기 때문이다.',
    createdAt: undefined,
    view: 0,
  },
];

function Main() {
  return (
    <Layout>
      <CardContainer>
        {dummy.map((data) => (
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
