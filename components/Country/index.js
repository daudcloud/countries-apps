import Div from "./style";
import Image from "next/image";

const Country = ({ country }) => {
  function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x)) x = x.replace(pattern, "$1,$2");
    return x;
  }
  return (
    <Div>
      <div className="flag">
        <Image src={country.flags.svg} layout="fill" objectFit="cover" />
      </div>
      <div className="info">
        <div className="name">{country.name}</div>
        <div className="sub-info">
          <p>
            <span>Population</span>: {numberWithCommas(country.population)}
          </p>
          <p>
            <span>Region</span>: {country.region}
          </p>
          <p>
            <span>Capital</span>: {country.capital}
          </p>
        </div>
      </div>
    </Div>
  );
};

export default Country;
