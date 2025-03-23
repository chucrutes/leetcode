function findSum(nums, target) {
  let numbersAlreadySeen = new Map();
  for (let index = 0; index < nums.length; index++) {
    let element = nums[index];
    let difference = target - element;
    let isNumberAlreadySeen = numbersAlreadySeen.get(difference);
    if (isNumberAlreadySeen === undefined) {
      numbersAlreadySeen.set(element, index);
      continue;
    }
    return { isNumberAlreadySeen, index };
  }
}
function twoSum(nums, target) {
  let result = findSum(nums, target);
  if (!result) return undefined;
  return [result.index, result.isNumberAlreadySeen];
}
