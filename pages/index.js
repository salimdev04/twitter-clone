import { getProviders, getSession } from "next-auth/react";
import Feed from "../components/Feed";
import Layout from "../components/Layout";
import Widgets from "../components/Widgets";

export default function Home({ trendingResults, followResults, providers }) {


  return (
    <Layout providers={providers}>
        <Feed />
        <Widgets
          trendingResults={trendingResults}
          followResults={followResults}
        />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const trendingResults = await fetch("https://jsonkeeper.com/b/NKEV").then(
    (res) => res.json()
  );
  const followResults = await fetch("https://jsonkeeper.com/b/WWMJ").then(
    (res) => res.json()
  );
  const providers = await getProviders();
  const session = await getSession(context);

  return {
    props: {
      trendingResults,
      followResults,
      providers,
      session,
    },
  };
}
