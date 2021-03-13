import React from "react";
import Game from "../Game";
import Footer from "./Footer";
import Header from "./Header";
import { Container } from "./style";

const Home: React.FC<{}> = () => {
  return (
    <Container>
      <Header />
      <Game />
      <Footer />
    </Container>
  );
};

export default Home;
