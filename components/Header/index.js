import { useTheme } from "../../contexts/ThemeContext";
import Div from "./style";

const Header = () => {
  const [dark, setDark] = useTheme();
  return (
    <Div>
      <div className="container">
        <div className="title">Where in the world?</div>
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
