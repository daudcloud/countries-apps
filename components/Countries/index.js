import Country from "../Country";
import StyledCountries from "./style";

const Countries = ({ countries, query }) => {
  return (
    <StyledCountries>
      {countries.length === 0 && query === "" ? (
        <div className="container">Loading...</div>
      ) : (
        <div className="container">
          {countries.map((country) => (
            <Country country={country} key={country.name} />
          ))}
        </div>
      )}
    </StyledCountries>
  );
};

export default Countries;
