import styled from "styled-components";

const Div = styled.div`
  padding: 0 var(--padding-container);
  .container {
    display: grid;
    width: 100%;
    max-width: var(--max-width);
    margin: auto;
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
    grid-gap: 1rem;
  }
`;

export default Div;
