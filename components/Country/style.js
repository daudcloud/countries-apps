import styled from "styled-components";

const StyledCountry = styled.div`
  background: var(--clr-background-element);
  color: var(--clr-text);
  border-radius: 0.3rem;
  overflow: hidden;
  box-shadow: 0 0.025rem 0.5rem 0.3rem var(--clr-shadow);

  .flag {
    position: relative;
    width: 100%;
    min-height: 10rem;
  }

  .info {
    padding: 1.5em 1.2em;
    font-weight: 800;
    font-size: 1.1rem;

    .sub-info {
      font-size: 0.8em;
    }

    .name {
      margin-bottom: 1rem;
    }

    p {
      margin: 0.3rem 0;
      font-weight: 300;
      span {
        font-weight: 600;
      }
    }
  }
`;

export default StyledCountry;
