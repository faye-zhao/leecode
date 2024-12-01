/*
hit 
hot dot dog lot log cog
*/

const findAdj = (word, words) => {
    
}
const wordLadder = (start, end, words) => {
    const queue = [start]
    let level = 0
    while (queue.length>0) {
        level++;
        const size = queue.length
        for (let i=0; i<size; i++) {
          const cur = queue.shift() 
          const adjWords = findAdj(cur, words)
          if (adjWords.includes(end)) {
            return level
          }
          adjWords.forEach(w=>queue.push(w))
        }
    }
    return -1
}