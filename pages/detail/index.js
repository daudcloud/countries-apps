import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";

const Detail = () => {
  const router = useRouter();
  const [country, setCountry] = useState({});
  const { name } = router.query;

  useEffect(async () => {
    const res = await fetch(`https://restcountries.com/v2/name/${name}`);
    const data = await res.json();
    setCountry(data[0]);
  }, []);

  return <Layout title={name}>{country.name}</Layout>;
};

export default Detail;
