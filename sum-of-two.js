// Find the two indexes of numbers that adds up to a target 
// Input: [3,2,4], 6 - Output: [1,2]
// Input: [0,4,3,2,1,0], 0 - Output: [0,5]

var twoSum = function (nums, target) {
    const length = nums.length
    for (let ind = 0; ind < length; ind++) { // 0 1 2
        for (let innerInd = ind + 1; innerInd < length; innerInd++) { // 1 2 _
            const posibleTarget = nums[ind] + nums[innerInd]
            if (target == posibleTarget) {
                return [ind, innerInd]
            } else {
                continue
            }
        }
    }
}

console.log(twoSum([3, 2, 4], 6))


