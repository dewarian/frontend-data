import React from 'react'
import Axios from 'axios'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import {
  filterDataOnColumn
} from "../components/modules/utilities";
// import { barchart } from '../modules/charts'
// import { filterDisabled } from '../modules/util'

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

      
async matchData() {
      const vehicleData = await Axios.get('https://opendata.rdw.nl/resource/m9d7-ebf2.json?$$app_token=LJJQ0jJhibQnVu2Blj8el7nEE').then(response => response.data);
      const fuelTypeData = await Axios.get('https://opendata.rdw.nl/resource/8ys7-d773.json?$$app_token=LJJQ0jJhibQnVu2Blj8el7nEE').then(response => response.data);
      // map > find > filter
      const vehicles = await vehicleData;
      const vehicleFuelType = await fuelTypeData;

      const result = vehicles.map((vehicle) => {
        const combineData = vehicleFuelType.find(() =>
          vehicles.kenteken == vehicleFuelType.kenteken
        );
        vehicle["brandstof"] = combineData;
        return vehicle
      })
      return await result;
    }

/* Temporary location for the logic that was saved in componentDidMount() */
async someFunction() {
  const vehicleData = await Axios.get('https://opendata.rdw.nl/resource/m9d7-ebf2.json?$$app_token=LJJQ0jJhibQnVu2Blj8el7nEE').then(response => response.data);
  const fuelTypeData = await Axios.get('https://opendata.rdw.nl/resource/8ys7-d773.json?$$app_token=LJJQ0jJhibQnVu2Blj8el7nEE').then(response => response.data);
  const specificdata = [];
  vehicleData.forEach(element => {
    specificdata.push({
      merk: element.merk,
      kenteken: element.kenteken,
      voertuigsoort: element.voertuigsoort,
      // brandstof: 
    })
  });
}


    async componentDidMount() {
      console.warn('mounted')
      // this.matchData()
      //   .then((result) =>{
      //     console.log(result);
      //   })
      //   console.log(specificdata)
      //   // console.log(fuelTypeData)
        // console.log(vehicleData)

    }
    render() {
      const resultView = 
      <div className={styles.container}>
        <h1 className={styles.title}> My shitty data </h1>
        <Link href="/funcprog">
          <a className={styles.link}>To functional programming</a>
        </Link>
        <div id = "barchart" > </div>
      </div>
      const loadView = <div> <h1> Loading </h1> </div>

        return ( <> {
            this.state.data.state ? resultView : loadView
          } </>)
        }
    }