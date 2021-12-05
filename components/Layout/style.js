import styled from "styled-components";

const Div = styled.div`
  --clr-background-element: ${({ dark }) =>
    dark ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)"};
  --clr-text: ${({ dark }) =>
    dark ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"};
  --clr-background: ${({ dark }) =>
    dark ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 98%)"};
  --clr-shadow: ${({ dark }) =>
    dark ? "hsla(0,0,0%,0.7)" : "hsla(0,0,70%,0.7)"};
  --max-width: 1280px;
  --clr-list-active: ${({ dark }) =>
    dark ? "hsl(209, 23%, 42%)" : "hsl(0, 0%, 60%)"};
  --clr-list-hover: ${({ dark }) =>
    dark ? "hsl(209, 23%, 32%)" : "hsl(0, 0%, 80%)"};
  min-height: 100vh;
  background: var(--clr-background);
`;

export default Div;
