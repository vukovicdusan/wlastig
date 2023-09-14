import styled from "styled-components";

export const ServicesHeroStyled = styled.div`
  color: var(--text-light);
  margin-block-start: 65px;
  .hero-background {
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${(props) => props.backgroundImg || ""});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: ${(props) => props.deskPos || "15%"};
    min-height: 80vh;
  }

  .hero-content {
    text-align: end;
    max-width: 50%;
    margin-inline-start: auto;
  }

  .service-info {
    color: var(--text-dark);
  }

  .mobile {
    display: none;
  }

  @media (max-width: 850px) {
    .desktop {
      display: none;
    }

    h1 {
      font-size: var(--s2);
    }

    .mobile {
      display: block;
    }

    .mobile button {
      display: block;
      margin-inline: auto;
    }

    .hero-background {
      min-height: 250px;
      background-position: ${(props) => props.tabPos || "30%"};
    }
  }

  @media (max-width: 450px) {
    .hero-background {
      background-position: ${(props) => props.mobPos || "40%"};
      min-height: 150px;
    }

    h1 {
      font-size: var(--s0);
    }
  }

  @media (prefers-color-scheme: dark) {
    .hero-background {
      position: relative;
    }
    .hero-background::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 0;
    }
  }
`;
