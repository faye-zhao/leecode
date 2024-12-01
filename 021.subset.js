/*
1 2 3 12 13 ... 123
*/
const genSubset = (n) => {
    const res = []
    const stack = []
    
    const dfs = (i) => {
        if (i===n) {
            res.push([...stack])
            return
        }

        dfs(i+1)

        stack.push(i)
        dfs(i+1)
        stack.pop(i)

    }
    dfs(0)
    return res
}

console.log(genSubset(3))