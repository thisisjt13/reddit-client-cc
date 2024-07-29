# Reddit Client

A minimal read-only version of Reddit using React, Redux Toolkit, React Router, and styled-components.

## Features

- Search for posts in any subreddit.
- Display posts with high-resolution images.
- View top comments for each post on the main screen.
- Detailed view for each post with additional comments.

## Project Structure
src/
├── components/
│   ├── Post.js
│   ├── PostList.js
│   ├── PostDetail.js
│   └── SearchBar.js
├── store/
│   ├── postsSlice.js
│   └── store.js
├── App.js
├── index.js
└── api.js

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/reddit-client.git
cd reddit-client
```

2.	Install dependencies:
```
npm install
```
3.	Run the project:
```
npm start
```
## Components

# SearchBar

A search bar to search for posts in different subreddits.

# Post

Displays an individual post with title, image, and top comments.

# PostList

Fetches and displays a list of posts from the subreddit.

# PostDetail

Displays detailed view of a post with all comments.

# Redux Slice

# postsSlice.js

Contains the Redux slice for fetching and managing posts and their comments.

# store.js

Configures and exports the Redux store.

# Styling

Styled using styled-components for scoped and dynamic styling.

# Global Styles

Global styles are applied using createGlobalStyle from styled-components.

# Component Styles

Each component is styled using styled-components to encapsulate styles.

## Running the Project

After setting up, you can run the project with:
```
npm start
```
