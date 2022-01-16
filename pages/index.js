import Head from 'next/head';
import Banner from '../src/components/banner/Banner';
import Header from '../src/components/header/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Talentdrop</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Banner />
        {/* main div */}
      </main>
      {/* footer */}
    </>
  );
}
