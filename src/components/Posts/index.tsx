import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "antd";
import styled from "styled-components";
import { Spinner } from "components/Spinner";
import { postsActions, postsSelectors } from "data/posts";
import { DEFAULT_PAGE_SIZE } from "data/posts/types";
import { Post } from "./components/Post";
import { Search } from "./components/Search";

const Container = styled.div`
  min-height: calc(100vh - 40px);
  display: flex;
  flex-direction: column;
`;

const PostsContainer = styled.div`
  flex-grow: 1;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-self: flex-end;
`;

const EmptyStateContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Posts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(postsSelectors.isLoading);
  const posts = useSelector(postsSelectors.getPaginatedPosts);
  const error = useSelector(postsSelectors.getError);
  const total = useSelector(postsSelectors.getTotal);
  const page = useSelector(postsSelectors.getPage);

  const renderPosts = () => {
    if (error) {
      return <EmptyStateContainer>{error}</EmptyStateContainer>;
    }

    return posts.length > 0 ? (
      <div>
        {posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    ) : (
      <EmptyStateContainer>No data</EmptyStateContainer>
    );
  };

  const handlePageChange = (newPage: number) => {
    dispatch(postsActions.setPage({ page: newPage }));
  };

  return (
    <Container>
      <Search />
      <PostsContainer>{isLoading ? <Spinner /> : renderPosts()}</PostsContainer>
      {posts.length > 0 && (
        <PaginationContainer>
          <Pagination
            onChange={handlePageChange}
            data-testid="pagination"
            current={page}
            defaultPageSize={DEFAULT_PAGE_SIZE}
            total={total}
          />
        </PaginationContainer>
      )}
    </Container>
  );
};

export { Posts };
