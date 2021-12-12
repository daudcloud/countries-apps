import styled from "styled-components";

const Div = styled.div`
  transition: 0.1s linear;
  background: var(--clr-background-element);
  color: var(--clr-text);
  box-shadow: 0 0.025rem 0.3rem 0.3rem var(--clr-shadow);
  padding: 0 1.7em;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    width: 100%;
    padding: 1.4em 0;
    max-width: var(--max-width);
  }
  .title {
    font-size: 1.5rem;
    font-weight: 800;
  }
  .toggle-dark {
    cursor: pointer;
    font-weight: 600;
    span {
      margin-left: 0.5rem;
    }
  }
`;

export default Div;
