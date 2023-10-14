import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Login from "../components/Login";
import SideBar from "../components/SideBar";
import Widgets from "../components/Widgets";
import { db } from "../firebase";
import { getSession } from "next-auth/react";
import 'styled-jsx/style';

export default function Home({ session, posts }) {
  return (
    <div className='h-screen bg-gray-100 overflow-hidden'>
      <Head>
        <title>i FaceBook</title>
      </Head>

      {/* Header */}
      <Header />
      <main className='flex'>
        <SideBar />
        <Feed posts={posts} />
        <Widgets />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  //get User
  const session = await getSession(context);

  const posts = await db.collection("posts").orderBy("timestamp", "desc").get();

  const docs = posts.docs.map(post => ({
    id: post.id,
    ...post.data(),
    timestamp: null
  }))
  return {
    props: {
      session,
      posts: docs,
    },
  };
}
