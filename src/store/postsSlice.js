import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (subreddit = 'ProgrammerHumor') => {
  const response = await axios.get(`https://www.reddit.com/r/${subreddit}.json`);
  const posts = response.data.data.children.map(child => child.data);

  // Fetch top-level comments for each post
  const postsWithComments = await Promise.all(posts.map(async post => {
    const commentsResponse = await axios.get(`https://www.reddit.com/comments/${post.id}.json`);
    const topComments = commentsResponse.data[1].data.children.map(child => child.data).slice(0, 3); // Get top 3 comments
    return { ...post, comments: topComments };
  }));

  return postsWithComments;
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    loading: false,
    posts: [],
    error: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
        state.error = '';
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.posts = [];
        state.error = action.error.message;
      });
  },
});

export default postsSlice.reducer;