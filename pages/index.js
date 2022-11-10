import React from "react";
import config from "../config.json";
import Menu from "../src/components/Menu";
import Header from "../src/components/Header";
import Timeline from "../src/components/Timeline";
import Favourites from "../src/components/Favourites";

import Home, { StyledHome } from "../src/components/Home";

// import styled from "styled-components";

function HomePage() {
  const [valorDaBusca, setValorDoFiltro] = React.useState("");

  return (
    <>
      {/* <div style={estilosDaHomePage}> */}
      <StyledHome>
        {/* Prop Drilling */}
        <Menu valorDoFiltro={valorDaBusca} setValorDoFiltro={setValorDoFiltro} />
        <Header props={config} />
        <Timeline searchValue={valorDaBusca} playlists={config.playlists}>
          Conteúdo
        </Timeline>
        <Favourites params={config.favourites} />
      </StyledHome>
    </>
  );
}

export default HomePage