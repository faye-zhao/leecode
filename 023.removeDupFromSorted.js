//remove dupdate from sorted array

const swap = (nums, l, r) => {
    const tmp = nums[l]
    nums[l] = nums[r]
    nums[r] = tmp
}
/*
const removeDup = nums =>{
    let l = 0 
    let rVal = -Infinity
    let rCount = 0
    for (let r=0; r<nums.length; r++) {
        const curVal = nums[r]
        if (curVal === rVal) {
            rCount++
            if (rCount>2) {
                swap(nums, l, r)
                l++;
            }
        } else {
            rVal = curVal
            rCount=1
            l++
        }
    }

}
*/
const removeDup1 = nums => {
    let l = 0 
    for (let r=0; r<nums.length; r++) {
        if (nums[r] !== nums[l] && nums[r+1]!==nums[r] &&r+1<nums.length) {
            if (l+1!==r) { //check if they are the same
                swap(nums, l+1, r)
            }
            l++
        }
    }
    return nums
}
const removeDup = nums => {
    let l = 0 
    for (let r=0; r<nums.length; r++) {
        if (nums[r] !== nums[l]) {
            if (l+1!==r) { //check if they are the same
                swap(nums, l+1, r)
            }
            l++
        }
    }
    return nums
}
// 1    2   3

// 1    1   1    2    2
// l 
// r
//     l 
//     r
//         l 
//         r 
const nums = [1,1,1,2,2,3,4,4,4]
//removeDup(nums)
removeDup1(nums)
console.log(nums)