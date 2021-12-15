import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import Handler from "../components/Handler";
import Countries from "../components/Countries";

export default function Home() {
  const [countries, setCountries] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [regCountries, setRegCountries] = useState([]);
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("");
  useEffect(async () => {
    const res = await fetch("https://restcountries.com/v2/all");
    const data = await res.json();
    setCountries(data);
  }, []);

  useEffect(() => {
    setSelectedCountries(countries);
  }, [countries]);

  console.log(countries);

  useEffect(() => {
    const regx = new RegExp(`\^${query}`, "gi");
    const temp =
      regCountries.length === 0
        ? countries.filter((country) => country.name.match(regx))
        : regCountries.filter((country) => country.name.match(regx));
    setSelectedCountries(temp);
  }, [query]);

  useEffect(() => {
    if (region === "") {
      setRegCountries([]);
      setSelectedCountries(countries);
    } else {
      const temp = countries.filter(
        (country) => country.region.toLowerCase() === region
      );
      setRegCountries(temp);
      setSelectedCountries(temp);
    }
    setQuery("");
  }, [region]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <Layout title="Rest Countries Apps">
      <Handler
        value={query}
        onChange={handleChange}
        region={region}
        setRegion={setRegion}
      />
      <Countries countries={selectedCountries} query={query} />
    </Layout>
  );
}
