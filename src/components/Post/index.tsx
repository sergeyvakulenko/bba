import React from 'react';
import { Card } from 'antd';
import { IPost } from '../../data/posts/types';
import styles from './Post.module.sass';
import { useDispatch } from 'react-redux';
import { postsActions } from '../../data/posts';

type TProps = {
  onSetPostId: (postId: number) => void,
  post: IPost;
}

const Post: React.FC<TProps> = ({ onSetPostId, post }) => {
  const dispatch = useDispatch();

  const handleOpenPost = () => {
    const { id: postId } = post;
    onSetPostId(postId);
    dispatch(postsActions.setActivePostId({ postId }));
  }

  return (<div className={styles.container}>
    <Card 
      key={post.id} 
      extra={<button onClick={handleOpenPost}>Comments</button>}
      title={post.title} 
      headStyle={{ backgroundColor: '#d3d3d3'}}
    >
      {post.body}
    </Card>
  </div>);
};

export { Post };