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

    /**
     * @title Data retrieval from RDW
     * @description Funtion that does a GET request to the given URL 
     * @param {String} url - API endpoint
     */
    async getData(url) {
      return await Axios.get(url).then(response => response.data)
    }

    async componentDidMount() {
      console.warn('mounted')

      let parkingSpaces = await this.getData('https://opendata.rdw.nl/resource/m9d7-ebf2.json')
      // console.log(filterDataOnColumn(parkingSpaces, 'kenteken'))
      const mixedData = combineDatasets()
      mixedData.then((result) => {
        console.log(result[0])
      })

      async function combineDatasets() {
        const vehicleData = await fetch('https://opendata.rdw.nl/resource/m9d7-ebf2.json');
        const fuelTypeData = await fetch('https://opendata.rdw.nl/resource/8ys7-d773.json');
  
        const vehicles = await vehicleData.json();
        const fuelType = await fuelTypeData.json();
  
        const result = vehicles.map((vehicle) => {
          const combineData = fuelType.find(() =>
            vehicles.kenteken == fuelType.kenteken
          );
          vehicle.kenteken = combineData;
          return vehicle
        })
        return await result;
      }

    }


    render() {
      const resultView = <div >
        <h1 > My shitty data < /h1> <
        div id = "barchart" > < /div> <
        /div>
      const loadView = < div > < h1 > Loading < /h1> </div >

        return ( <> {
            this.state.data.state ? resultView : loadView
          } </>)
        }
    }