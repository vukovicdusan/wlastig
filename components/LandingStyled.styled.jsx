export const LandingStyled = styled.div`
  .hero-title span {
    color: var(--secondary);
  }
  .contact-form-wrapper {
    display: inline;
    background-color: var(--background-light);
    border-radius: 5px;
    padding: var(--s2) var(--s2);
    height: max-content;
    max-width: fit-content;
    transition: all 0.4s ease;
  }
  .spacer {
    background-color: var(--primary);
    padding-block: 5rem;
  }
  @media (max-width: 825px) {
    h1,
    h1 + p {
      text-align: center;
    }
    .center-mobile {
      justify-content: center;
    }
  }
  @media (max-width: 430px) {
    .contact-form-wrapper {
      padding: var(--s-2);
    }
  }
`;
