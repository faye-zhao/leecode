/*
  ((a())
*/
const removeInvalid = str => {
    const chars = str.split('')
    let cnt = 0 

    const validChars = []
    for (let i=0; i<chars.length; i++) {
        const char = chars[i]
        if (char==='(') {
            cnt++
        } else if (char===')'){
            cnt--
        }
        if (cnt<0) {
            cnt++
        } else {
            validChars.push(char)
        }
    }

    const res = []
    for (let i=validChars.length-1;i>=0;i--) {
        const cur = validChars[i]
        if (cur==='(' && cnt>0) {
            cnt--
        } else {
            res.push(cur)
        }
    }
    res.reverse()
    return res
}

const res = removeInvalid(')(a(b)c')
console.log(res)