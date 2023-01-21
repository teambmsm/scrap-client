import Main from 'client/pages/main';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>scrap</title>
        <meta name="description" content="scrap" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Main />
      </main>
    </>
  );
}
