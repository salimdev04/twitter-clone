import { getProviders, getSession } from 'next-auth/react';
import React from 'react'
import Layout from "../components/Layout"
import Widgets from '../components/Widgets';

function Profile({ trendingResults, followResults, providers }) {
  return (
    <Layout providers={providers}>
      <div  className="flex-grow max-w-2xl sm:ml-[73px] xl:ml-[370px]">
        <h1>Hello Profile</h1>
      </div>
      <Widgets
          trendingResults={trendingResults}
          followResults={followResults}
        />
    </Layout>
  )
}

export default Profile


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
