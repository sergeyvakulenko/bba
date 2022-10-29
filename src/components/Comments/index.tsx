import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Drawer } from 'antd';
import { postsActions, postsSelectors } from "../../data/posts";
import { commentsSelectors } from "../../data/comments";
import { Spinner } from '../Spinner';
import { Comment } from "./components/Comment";

const Comments: React.FC = () => {
  const dispatch = useDispatch();
  const postId = useSelector(postsSelectors.getActivePostId);
  const isLoading = useSelector(commentsSelectors.isLoading);
  const highLevelComments = useSelector(commentsSelectors.getHighLevelComments);
  
  const handleClose = () => {
    dispatch(postsActions.setActivePostId({ postId: null }));
  }

  return (
    <Drawer 
      title="Comments" 
      placement="right" 
      onClose={handleClose} 
      open={!!postId}
      width='40%'
    >
      {isLoading 
        ? <Spinner /> 
        : highLevelComments.map((c) => <Comment key={c.id} comment={c} />)
      }
    </Drawer>
  );
};

export { Comments };