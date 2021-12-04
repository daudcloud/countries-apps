import styled from "styled-components";

const Main = styled.main`
  --clr-background-element: ${({ dark }) =>
    dark ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 100%)"};
  --clr-text: ${({ dark }) =>
    dark ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"};
  --max-width: 1280px;
`;

export default Main;
