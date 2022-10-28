import React from "react";
import { Drawer } from 'antd';
import { useSelector } from "react-redux";
import { commentsSelectors } from "../../data/comments";

type TProps = {
  onSetPostId: (postId: number | null) => void;
  postId: number | null;
};


const Comments: React.FC<TProps> = ({ onSetPostId, postId }) => {
  const comments = useSelector(commentsSelectors.getComments);
  
  const handleClose = () => {
    onSetPostId(null);
  }

  return (<Drawer 
    title="Comments" 
    placement="right" 
    onClose={handleClose} 
    open={!!postId}
    width='40%'
  >
    {comments.map((c) => <p>{c.body}</p>)}
  </Drawer>)
};

export { Comments };