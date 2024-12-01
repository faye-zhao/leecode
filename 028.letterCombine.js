const Num2LettersMap = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi'
}

//str: 24
const calcLetterComine = str => {
    const nums = str.split('')
    
    const res = []
    const stack = []
    const dfs = (i) => {
        if (i===nums.length) {
            res.push(stack.join(''))
            return
        }
        const num = nums[i]
        const letters = Num2LettersMap[num].split('')
        letters.forEach(letter=>{
            stack.push(letter)
            dfs(i+1)
            stack.pop(letter)
        })

    }

    dfs(0)
    return res
}

console.log(calcLetterComine('24'))