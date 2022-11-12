import React from "react";
import config from "../config.json";
import Menu from "../src/components/Menu";
import Header from "../src/components/Header";
import Timeline from "../src/components/Timeline";
import Favourites from "../src/components/Favourites";
import Home, { StyledHome } from "../src/components/Home";
import { createClient } from "@supabase/supabase-js";
import { videoService } from "../src/services/videoService";
// import styled from "styled-components";

function HomePage() {
  const service = videoService();
  const [valorDaBusca, setValorDoFiltro] = React.useState("");
  // const playlists = {
  //   "clipes": [],
  // };
  const [playlists, setPlaylists] = React.useState({ clipes: [] });

  React.useEffect(() => {
    service.getAllVideos()
      .then((dados) => {
        const novasPlaylists = { ...playlists };
        dados.data.forEach((video) => {
          if (!novasPlaylists[video.playlist]) novasPlaylists[video.playlist] = [];
          novasPlaylists[video.playlist].push(video);
        })
        setPlaylists(novasPlaylists);
      });
  }, []);



  return (
    <>
      {/* <div style={estilosDaHomePage}> */}
      <StyledHome>
        {/* Prop Drilling */}
        <Menu valorDoFiltro={valorDaBusca} setValorDoFiltro={setValorDoFiltro} />
        <Header props={config} />
        <Timeline searchValue={valorDaBusca} playlists={playlists}>
          Conteúdo
        </Timeline>
        <Favourites params={config.favourites} />
      </StyledHome>
    </>
  );
}

export default HomePage