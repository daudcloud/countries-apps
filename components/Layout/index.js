import Head from "next/head";
import { useTheme } from "../../contexts/ThemeContext";
import Header from "../Header";
import Main from "./style";

const Layout = ({ children, title }) => {
  const [dark, setDark] = useTheme();
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>
      <Main dark={dark}>
        <Header />
        {children}
      </Main>
    </>
  );
};

export default Layout;