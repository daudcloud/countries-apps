import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import { useState, useEffect } from "react";

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
    console.log(region);
  }, [region]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <Layout title="Rest Countries Apps">
        <input type="text" value={query} onChange={handleChange} />
        <li onClick={() => setRegion("")}>all</li>
        <li onClick={() => setRegion("asia")}>asia</li>
        <li onClick={() => setRegion("americas")}>americas</li>
        <li onClick={() => setRegion("africa")}>africa</li>
        <li onClick={() => setRegion("europe")}>europe</li>
        <li onClick={() => setRegion("oceania")}>oceania</li>
        {selectedCountries.map((c) => (
          <h1>{c.name}</h1>
        ))}
      </Layout>
    </div>
  );
}
