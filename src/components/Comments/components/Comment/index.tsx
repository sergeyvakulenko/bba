import React, { memo, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Button, Comment as AntdComment, Form, Input } from "antd";
import styled from "styled-components";
import { commentsActions, commentsSelectors } from "data/comments";
import { IComment } from "data/comments/types";
import { CURRENT_USER } from "data/current_user/mock";
import { postsSelectors } from "data/posts";
import { Tags } from "../Tags";

const { TextArea } = Input;

type TEditorProps = {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: () => void;
  value: string;
};

const Container = styled.div`
  min-width: 80%;
`;

const Editor = ({ onChange, onSubmit, value }: TEditorProps) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" onClick={onSubmit}>
        Add Comment
      </Button>
    </Form.Item>
  </>
);

type TProps = {
  comment: IComment;
};

const Comment: React.FC<TProps> = memo(({ comment }) => {
  const dispatch = useDispatch();

  const { id: commentId, body, name, tags } = comment;
  const postId = useSelector(postsSelectors.getActivePostId);
  const comments = useSelector(commentsSelectors.getChildComments);
  const childComments = useMemo(
    () => comments.filter((c) => c.parentId === commentId),
    [comments, commentId]
  );

  const [replyOpen, setReplyOpen] = useState(false);
  const [replyText, setReplyText] = useState("");

  const handleReplyClick = () => {
    setReplyOpen(!replyOpen);
  };

  const handleReplyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReplyText(e.target.value);
  };

  const handleReplySubmit = () => {
    if (postId) {
      dispatch(
        commentsActions.create({
          comment: {
            parentId: commentId,
            name: CURRENT_USER.name,
            email: CURRENT_USER.email,
            body: replyText,
            postId: postId,
          },
        })
      );
      setReplyOpen(false);
    }
  };

  const renderReply = () => {
    return (
      <AntdComment
        content={
          <Editor
            onChange={handleReplyChange}
            onSubmit={handleReplySubmit}
            value={replyText}
          />
        }
      />
    );
  };

  return (
    <Container>
      <AntdComment
        actions={[
          <span key="comment-basic-reply-to" onClick={handleReplyClick}>
            Reply
          </span>,
        ]}
        author={name}
        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt={name} />}
        content={
          <>
            <p>{body}</p>
            {tags && <Tags commentId={commentId} tags={tags} />}
          </>
        }
      >
        {replyOpen && renderReply()}
        {childComments.map((c) => (
          <Comment key={c.id} comment={c} />
        ))}
      </AntdComment>
    </Container>
  );
});

export { Comment };
