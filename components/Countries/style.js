import styled from "styled-components";

const StyledCountries = styled.div`
  padding: 0 var(--padding-container);
  color: var(--clr-text);
  .container {
    display: grid;
    width: 100%;
    max-width: var(--max-width);
    margin: auto;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 5rem;

    @media (max-width: 1200px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 900px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 530px) {
      grid-template-columns: 1fr;
      grid-gap: 3rem;
    }
  }
  @media (max-width: 530px) {
    --padding-container: 3.5em;
  }
`;

export default StyledCountries;
