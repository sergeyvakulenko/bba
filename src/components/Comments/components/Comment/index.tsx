import React, { memo, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Avatar, Comment as AntdComment } from 'antd';
import styled from 'styled-components';
import { IComment } from "../../../../data/comments/types";
import { commentsSelectors } from '../../../../data/comments';
import { Tags } from '../Tags';

type TProps = {
  comment: IComment;
};

const Container = styled.div`
  min-width: 80%;
`;

const Comment: React.FC<TProps> = memo(({ comment }) => {
  const { id: commentId, body, name, tags } = comment;
  const comments = useSelector(commentsSelectors.getChildComments);
  const childComments = useMemo(
    () => comments.filter((c) => c.parentId === commentId), 
    [comments, commentId]
  );

  return (
    <Container>
      <AntdComment
        author={name}
        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt={name} />}
        content={
          <>
            <p>{body}</p>
            {tags && <Tags commentId={commentId} tags={tags} />}
          </>
        }
      >
        {childComments.map((c) => <Comment key={c.id} comment={c} />)}
      </AntdComment>
    </Container>
  );
});

export { Comment };