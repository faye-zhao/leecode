/*
    3 
    ()())
    open close
*/
const genParensis = num => {
    const res = []
    const stack = []

    const dfs = (open, close) => {
        if (open+close>2*num) {
            return
        }
        if (open===num && open===close) {
            res.push(stack.join(''))
            return
        } 

        stack.push("(")
        dfs(open+1, close)
        stack.pop('(')
        
        if (open>close) {
            stack.push(")")
            dfs(open, close+1)
            stack.pop(')')
        }
    }

    dfs(0,0)
    return res
}

console.log(genParensis(2))