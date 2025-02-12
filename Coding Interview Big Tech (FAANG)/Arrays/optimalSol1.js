/*Given an array of integers, return the incices of two numbers that add up to a given target */
//Array = [1,3,7,9,2] Target = 11 
//if no possible solution, return null


const findTwoSum = function (nums, target) {
    const numsMap = {};

    for (let p = 0; p < nums.length; p++) {
        const numberToFind = target - nums[p];

        if (numsMap[numberToFind] !== undefined) {
            return [numsMap[numberToFind], p];
        }

        numsMap[nums[p]] = p;
    }

    return null;
};

console.log(findTwoSum([1, 3, 7, 9, 2], 11)); 
