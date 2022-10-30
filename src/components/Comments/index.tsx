import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Drawer } from "antd";
import { Spinner } from "components/Spinner";
import { postsActions, postsSelectors } from "data/posts";
import { commentsSelectors } from "data/comments";
import { Comment } from "./components/Comment";

const Comments: React.FC = () => {
  const dispatch = useDispatch();
  const postId = useSelector(postsSelectors.getActivePostId);
  const isLoading = useSelector(commentsSelectors.isLoading);
  const error = useSelector(commentsSelectors.getError);
  const highLevelComments = useSelector(commentsSelectors.getHighLevelComments);

  const handleClose = () => {
    dispatch(postsActions.setActivePostId({ postId: null }));
  };

  const renderComments = () => {
    if (error) {
      return error;
    }

    return highLevelComments.map((c) => <Comment key={c.id} comment={c} />);
  };

  return (
    <Drawer
      title="Comments"
      placement="right"
      onClose={handleClose}
      open={!!postId}
      width="40%"
    >
      {isLoading ? <Spinner /> : renderComments()}
    </Drawer>
  );
};

export { Comments };
