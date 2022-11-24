import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import SideBar from "./SideBar";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Twitter 2.0</title>
      </Head>
      <main>
        <SideBar/>
      </main>
    </div>
  );
};

export default Home;
