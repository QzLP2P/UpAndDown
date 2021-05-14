import React from "react";
import Game from "../Game";
import Footer from "./Footer";
import Header from "./Header";
import { Container, StyledHR } from "./style";

const Home: React.FC<{}> = () => {
  return (
    <Container data-cy='homeContainer'>
      <Header />
      <Game />
      <StyledHR/>
      <Footer />
    </Container>
  );
};

export default Home;
