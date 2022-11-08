import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
  const estilosDaHomePage = {
    // backgroundColor: "red"
  };

  return (
    <>
      <CSSReset />
      <div style={estilosDaHomePage}>
      <Menu />
      <Header />
      <Timeline playlists={config.playlists}>
        Conteúdo
      </Timeline>
    </div>    
    </>
  );
}

export default HomePage

const StyledHeader = styled.div`
  .profile-picture {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
  .banner {
    width: 100%;
    height: 500px;
    border: 5px solid red;
  }
  .banner img {
    flex-shrink: 0;
    width: 100%;
    min-width: 100%;
    min-height: 100%;
  }
`;
function Header() {
  return (
    <StyledHeader>
      <section>
        <div className="banner">
          <img src="https://images.unsplash.com/photo-1496065187959-7f07b8353c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
        </div>
      </section>
      <section className="user-info">
        <img className="profile-picture" src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>
            {config.name}
          </h2>
          <p>
            {config.job}
          </p>
        </div>
      </section>
    </StyledHeader>
  )
}

function Timeline(propriedades) {
  const playlistNames = Object.keys(propriedades.playlists);
  // Statement
  // Retorno por expressão
  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = propriedades.playlists[playlistName];
        console.log(playlistName);
        console.log(videos);
          return (
            <section>
              <h2>{playlistName}</h2>
              <div>
                {videos.map((video) => {
                    return (
                        <a href={video.url}>
                            <img src={video.thumb} />
                            <span>
                                {video.title}
                            </span>
                        </a>
                    )
                })}
              </div>
            </section>
          )
      })}
    </StyledTimeline>
  )
}