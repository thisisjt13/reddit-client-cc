import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PostContainer = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 4px;
  background-color: #f9f9f9;
`;

const PostTitle = styled.h2`
  margin: 0 0 10px;
`;

const PostImage = styled.img`
  max-width: 100%;
  height: auto;
  margin: 10px 0;
`;

const PostLink = styled(Link)`
  color: #007bff;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Comment = styled.div`
  margin-top: 10px;
  padding: 10px;
  border-top: 1px solid #ddd;
`;

const Post = ({ post }) => (
  <PostContainer>
    <PostTitle>{post.title}</PostTitle>
    {post.url && post.url.match(/\.(jpeg|jpg|gif|png)$/) && <PostImage src={post.url} alt={post.title} />}
    <p>{post.selftext}</p>
    <PostLink to={`/post/${post.id}`}>Read more and view comments</PostLink>
    <div>
      <h3>Top Comments:</h3>
      {post.comments && post.comments.length > 0 ? post.comments.map(comment => (
        <Comment key={comment.id}>
          <p><strong>{comment.author}</strong>: {comment.body}</p>
        </Comment>
      )) : <p>No comments available</p>}
    </div>
  </PostContainer>
);

export default Post;