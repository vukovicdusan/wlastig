import styled from "styled-components";

export const ServicesHeroStyled = styled.div`
  color: var(--text-light);
  margin-block-start: 65px;
  .hero-background {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${(props) => props.backgroundImg || ""});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .hero-content {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  .hero-content.analytics-hero {
    align-items: flex-end;
  }

  .hero-content > * {
    flex-basis: 50%;
  }

  .hero-content > *:first-child {
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }

  .hero-content > *:last-child {
    padding: 4rem 1rem;
    min-width: 20rem;
    text-align: end;
  }

  .hero-ilustration {
    object-fit: contain;
    object-position: center;
  }

  .analytics-hero .hero-ilustration {
    object-position: bottom;
  }

  .service-info {
    color: var(--text-dark);
  }

  .mobile {
    display: none;
  }

  h3 {
    font-family: var(--poppinsmedium);
  }

  @media (max-width: 850px) {
    .desktop {
      display: none;
    }

    h1 {
      font-size: var(--s2);
    }

    .hero-content h3 {
      font-size: var(--s1);
    }

    .mobile {
      display: block;
    }

    .mobile button {
      display: block;
      margin-inline: auto;
    }

    /* .hero-background {
      min-height: 250px;
      background-position: ${(props) => props.tabPos || "30%"};
    } */

    .advertising-hero.hero-content > *:first-child img {
      width: 280px;
      height: 280px;
    }
  }

  @media (max-width: 640px) {
    .hero-content {
      flex-direction: column-reverse;
    }
    .hero-content.contact-hero {
      flex-direction: column;
    }
    .hero-content > *:last-child {
      align-items: center;
      padding: 2rem;
      text-align: center;
    }

    .hero-content.analytics-hero > *:last-child {
      padding: 2rem 2rem 0 2rem;
      text-align: center;
    }

    .advertising-hero.hero-content > *:first-child img {
      width: 200px;
      height: 200px;
    }
  }

  @media (max-width: 450px) {
    /* .hero-background {
      background-position: ${(props) => props.mobPos || "40%"};
      min-height: 150px;
    } */

    /* h1 {
      font-size: var(--s0);
    } */
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
