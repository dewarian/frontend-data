// import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

// export default class Index extends React.Component {
//     constructor(props) {
//       super(props)
//       this.state = {
//         data: {
//           state: true,
//           results: ['loading']
//         }
//       }
//     }

//     async componentDidMount() {
//       console.warn('mounted')
//     }
//     render() {
//       const resultView = 
//       <div className={styles.container}>
//         <h1 className={styles.title}> My shitty data </h1>
//         <Link href="/funcprog">
//           <a className={styles.link}>To functional programming</a>
//         </Link>
//         <div id = "barchart" > </div>
//       </div>
//       const loadView = <div> <h1> Loading </h1> </div>

//         return ( <> {
//             this.state.data.state ? resultView : loadView
//           } </>)
//         }
//     }

export default function Home() {
  return(
    <div className={styles.container}>
        <h1 className={styles.title}> My shitty data </h1>
        <Link href="/funcprog">
          <a className={styles.link}>To functional programming</a>
        </Link>
        <div id = "barchart" > </div>
      </div>
  )
}