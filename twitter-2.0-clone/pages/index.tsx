import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Feed from "../components/Feed";
import SideBar from "../components/SideBar";
import Widgets from "../components/Widgets";
// import { fetchTweets } from "../sanity/utils/fetchTweets";
// import { Tweet } from "../sanity/typings";

// interface Props {
//   tweets: Tweet[];
// }

const Home = () => {
  return (
    <div className="lg:max-w-6xl mx-auto max-h-screen overflow-hidden">
      <Head>
        <title>Twitter 2.0</title>
      </Head>
      <main className="grid grid-cols-9">
        <SideBar />
        <Feed />
        <Widgets />
      </main>
    </div>
  );
};

export default Home;

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const tweets = await fetchTweets();
//   return {
//     props: {
//       tweets,
//     },
//   };
// };
