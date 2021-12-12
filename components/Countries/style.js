import styled from "styled-components";

const Div = styled.div`
  padding: 0 var(--padding-container);
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
    @media (max-width: 930px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 600px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default Div;
