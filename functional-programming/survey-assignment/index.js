// Initializing variables that need to be hoisted
const dataSet = require('./secret_data/Survey_Information_Design_clean-parsed.json');
const filteredDataSet = filterDataOnColumn(dataSet, 'geboorteplaats');

/* Return specific data value from element and column */
/**
 * @name getSpecificDataValue
 * @description Retrieves single value based on specificied column and key.
 * @param {*} key 
 * @param {*} value Column specified, is equal to name in CSV.
 */
/* 
function getSpecificDataValue(key, value) {
  return dataSet[key][value]
}

/* 
Common shit throughout the data:
  '',
  '52.384.222',
  '52.357302-5.181917',
  '51.928553. 4.459382',
  '(51.8878996. 5.6032180)',
  `"52°30'01.5""N 4°57'47.0""E"`,

  Steps to clean:
  1. remove empty values
  2. remove parentheses
  3. if val contains "" ° NOSW transform 
  4. if val starts with 52 or 51, check if it has 6 numbers after the dot, transform second dot to comma
*/

/**
 * @title Filter data based on column
 * @description Function retrieves a data value, an object and filters it on the column parameter.
 * returns a new array
 * @param {*} data json object
 * @param {*} column key name
 */
function filterDataOnColumn(data, column) {
  return data.map(result => result[column])
}


/**
 * @title Empty string removal
 * @description Removes all the strings elements that are empty
 * With help from Christian C Salvado https://stackoverflow.com/a/281335
 * Assigned to a variable.
 */
const scrubData = filteredDataSet.filter((el) => {
  return el
})


const cleanData = scrubData.map((location) => {
  return location
  .replace('(', '')
  .replace(')', '')
  // .replace(/([\.]*.[^.]*)/, ',')
  // .replace(/(\d{3})\./, ',')
  // .replace(/((\d{0})\.)/, ',')
  .replace(/\.?((\d{0})\.)\s/, ', ')
  // .replace(/\.?(\d+.\d+(°.*)?)(.\s+|-)(\d+.\d+(°.*)?)\.?/, ',')
})

console.log(cleanData)