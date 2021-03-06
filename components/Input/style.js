import styled from "styled-components";

const StyledInput = styled.div`
  background: var(--clr-background-element);
  border-radius: 0.3rem;
  color: var(--clr-text);
  display: flex;
  align-items: center;
  gap: 1.4rem;
  font-weight: 600;
  padding: 0 2em;
  width: 38%;
  box-shadow: 0 0.025rem 0.5rem 0.3rem var(--clr-shadow);
  align-self: stretch;
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

  @media (max-width: 530px) {
    & {
      width: auto;
      font-size: 0.9rem;
    }

    input {
      padding: 1.1em 0;
    }
  }
`;

export default StyledInput;
