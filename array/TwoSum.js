/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const entryMap = {}
    for (let j = 0; j < nums.length; j++) {
        const complement = target - nums[j]
        if (complement in entryMap  && entryMap[complement] !== j) {
            return [entryMap[complement], j]
        }
        entryMap[nums[j]] = j
    }
    return null
};

const nums = [2, 7, 11, 15]
const target = 9

console.log(twoSum(nums,target))