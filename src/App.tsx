import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Post } from './components/Post';
import { Comments } from './components/Comments';
import { postsActions, postsSelectors } from './data/posts';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const posts = useSelector(postsSelectors.getPosts);
  const [postId, setPostId] = useState<number | null>(null);

  const handleSetPostId = (postId: number | null) => {
    setPostId(postId);
  };

  useEffect(() => {
    dispatch(postsActions.fetch());
  }, [dispatch]);

  return (
    <div className="App">
      <div>
        {posts.map((p) => 
          <Post post={p} onSetPostId={handleSetPostId} />
        )}
      </div>
      <Comments 
        onSetPostId={handleSetPostId} 
        postId={postId}
      />
    </div>
  );
}

export default App;
