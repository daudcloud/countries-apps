import { useTheme } from "../../contexts/ThemeContext";
import Div from "./style";
import Link from "next/link";

const Header = () => {
  const [dark, setDark] = useTheme();
  return (
    <Div>
      <div className="container">
        <Link href="/">
          <a className="title">Where in the world?</a>
        </Link>
        <div className="toggle-dark" onClick={() => setDark(!dark)}>
          {dark ? (
            <i className="fas fa-moon"></i>
          ) : (
            <i className="far fa-moon"></i>
          )}
          <span>Dark Mode</span>
        </div>
      </div>
    </Div>
  );
};

export default Header;
