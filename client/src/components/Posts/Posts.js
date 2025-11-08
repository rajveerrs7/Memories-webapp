import React from "react";
import { Grid, CircularProgress } from "@mui/material";
import Post from "./Post/Post";
import { MainContainer, SmMargin, ActionDiv } from "./styles";
import { useSelector } from "react-redux";

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);

  return (
    !posts.length ? (
      <MainContainer>
        <CircularProgress />
      </MainContainer>
    ) : (
      <Grid container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={4} lg={3}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Posts;
