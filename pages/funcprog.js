import Head from 'next/head'
import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default class Index extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        data: {
          state: true,
          results: ['loading']
        }
      }
    }

async componentDidMount() {
    console.warn('mounted')
    // const dataset = getData('https://opendata.rdw.nl/resource/m9d7-ebf2.json')
    // dataset.then((result)=> {console.log(result.data)})

}
render() {
    const resultView = 
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
            <div className="chart">
            </div>
        </main>
    </div>
    const loadView = <div> <h1> Loading </h1> </div>

    return ( <> {
        this.state.data.state ? resultView : loadView
        } </>)
    }
}