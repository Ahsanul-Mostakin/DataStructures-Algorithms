const findTwoSum = function (nums, target) {
    const numsMap = {};

    for (let p = 0; p < nums.length; p++) {
        const currentMapVal = numsMap[nums[p]];

        if (currentMapVal >= 0) {
            return [currentMapVal, p];
        } else {
            const numberToFind = target - nums[p];
            numsMap[numberToFind] = p;
        }
    }
    return null;
};
