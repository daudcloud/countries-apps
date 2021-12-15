import styled from "styled-components";

const StyledHandler = styled.div`
  margin: 3rem 0;
  font-size: 0.9rem;
  padding: 0 var(--padding-container);
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--max-width);
    margin: auto;
  }

  @media (max-width: 450px) {
    & {
      --padding-container: 1.2em;
      margin: 1.4rem 0;
    }
    .container {
      flex-direction: column;
      align-items: flex-start;
      gap: 2.5rem;
    }
  }
`;

export default StyledHandler;
