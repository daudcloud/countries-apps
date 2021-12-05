import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import Handler from "../components/Handler";

export default function Home() {
  const [countries, setCountries] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [regCountries, setRegCountries] = useState([]);
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("");
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  useEffect(() => {
    setSelectedCountries(countries);
  }, [countries]);

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
  }, [region]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <Layout title="Rest Countries Apps">
        <Handler
          value={query}
          onChange={handleChange}
          setRegion={setRegion}
          region={region}
        />

        {selectedCountries.map((c) => (
          <h1>{c.name}</h1>
        ))}
      </Layout>
    </div>
  );
}
