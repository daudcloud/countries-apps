import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import { useState, useEffect } from "react";

export default function Home() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  console.log(countries);
  return (
    <div>
      <Layout title="Rest Countries Apps">main</Layout>
    </div>
  );
}
