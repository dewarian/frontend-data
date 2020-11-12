/**
 * @title Filter data on a specified column
 * @description This function filters the dataset with a map to create a new array with the specified column.
 * @param {json} dataset requires a dataset in json structure
 * @param {string} column string value based on the dataset
 */
export function filterDataOnColumn(dataset, column) {
    return dataset.map(result => result[column]);
}

export async function combineDatasets(datasetOne, datasetTwo) {
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
    return result;
  }