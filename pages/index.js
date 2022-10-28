import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {card} from './card.js'




export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <header className={styles.header}>
          <h1 className={styles.title}>ByteDev.</h1>
          <h2 className={styles.description}>
            Belgium based <span style={{color: '#EB1D36'}}> Web-Developer.</span>
          </h2>
        </header>
        {card()}

      </main>

    </div>
  )
}

