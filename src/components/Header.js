import styled from "styled-components";

export const StyledBanner = styled.section`
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

// export const StyledBanner = styled.div`
//   background-color: blue;
//   background-image: url(${({bg}) => bg});
//   /* background-image: url(${config.banner}); */
//   height: 230px;
// `;

export const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.backgroundLevel1};
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

export default function Header({props}) {
  return (
    <StyledHeader>
      {/* <StyledBanner bg={props.banner} /> */}
      <StyledBanner>
        <div className="banner">
          <img src={props.banner} />
        </div>
      </StyledBanner>

      <section className="user-info">
        <img className="profile-picture" src={`https://github.com/${props.github}.png`} />
        <div>
          <h2>
            {props.name}
          </h2>
          <p>
            {props.job}
          </p>
        </div>
      </section>
    </StyledHeader>
  )
}