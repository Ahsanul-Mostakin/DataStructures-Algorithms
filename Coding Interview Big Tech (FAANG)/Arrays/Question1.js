/*Given an array of integers, return the incices of two numbers that add up to a given target */
//Array = [1,3,7,9,2] Target = 11 
//if no possible solution, return null


const findTwoSum = function(nums, target){
    for (let p1 = 0; p1<nums.length; p1++){
        const numberToFind = target - nums[p1];

        for( p2 = p1 + 1; p2<nums.length; p2++){
            if(numberToFind === nums[p2]){
                return[p1,p2];
            }
        }
    }
    return null;
}

console.log(findTwoSum([1, 3, 7, 9, 2], 11));







