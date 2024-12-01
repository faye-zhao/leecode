const array = ['a', ['b', ['c']], [['d']]]

const flattern = (array, level) => {
    const res = []

    const dfs = (arr, depth) => {         
        arr.forEach(ele=>{
            if (typeof ele !== 'string' && depth<level) {
                dfs(ele, depth+1)
            } else {
                res.push(ele)
            }

        })
    }

    dfs(array, 0)
    return res
}

console.log(flattern(array, 0))

console.log(flattern(array, 1))

console.log(flattern(array, 2))
