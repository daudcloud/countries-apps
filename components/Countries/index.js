import Country from "../Country";

const Countries = ({ countries }) => {
  return (
    <div>
      {countries.map((country) => (
        <Country country={country} key={country.name} />
      ))}
    </div>
  );
};

export default Countries;
