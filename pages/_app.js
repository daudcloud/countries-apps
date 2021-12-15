import ThemeProvider from "../contexts/ThemeContext";
import { createGlobalStyle } from "styled-components";
import "../styles/globals.css";

const GlobalStyle = createGlobalStyle`

*, *::before, *::after{
  box-sizing: border-box;
  margin:0;
  padding: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

`;

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
