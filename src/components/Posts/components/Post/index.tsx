import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { Card } from "antd";
import styled from "styled-components";
import { postsActions } from "data/posts";
import { IPost } from "data/posts/types";

type TProps = {
  post: IPost;
};

const Container = styled.div`
  margin: 10px 0 10px 0;
`;

const Post: React.FC<TProps> = memo(({ post }) => {
  const dispatch = useDispatch();
  const {
    id: postId,
    body,
    title,
    user: { username },
  } = post;

  const handleOpenPost = () => {
    dispatch(postsActions.setActivePostId({ postId }));
  };

  return (
    <Container>
      <Card
        extra={<button onClick={handleOpenPost}>Comments</button>}
        title={title}
        headStyle={{ backgroundColor: "#d3d3d3" }}
      >
        <p>Author: {username}</p>
        <p>{body}</p>
      </Card>
    </Container>
  );
});

export { Post };
