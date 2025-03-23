export type SuccessTwoSumResponse = [number, number];
export type TwoSumResponse = SuccessTwoSumResponse | undefined;

function findSum(nums: number[], target: number) {
  const numbersAlreadySeen = new Map<number, number>();

  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    const difference = target - element;

    const isNumberAlreadySeen = numbersAlreadySeen.get(difference);

    if (isNumberAlreadySeen === undefined) {
      numbersAlreadySeen.set(element, index);
      continue;
    }

    return { isNumberAlreadySeen, index };
  }
}

export function twoSum(nums: number[], target: number): TwoSumResponse {
  const result = findSum(nums, target);
  if (!result) return undefined;

  return [result.index, result.isNumberAlreadySeen];
}
