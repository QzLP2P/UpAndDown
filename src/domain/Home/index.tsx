import React from "react";
import { SplitNoMargin } from "../../shared/styledComponents/split";
import Game from "../Game";
import Footer from "./Footer";
import Header from "./Header";
import { Container } from "./style";

const Home: React.FC<{}> = () => {
  return (
    <Container data-cy='homeContainer'>
      <Header />
      <Game />
      <SplitNoMargin/>
      <Footer />
    </Container>
  );
};

export default Home;
