import Head from 'next/head'

export default function Home() {
  return (
      <>
          <Head>
              <title>Home Page</title>
              <link rel='icon' href='/favicon.ico' />
          </Head>
          <div>Welcome to the home page!</div>
      </>
  );
}
