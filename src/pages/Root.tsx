import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Posts } from '../components/Posts';
import { Comments } from '../components/Comments';
import { postsActions } from '../data/posts';
import { usersActions } from '../data/users';
import { tagsActions } from '../data/tags';

const Container = styled.div`
  padding: 20px;
  background-color: #fafafa;
  min-height: 100vh;
`;

const Root = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postsActions.fetch());
    dispatch(usersActions.fetch());
    dispatch(tagsActions.fetch());
  }, [dispatch]);

  return (
    <Container>
      <Posts />
      <Comments />
    </Container>
  );
};

export { Root };