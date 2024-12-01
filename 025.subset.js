//2, 3, 4, 5 => 7

const calcSubset = (nums, target) => {
    const res = []
    const stack = []

    const dfs = (index, total) => {
        //console.log(index, total, stack)
        if (total === target) {
            res.push([...stack])
            return
        }
        if (total>target) {
            return
        }
        if (index >= nums.length) {
            return
        }

        const cur = nums[index]
        stack.push(cur)
        dfs(index, total+cur)
        stack.pop(cur)

        dfs(index+1, total)
    }

    dfs(0, 0)

    return res
}

console.log(calcSubset([2,3,4,5], 7))