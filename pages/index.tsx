import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useEffect, useState} from "react";
import Typed from "react-typed"

const Home: NextPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [sentence, setSentence] = useState("...");

  if (typeof window !== 'undefined') {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
      event.matches ? setIsDarkMode(true) : setIsDarkMode(false);
      console.log(event.matches)
    });
  }

  // function generateRandom() {
  //   const subject = ["The hawk", "The boy", "The girl", "The daughter", "The doctor", "The children", "The professor"]
  //   const verb = ["eat", "cook", "grill", "broil", "roast", "stew", "gratin", "stir-Fry", "bake", "caramelize", "steam", "saute", "toast", "poach"]
  //   const object = ["bacon", "pancake", "egg", "beef", "chicken", "meat", "duck", "ham", "kidneys", "lamb", "liver", "apple", "orange", "banana", "potato", "cheese", "apricot"]
  //
  //   const subject_rand = Math.floor(Math.random() * subject.length)
  //   const verb_rand = Math.floor(Math.random() * verb.length)
  //   const object_rand = Math.floor(Math.random() * object.length)
  //   let full_sentence = subject[subject_rand] + " " + verb[verb_rand] + " " + object[object_rand]
  //   setSentence(full_sentence)
  // }

  function generateRandom() {
    const rand = Math.floor(Math.random() * 755952727)
    setSentence("\""+ rand.toString() + "..." + "\"")
  }

  useEffect(()=> {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches){
      setIsDarkMode(true)
    }else {
      setIsDarkMode(false)
    }
    const timer = setInterval(() => {
      generateRandom()
    }, 1000)
    return () => clearInterval(timer)

  }, [])
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
        <meta property="og:image" content="https://nois.network/logo.png" />
        {/*Twitter OG card*/}
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:site" content="@nois" />
        <meta name="twitter:creator" content="@nois" />
      </Head>

      <main className={styles.main}>
        <span>
          { isDarkMode ?
              <Image src="/logo-white.png" alt="Nois Logo" width={300} height={300} />
            :
              <Image src="/logo-black.png" alt="Nois Logo" width={300} height={300} />
          }
        </span>

          {/*<span style={{marginBottom: "50px", height:"100px"}}></span>*/}
        <h1 className={styles.title}>
          Nois Network
        </h1>

        <p className={styles.description}>
          Verifiable Random Function that enables
            Cosmos blockchains to access via IBC random values without compromising security or usability.
        </p>

          <code className={styles.code}> "randomness":<Typed
              className={styles.description}
              strings={[
                sentence
              ]}
              typeSpeed={150}
              backSpeed={100}
              loop
          /></code>





        <div className={styles.grid}>
          <a href="https://twitter.com/NoisNetwork?t=ifCUTzCzJjzFSqUhg1YF4w&s=33" className={styles.card}>
            <h2>Twitter &rarr;</h2>
            <p>Follow Nois and stay tuned for further updates!</p>
          </a>
          <a href="https://discord.gg/fUmnsg2s" className={styles.card}>
            <h2>Discord &rarr;</h2>
            <p>Join our community and meet us.</p>
          </a>
          <a
              href="https://discord.gg/fUmnsg2s"
              className={styles.card}
          >
            <h2>Involved &rarr;</h2>
            <p>We are always looking for new talents.</p>
          </a>
          <a
              href="https://docs.nois.network"
              className={styles.card}
          >
            <h2>Developer &rarr;</h2>
            <p>Go deeper into Nois tech access to the docs.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://nois.network/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Nois Labs{' '}
          <span>
             {isDarkMode ?

                 <Image src="/logo-white.png" alt="Nois Logo" width={50} height={50} />
                 :
                 <Image src="/logo-black.png" alt="Nois Logo" width={50} height={50} />
             }
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
