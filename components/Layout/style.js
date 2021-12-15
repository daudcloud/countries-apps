import styled from "styled-components";

const Div = styled.div`
  font-family: "Nunito Sans", sans-serif;
  --clr-background-element: ${({ dark }) =>
    dark ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)"};
  --clr-text: ${({ dark }) =>
    dark ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"};
  --clr-background: ${({ dark }) =>
    dark ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 98%)"};
  --clr-shadow: ${({ dark }) =>
    dark ? "hsla(0,0%,10%,0.2)" : "hsla(0,0%,50%,0.1)"};
  --max-width: 1280px;
  --clr-list-active: ${({ dark }) =>
    dark ? "hsl(209, 23%, 42%)" : "hsl(0, 0%, 60%)"};
  --clr-list-hover: ${({ dark }) =>
    dark ? "hsl(209, 23%, 32%)" : "hsl(0, 0%, 80%)"};
  --padding-container: 1.7em;
  min-height: 100vh;
  background: var(--clr-background);

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default Div;
