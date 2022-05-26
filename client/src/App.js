import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Container } from '@material-ui/core';
import { useStyles } from './styles';

import { GetAllPosts } from './redux/actions/post.actions';

import Navbar from './components/navigation/Navbar';
import Home from './components/home/Home';
import Auth from './components/auth/Auth';
import PostDetails from './components/postDetails/PostDetails';

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllPosts());
  }, [dispatch]);

  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <Container className={classes.mainContainer} maxWidth="xl">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Navigate to="/posts" replace />} />
          <Route exact path="/posts" element={<Home />} />
          <Route exact path="/posts/search" element={<Home />} />
          <Route exact path="/posts/:post_id" element={<PostDetails />} />

          <Route
            exact
            path="/auth"
            element={!user ? <Auth /> : <Navigate to="/posts" replace />}
          />
        </Routes>
      </BrowserRouter>
    </Container>
  );
};

export default App;
