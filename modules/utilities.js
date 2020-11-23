import axios from "axios";

const vehicleData = "https://opendata.rdw.nl/resource/m9d7-ebf2.json";
const vehicleFuelData = "https://opendata.rdw.nl/resource/8ys7-d773.json";

/**
 * @title getData from API
 * @description Axios powered API function. Setting a specific limit as 1000 hits wont result to anything.
 * @param {*} url
 */
export async function getData(url) {
    return await axios.get(url, {params: {$limit: 5000}}).then((response) => response.data);
}

const compareValue = (value, secondValue = undefined) => {
    return value === secondValue;
};

// Function that iterates through the array of objects.
export function cleanData() {
    const vehicle = getData(vehicleData);
    const vehicleFuel = getData(vehicleFuelData);
    let newArray = []

    vehicle.then(result => {
      result.map((element) => {
        newArray.push(element.kenteken)
      })
    });
    return console.log(`this is a test ${newArray}`);
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
