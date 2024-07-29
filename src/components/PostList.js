import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../store/postsSlice';
import Post from './Post';
import styled from 'styled-components';

const PostListContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.posts);
  const loading = useSelector(state => state.posts.loading);
  const error = useSelector(state => state.posts.error);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <PostListContainer>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {posts.map(post => <Post key={post.id} post={post} />)}
    </PostListContainer>
  );
};

export default PostList;