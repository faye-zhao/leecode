/*
   1 1 2 2 3   
*/
const removeDup = nums => {
    let l = 0 
    for (let r = 0; r<nums.length; r++) {
        if (nums[l]!==nums[r]) {
            l++
            nums[l] = nums[r]
        }
    }
    return nums 
}

const res = removeDup([1,2,2,3])
console.log(res)
