
const similarify = (s1, s2) => {
  const len1 = s1.length
  const len2 = s2.length
  const minLen = Math.min(len1, len2)
  let prefixLen = 0
  for (let i=0; i<minLen; i++) {
    if (s1[i]===s2[i]) {
      prefixLen++
    } else {
      break
    }
  }

  let suffixLen = 0
  for (let i=0; i<minLen; i++) {
    if (s1[len1-1-i]===s2[len2-1-i]) {
      suffixLen++
    } else {
      break
    }
  }

  return (prefixLen+suffixLen>=len1)
}

/*
const s1 = ['hello', 'jane'];
const s2 = ['hello', 'my', 'name', 'is', 'jane'];
*/

const s1 = ['hello', 'good', 'jane'];
const s2 = ['hello', 'i', 'good', 'jane','i', 'hello', 'good', 'jane'];
console.log(similarify(s1,  s2))