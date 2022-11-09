import styled from "styled-components";

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

export default function Favourites(props) {
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