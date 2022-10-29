import { useSelector } from 'react-redux';
import { postsSelectors } from '../../data/posts';
import { Spinner } from '../Spinner';
import { Post } from './components/Post';
import { Search } from './components/Search';

const Posts = () => {
  const isLoading = useSelector(postsSelectors.isLoading);
  const posts = useSelector(postsSelectors.getPosts);

  const renderPosts = () => {
    if (posts.length > 0) { 
      return posts.map((p) => <Post key={p.id} post={p} />);
    }

    return <div style={{ height: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>No data</div>;
  };

  return (
    <div>
      <Search />
      <div>
        {isLoading ? <Spinner /> : renderPosts()}
      </div>
    </div>
  );
};

export { Posts };