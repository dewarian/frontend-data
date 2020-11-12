import React from 'react'
import Axios from 'axios'
import {
  filterDataOnColumn
} from "./modules/utilities";
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
      const result = vehicleData.map((vehicle) => {
        combineData = fuelTypeData.find(() => {
          vehicle.kenteken == fuelTypeData.kenteken
        });
        return vehicle 
      })
      return await result;
    }


    async componentDidMount() {
      console.warn('mounted')

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

      const test = this.matchData()
      console.log(test)
      console.log(fuelTypeData)
      console.log(specificdata)
    //   mixedData.then((result) => {
    //     result.forEach(element => {
    //       specificData.push({
    //         merk: element.merk,
    //         kenteken: element.kenteken.kenteken,
    //         soort: element.voertuigsoort,
    //         brandstof: element.kenteken.brandstof_omschrijving,
    //         taxi: element.taxi_indicator
    //       })
    //     })
    //     mixedData = specificData;
    //     console.log(specificData)
    //   })
    //   mixedData.then(result => {
    //     result.map(key => console.log(key.merk, key.kenteken))
    //   })

    }
    render() {
      const resultView = <div>
        <h1> My shitty data < /h1> <
        div id = "barchart" > < /div> <
        /div>
      const loadView = <div> <h1> Loading </h1> </div>

        return ( <> {
            this.state.data.state ? resultView : loadView
          } </>)
        }
    }