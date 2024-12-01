// [1,2,0.5, 4, -5, -5]


const maxProduct = nums => {
    let curMin = 1
    let curMax = 1
    let res = -Infinity

    for (let i=0; i<nums.length; i++) {
        const cur = nums[i]
        if (cur===0) {
            curMin = 0 
            curMax = 0
            continue 
        }
        const min  = Math.min(cur, cur*curMin, cur*curMax)
        const max = Math.max(cur, cur*curMin, cur*curMax)
        curMin = min 
        curMax = max
        res = Math.max(curMax, res)
        console.log(cur, curMax, res)
    }
    return res
}

/*
const maxProduct = nums => {
    let curMin = Infinity
    let curMax = -Infinity
    let res = -Infinity

    for (let i=0; i<nums.length; i++) {
        const cur = nums[i]
        if (cur===0) {
            curMin = 1 
            curMax = 1
            continue 
        }
        const min  = Math.min(cur, cur*curMin, cur*curMax)
        const max = Math.max(cur, cur*curMin, cur*curMax)
        curMin = min 
        curMax = max
        res = Math.max(curMax, res)
        console.log(cur, curMax, res)
    }
    return res
}
*/
//console.log(maxProduct( [1, 2, 0.5, 4, -5, -5]))
console.log(maxProduct( [-5]))