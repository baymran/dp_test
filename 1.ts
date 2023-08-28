const array = [1, 2, 5, 7, 7, 11, 12, 11, 1, 12];

function findUnique(arr: number[]): number[] {
  return arr.filter((num, index) => arr.indexOf(num) === index);
}

const uniqueArray = findUnique(array);
console.log(uniqueArray); 


// Optimized performance

// const array = [1, 2, 5, 7, 7, 11, 12, 11, 1, 12];

// function findUnique(arr: number[]): number[] {
//   const uniqueNumbers: { [key: number]: boolean } = {};

//   for (const num of arr) {
//     if (!uniqueNumbers[num]) {
//       uniqueNumbers[num] = true;
//     }
//   }

//   return Object.keys(uniqueNumbers).map(Number);
// }

// const uniqueArray = findUnique(array);
// console.log(uniqueArray); // [1, 2, 5, 7, 11, 12]
