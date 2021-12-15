import styled from "styled-components";

const Div = styled.div`
  color: var(--clr-text);
  padding: 0 var(--padding-container);

  .back {
    background: var(--clr-background-element);
    display: inline-block;
    padding: 0.5em 2em;
    box-shadow: 0 0.025rem 0.5rem 0.3rem var(--clr-shadow);
    border-radius: 0.3rem;
    margin: 5rem 0;
    .fas {
      margin-right: 0.5rem;
    }
  }
  .details {
    display: flex;
    gap: 10rem;
    align-items: center;
    padding-bottom: 20rem;
    & > * {
      flex-basis: 50%;
    }
    span:not(.border) {
      font-weight: 600;
    }
  }
  .flag {
    position: relative;
    height: 25rem;
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .sub-infos {
    font-size: 1rem;
    display: flex;
    justify-content: space-between;
    p {
      margin: 0.7rem 0;
    }
  }

  .country-name {
    font-size: 1.8rem;
    font-weight: 700;
  }

  .border-wrapper > p {
    display: flex;
    align-items: center;
    gap: 1rem;
    span:first-child {
      flex-shrink: 0;
    }
  }

  .borders {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .border {
    font-size: 0.8rem;
    padding: 0.4em 2em;
    background: var(--clr-background-element);
    border-radius: 0.3rem;
    box-shadow: 0 0.025rem 0.5rem 0.3rem var(--clr-shadow);
  }
`;

export default Div;
