function maxSubarray(nums){
    let tempSum = nums[0];
    let maxSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if(tempSum < 0){
            tempSum = nums[i];
        } else{
            tempSum += nums[i];
        }
      maxSum = Math.max(tempSum, maxSum);
    }
    return maxSum;
}

console.log(maxSubarray([-2,1,-3,4,-1,2,1,-5,4]));
