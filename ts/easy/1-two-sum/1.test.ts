import { describe, expect, it } from "@jest/globals";
import { SuccessTwoSumResponse, twoSum } from ".";

describe("two sum", () => {
  it("should find two number", () => {
    const nums = [7, 2, 9, 11];
    const target = 9;

    const result = twoSum(nums, target) as SuccessTwoSumResponse;
    const sum = nums[result[0]] + nums[result[1]];

    expect(sum).toEqual(target);
  });
  it("should return undefined", () => {
    const nums = [7, 2, 9, 18];
    const target = 18;

    const result = twoSum(nums, target);

    expect(result).toBeUndefined();
  });
});
