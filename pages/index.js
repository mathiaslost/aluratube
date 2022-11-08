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
    width: 100vw;
    padding: 16px 32px;
    gap: 16px;
  }
  .banner {
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    flex-direction: column;
  }
  .banner img {
    display: flex;
    flex-shrink: 0;
    min-height: 100%;
    min-width: 100vw;
  }
  @media (min-width: 600px) {
    .banner img {
    }
  }
  @media (max-width: 600px) {
    .banner img {
      height: 50%;
    }
  }
  section {
    width: 100vw;
    overflow: hidden;
    div {
      width: calc(100vw);
    }
  }
`;
function Header() {
  return (
    <StyledHeader>
      <section>
        <div className="banner">
          <img src={config.banner} />
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