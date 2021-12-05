import styled from "styled-components";

const Div = styled.div`
  background: var(--clr-background-element);
  border-radius: 0.3rem;
  color: var(--clr-text);
  display: flex;
  align-items: center;
  gap: 1.4rem;
  font-weight: 600;
  padding: 0 2em;
  width: 38%;
  input {
    border: none;
    outline: none;
    background: none;
    padding: 1.3em 0;
    color: inherit;
    font-family: inherit;
    width: 90%;
    font-size: inherit;
  }
`;

export default Div;
