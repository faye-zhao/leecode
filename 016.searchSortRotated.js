/*
  4 5 6 7  8 0 1 2

  4 7 2 
  4 0 2 
*/
/*
const isBtw = (val, lVal, rVal) => {
    return (lVal<rVal && val>=lVal && val<=rVal) || (lVal>rVal && val <= lVal && val>=rVal)
}
*/
const search = (nums, target) => {
    let l= 0 
    let r = nums.length -1 

    while (l<=r) {
        const mid = Math.floor((l+r)/2)
        const valL = nums[l]
        const valR = nums[r]
        const midVal = nums[mid]
        if (midVal === target) {
            return mid
        }

        if (valL === valR) {
            return -1
        }

        if (valL < valR) {
            if (midVal >target) {
                r = mid-1
            } else {
                l = mid+1
            }
        } else if (valL<midVal) {
            if (target >=valL && target<midVal) {
                r=mid-1
            } else {
                l=mid
            }
        } else if (midVal<valR) {
            if (target >=midVal && target<valR) {
                l=mid+1
            } else {
                r=mid
            }
        } 
    }
    return -1
}

const nums = [4, 5, 6, 7,  8, 0, 1, 2]
console.log(search(nums, 1))

console.log(search(nums, 6))

console.log(search(nums, 4))

