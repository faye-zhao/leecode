/*
    f a b c b a d 
*/
const findLPS = str => {
    const chars = str.split('')
    let max = -Infinity
    for (let i=0;i<chars.length;i++) {
        {
            let l = i
            let r = i
            let count = 0
            while (l>=0 && r<=chars.length-1) {
                if (chars[l]===chars[r]) {
                    l-- 
                    r++
                    count++
                } else {
                    break
                }
            }
            max = Math.max(max, 2*count-1)
        }
        
        {
            let l = i
            let r = i+1
            let count = 0
            while (l>=0 && r<=chars.length-1) {
                if (chars[l]===chars[r]) {
                    l-- 
                    r++
                    count++
                } else {
                    break
                }
            }
            max = Math.max(max, 2*count)
        }

    }
    return max 
}

console.log(findLPS('fabcbad'))

console.log(findLPS('fabccad'))