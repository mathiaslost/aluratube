import React from "react";
import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
  const estilosDaHomePage = {
    // backgroundColor: "red"
  };
  const [valorDaBusca, setValorDoFiltro] = React.useState("");

  return (
    <>
      <CSSReset />
      <div style={estilosDaHomePage}>
        {/* Prop Drilling */}
        <Menu valorDoFiltro={valorDaBusca} setValorDoFiltro={setValorDoFiltro} />
        <Header />
        <Timeline searchValue={valorDaBusca} playlists={config.playlists}>
          Conteúdo
        </Timeline>
        <Favourites params={config.favourites} />
      </div>
    </>
  );
}

export default HomePage

const StyledBanner = styled.section`
  .banner {
    height: 230px;
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
  }
  @media (max-width: 600px) {
    .banner img {
      width: 100vw;
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

// const StyledBanner = styled.div`
//   background-color: blue;
//   background-image: url(${({bg}) => bg});
//   /* background-image: url(${config.banner}); */
//   height: 230px;
// `;

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
`;
function Header() {
  return (
    <StyledHeader>
      {/* <StyledBanner bg={config.banner} /> */}
      <StyledBanner>
        <div className="banner">
          <img src={config.banner} />
        </div>
      </StyledBanner>

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

function Timeline({ searchValue, ...propriedades }) {
  const playlistNames = Object.keys(propriedades.playlists);
  // Statement
  // Retorno por expressão
  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = propriedades.playlists[playlistName];
        return (
          <section key={playlistName}>
            <h2>{playlistName}</h2>
            <div>
              {videos
                .filter((video) => {
                  const titleNormalized = video.title.toLowerCase();
                  const searchValueNormalized = searchValue.toLowerCase();
                  return titleNormalized.includes(searchValueNormalized);
                })
                .map((video) => {
                  return (
                    <a key={video.url} href={video.url}>
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

const StyledFavourites = styled.div`
  .user-pic {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    padding: 15px;
  }
  span {
    display: flex;
    justify-content: center;
  }
  /* .float-container {
    float: left;
    overflow: hidden;
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: minmax(200px,1fr);
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
  } */
  a {
    text-decoration: none;
  }
  h2 {
    padding: 16px 32px;
  }
  section {
    width: 100%;
    padding: 0;
    overflow: hidden;
    padding: 16px 32px;
    #container {
      width: calc(100vw - 16px * 4);
      display: grid;
      grid-gap: 16px;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      grid-auto-flow: column;
      grid-auto-columns: minmax(150px, 1fr);
      overflow-x: scroll;
      scroll-snap-type: x mandatory;
      a {
        scroll-snap-align: start;
        overflow: hidden;
        span {
          padding-top: 8px;
          display: block;
          padding-right: 24px;
          text-align: center;
          color: ${({ theme }) => theme.textColorBase || "#222222"};
        }
      }
    }
  }
`
function Favourites(props) {
  const favs = Object.keys(props.params);

  return (
    <StyledFavourites>
      <h2>AluraTubes Favoritos</h2>
      <section key={props}>
        <div id="container">
          {favs.map((fav) => {
            const user = props.params[fav];
            return (
              <div id="teste" key={fav}>
                <a key={user.url} href={user.url}>
                  <img className="user-pic" src={`https://github.com/${user.gitpic}.png`} />
                  <span>{user.name}</span>
                </a>
              </div>
            )
          })}
        </div>
      </section>
    </StyledFavourites>
  )
}