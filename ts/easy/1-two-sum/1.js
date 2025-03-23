"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twoSum = twoSum;
function removeUnusedValuesFromArray(arr, target) {
    return arr.filter(function (item) { return item <= target; });
}
function findSum(nums, target) {
    var numbersAlreadySeen = new Map();
    for (var index = 0; index < nums.length; index++) {
        var element = nums[index];
        var difference = target - element;
        var isNumberAlreadySeen = numbersAlreadySeen.get(difference);
        if (isNumberAlreadySeen === undefined) {
            numbersAlreadySeen.set(element, index);
            continue;
        }
        return { isNumberAlreadySeen: isNumberAlreadySeen, index: index };
    }
}
function twoSum(nums, target) {
    var arr = removeUnusedValuesFromArray(nums, target);
    var result = findSum(arr, target);
    if (!result)
        return undefined;
    return [result.index, result.isNumberAlreadySeen];
}
