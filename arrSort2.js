
/** @param {Array} arr
 * @param {Boolean} aTob1
 * @param {Boolean} aTob2
 */
export function sortArrayByTwoFields(arr, field1, aTob1, field2, aTob2) {
  if (aTob1 == true && aTob2 == true) {
    arr.sort((a, b) => {
      if (a[field1] < b[field1]) return -1;
      if (a[field1] > b[field1]) return 1;
      if (a[field2] < b[field2]) return -1;
      if (a[field2] > b[field2]) return 1;
      return 0;
    })
  }
  else if (aTob1 == true && aTob2 == false) {
    arr.sort((a, b) => {
      if (a[field1] < b[field1]) return -1;
      if (a[field1] > b[field1]) return 1;
      if (a[field2] > b[field2]) return -1;
      if (a[field2] < b[field2]) return 1;
      return 0;
    })
  }
  else if (aTob1 == false && aTob2 == true) {
    arr.sort((a, b) => {
      if (a[field1] > b[field1]) return -1;
      if (a[field1] < b[field1]) return 1;
      if (a[field2] < b[field2]) return -1;
      if (a[field2] > b[field2]) return 1;
      return 0;
    })
  }
  else if (aTob1 == false && aTob2 == false) {
    arr.sort((a, b) => {
      if (a[field1] > b[field1]) return -1;
      if (a[field1] < b[field1]) return 1;
      if (a[field2] > b[field2]) return -1;
      if (a[field2] < b[field2]) return 1;
      return 0;
    })
  }
  return arr;
}