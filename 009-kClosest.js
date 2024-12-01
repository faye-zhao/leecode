/*
const nums = [1,2,3,4,5] k=4, x=3
[1,2,3,4]

const nums = [1,2,3,4,5] k=4, x=-1
[1,2,3,4]

Math.abs(a-x) <Math.abs(b-x)
Math.abs(a-x) === Math.abs(b-x) && a<b
*/

const findKCllosest = (nums, k, x)=>{
    let l = 0 
    let r = nums.length-k

    while (l<r) {
        const mid = Math.floor((l+r)/2)
        const smallest = nums[mid]
        const largest = nums[mid+k]
        if (x - smallest > largest-x) {
            l = mid +1
        } else {
            r = mid
        } 
    }

    return nums.slice(l, k)
}

const nums = [1,2,3,4,5]
const res = findKCllosest(nums, 4, -1)
console.log(res)


