import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const Detail = () => {
  const router = useRouter();
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState();
  const { name } = router.query;

  function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x)) x = x.replace(pattern, "$1,$2");
    return x;
  }

  useEffect(async () => {
    const res = await fetch(`https://restcountries.com/v2/all`);
    const data = await res.json();
    setCountries(data);
  }, []);

  useEffect(() => {
    const temp = countries.find(
      (country) => country.name.toLowerCase() === name.toLowerCase()
    );
    setCountry(temp);
  }, [countries]);

  console.log(country);

  return (
    <Layout title={name}>
      <div>
        <Link href="/">
          <a>
            <i className="fas fa-arrow-left"></i> Back
          </a>
        </Link>
      </div>
      {country === undefined ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div className="flag">
            {/* <Image layout="fill" objectFit="cover" src={country.flags.svg} /> */}
          </div>
          <div className="info">
            <div className="country-name">{country.name}</div>
            <div className="sub-infos">
              <div className="sub-info">
                <p>
                  <span>Native Name: </span>
                  {country.nativeName}
                </p>
                <p>
                  <span>Population: </span>
                  {numberWithCommas(country.population)}
                </p>
                <p>
                  <span>Region: </span>
                  {country.region}
                </p>
                <p>
                  <span>Sub Region: </span>
                  {country.subregion}
                </p>
                <p>
                  <span>Capital: </span>
                  {country.capital}
                </p>
              </div>
              <div className="sub-info">
                <p>
                  <span>Top Level Domain: </span>
                  {country.topLevelDomain}
                </p>
                <p>
                  <span>Currencies: </span>
                  {country.currencies[0].name}
                </p>
                <p>
                  <span>Languages: </span>
                  {country.languages.map((language, index) => {
                    if (index == country.languages.length - 1)
                      return language.name;
                    return language.name + ", ";
                  })}
                </p>
              </div>
            </div>
            <div className="borders">
              <p>
                <span>Border Countries: </span>
                {country.borders.map((border) => {
                  const temp = countries.find(
                    (country) => country.alpha3Code === border
                  );
                  return <span className="border">{temp.name}</span>;
                })}
              </p>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Detail;
