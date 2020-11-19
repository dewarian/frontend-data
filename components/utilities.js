import axios from "axios";

/**
 * @title getData from API
 * @description Axios powered API function. Using
 * @param {*} url
 */
export async function getData(url) {
    const data = axios
        .get(url, {
            responseType: "json"
        })
        .then((result) => {
            console.log(result.data);
        });
    return await data;
}

// Function that iterates through the array of objects.
export function cleanData(data) {
    data.map();
}

/**
 * @title Filter data on a specified column
 * @description This function filters the dataset with a map to create a new array with the specified column.
 * @param {json} dataset requires a dataset in json structure
 * @param {string} column string value based on the dataset
 */
export function filterDataOnColumn(dataset, column) {
    return dataset.map((result) => result[column]);
}

export async function combineDatasets(datasetOne, datasetTwo) {
    const vehicleData = await fetch("https://opendata.rdw.nl/resource/m9d7-ebf2.json");
    const fuelTypeData = await fetch("https://opendata.rdw.nl/resource/8ys7-d773.json");

    const vehicles = await vehicleData.json();
    const fuelType = await fuelTypeData.json();

    const result = vehicles.map((vehicle) => {
        const combineData = fuelType.find(() => vehicles.kenteken == fuelType.kenteken);
        vehicle.kenteken = combineData;
        return vehicle;
    });
    return result;
}

/* 
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

// Temporary location for the logic that was saved in componentDidMount()
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
*/
