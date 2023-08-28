const array = [2, 1, 3, 5];

function findMissing(arr: number[]): number {
  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;

  const actualSum = arr.reduce((sum, num) => sum + num, 0);

  const missingNumber = expectedSum - actualSum;
  return missingNumber;
}

const missing = findMissing(array);
console.log(missing);
