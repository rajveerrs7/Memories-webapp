import React, { useState, useEffect } from "react";
import { Container, Grow, Grid } from "@mui/material";
import memories from "./images/memories.png";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import { AppBarStyled, Heading, Image } from "./styles";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";
import './index.css';

const App = () => {
  const [currentId, setCurrentId] = useState(null); // ✅ Add this
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBarStyled position="static" color="inherit">
        <Heading>Memories</Heading>
        <Image src={memories} alt="memories" height="60" />
      </AppBarStyled>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              {/* ✅ Pass setCurrentId so posts can trigger edits */}
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              {/* ✅ Pass currentId and setCurrentId to Form */}
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
