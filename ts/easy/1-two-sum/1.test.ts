import { describe, expect, test, it } from "@jest/globals";
import { twoSum } from "./1";

describe("two sum", () => {
  it("should find two number", () => {
    const nums = [7, 2, 9, 11];
    const target = 9;

    const [firstIndex, secondIndex] = twoSum(nums, target) as [number, number];
    const sum = nums[firstIndex] + nums[secondIndex];

    expect(sum).toEqual(target);
  });
  it("should return undefined", () => {
    const nums = [7, 2, 9, 18];
    const target = 18;

    const result = twoSum(nums, target);

    expect(result).toBeUndefined();
  });
});
