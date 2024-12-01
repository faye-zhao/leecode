/*
Longest Repeating Substring
A B B   1 
*/

const calcLRS = (str, count) => {
    const chars = str.split('')

    const cntMap = {}
    let l = 0 
    let maxLength = 0 

    for (let r=0; r<chars.length; r++) {
        const cur = chars[r]
        if (!cntMap[cur]) {
            cntMap[cur] = 0
        }
        cntMap[cur]++ 

        while (l<=r) {
            const windowSize = r - l +1
            const canRepeat  = Object.keys(cntMap).filter(char=>cntMap[char]+count>=windowSize).length>0 
            if (!canRepeat) {
                cntMap[chars[l]]--
                l++
            } else {
                break;
            }
        }
        maxLength = Math.max(maxLength, r-l+1)
    }

    return maxLength
}



console.log(calcLRS('ABBA', 1))

console.log(calcLRS('', 1))

console.log(calcLRS('ABBBBAAAAA', 1))

console.log(calcLRS('ABBBBAAAAA', 2))