function removeUnusedValuesFromArray(arr: number[], target: number) {
  return arr.filter((item) => Math.abs(item) <= target);
}

function findSum(arr: number[], target: number) {
  let indexes: [number, number] = [0, 1];
  let sum = null;
  const arrLength = arr.length;

  while (sum !== target) {
    const valueOne = arr[indexes[0]];
    const valueTwo = arr[indexes[1]];
    sum = valueOne + valueTwo;

    if (indexes[0] + 1 > arrLength - 1) {
      return;
    }

    if (sum > target || (sum < target && indexes[1] + 1 > arrLength - 1)) {
      indexes[0] = indexes[0] + 1;
      indexes[1] = indexes[0] + 1;
    }

    if (sum === target) {
      return indexes;
    }

    if (sum < target) {
      indexes[1] = indexes[1] + 1;
    }
  }
}

export function twoSum(nums: number[], target: number) {
  const arr = removeUnusedValuesFromArray(nums, target);
  const result = findSum(arr, target);
  console.log(result);

  return result;
}

// twoSum([5, 2, 7], 12);
twoSum([-5, 2, -7], -12);
