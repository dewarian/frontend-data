import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Functional Programming!
        </h1>
        <Link href="/">
          <a className={styles.link}>To Home</a>
        </Link>
        <p className={styles.description}>
          <code className={styles.code}>console.log('hello'); </code>
        </p>
      </main>
    </div>
  )
}
