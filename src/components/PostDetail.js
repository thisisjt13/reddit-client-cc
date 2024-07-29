import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const DetailContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f9f9f9;
`;

const DetailTitle = styled.h1`
  margin-bottom: 20px;
`;

const DetailImage = styled.img`
  max-width: 100%;
  height: auto;
  margin: 10px 0;
`;

const Comment = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  border-top: 1px solid #ddd;
`;

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`https://www.reddit.com/comments/${id}.json`);
        const postData = response.data[0].data.children[0].data;
        const commentsData = response.data[1].data.children.map(child => child.data);
        setPost(postData);
        setComments(commentsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching post details:", error);
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!post) return <p>No post found</p>;

  return (
    <DetailContainer>
      <DetailTitle>{post.title}</DetailTitle>
      {post.selftext && <p>{post.selftext}</p>}
      {post.url && post.url.match(/\.(jpeg|jpg|gif|png)$/) && <DetailImage src={post.url} alt={post.title} />}
      <h3>Comments</h3>
      {comments.length === 0 ? <p>No comments available</p> : comments.map(comment => (
        <Comment key={comment.id}>
          <p><strong>{comment.author}</strong>: {comment.body}</p>
        </Comment>
      ))}
    </DetailContainer>
  );
};

export default PostDetail;