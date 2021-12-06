import Country from "../Country";
import Div from "./style";

const Countries = ({ countries }) => {
  return (
    <Div>
      <div className="container">
        {countries.map((country) => (
          <Country country={country} key={country.name} />
        ))}
      </div>
    </Div>
  );
};

export default Countries;
