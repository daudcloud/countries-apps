import Layout from "../../components/Layout";
import { useRouter } from "next/router";

const Detail = () => {
  const router = useRouter();
  const { c } = router.query;
  return <Layout title="detail">{c}</Layout>;
};

export default Detail;
