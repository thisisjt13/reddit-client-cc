import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostList from './components/PostList';
import SearchBar from './components/SearchBar';
import PostDetail from './components/PostDetail.js';

const App = () => (
  <Router>
    <div className="App">
      <SearchBar />
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/post/:id" element={<PostDetail />} />
      </Routes>
    </div>
  </Router>
);

export default App;