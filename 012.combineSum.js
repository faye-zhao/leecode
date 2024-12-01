/*
2 3 4 7 
7
*/

const combineSum = (nums, target) => {
    const res = []
    const stack = []

    const dfs = (curSum, i) => {
        if (curSum === target) {
            res.push([...stack])
            return
        }
        if (curSum>target) {
            return 
        }
       
        nums.forEach((num, index)=>{
            /*
            if (stack.length) {
                const top = stack[stack.length-1]
                if (num<top) {
                    return
                }
            }
            */
            if (index<i) {
                return
            }
            stack.push(num)
            dfs(curSum+num, index)
            stack.pop(num)
        })
    }

    dfs(0, 0)

    return res
}

console.log(combineSum([7, 2,3,4], 7))