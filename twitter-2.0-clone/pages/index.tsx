import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Feed from "./Feed";
import SideBar from "./SideBar";
import Widgets from "./Widgets";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Twitter 2.0</title>
      </Head>
      <main>
        <SideBar/>
        <Feed/>
        <Widgets/>
      </main>
    </div>
  );
};

export default Home;
