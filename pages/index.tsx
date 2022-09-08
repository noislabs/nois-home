import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nois Network</title>
        <meta name="description" content="Nois Network bring VRF (Verifiable Random Function) to Cosmos ecosystem" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Nois Network" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:description" content="Nois Network bring VRF (Verifiable Random Function) to Cosmos ecosystem" />
        {/*<meta property="og:url" content="https://www.imdb.com/title/tt0117500/" />*/}
        {/*<meta property="og:image" content="https://ia.media-imdb.com/images/rock.jpg" />*/}
        {/*Twitter OG card*/}
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:site" content="@nois" />
        <meta name="twitter:creator" content="@nois" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Nois Network
        </h1>

        <p className={styles.description}>
          Bring VRF (Verifiable Random Function) that enables
            Cosmos blockchains to access via IBC random values without compromising security or usability.
          <code className={styles.code}> "randomness":"755952727de5e7..."</code>
        </p>

        {/*<div className={styles.grid}>*/}
        {/*  <a href="https://nextjs.org/docs" className={styles.card}>*/}
        {/*    <h2>Documentation &rarr;</h2>*/}
        {/*    <p>Find in-depth information about Next.js features and API.</p>*/}
        {/*  </a>*/}

        {/*  <a href="https://nextjs.org/learn" className={styles.card}>*/}
        {/*    <h2>Learn &rarr;</h2>*/}
        {/*    <p>Learn about Next.js in an interactive course with quizzes!</p>*/}
        {/*  </a>*/}

        {/*  <a*/}
        {/*    href="https://github.com/vercel/next.js/tree/canary/examples"*/}
        {/*    className={styles.card}*/}
        {/*  >*/}
        {/*    <h2>Examples &rarr;</h2>*/}
        {/*    <p>Discover and deploy boilerplate example Next.js projects.</p>*/}
        {/*  </a>*/}

        {/*  <a*/}
        {/*    href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"*/}
        {/*    className={styles.card}*/}
        {/*  >*/}
        {/*    <h2>Deploy &rarr;</h2>*/}
        {/*    <p>*/}
        {/*      Instantly deploy your Next.js site to a public URL with Vercel.*/}
        {/*    </p>*/}
        {/*  </a>*/}
        {/*</div>*/}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://nois.network/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Nois Labs{' '}
          {/*<span className={styles.logo}>*/}
          {/*  <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />*/}
          {/*</span>*/}
        </a>
      </footer>
    </div>
  )
}

export default Home
