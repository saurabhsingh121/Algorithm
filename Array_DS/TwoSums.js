function twoSum(nums, target) {
    const mySet = new Set();
    const resultIndex = [];
    console.log(nums[83]);
    console.log(nums[239]);
    for (let i = 0; i < nums.length; i++) {
        if(mySet.has(nums[i])){
            resultIndex.push([...mySet].indexOf(nums[i]), i);
        }
        mySet.add(target-nums[i]);
    }
    return resultIndex;
}

console.log(twoSum([2,7,11,15], 9));
