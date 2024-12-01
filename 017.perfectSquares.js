/*
  7    4 1 1 1 
*/
const calLPS = target => {
    const dp = new Array(target+1).fill(Infinity)
    dp[0] = 0
    dp[1] = 1
    for (let i=1; i<=target; i++) {
        for (let j=i-1; j>=1; j--) {
            const diff = j*j 
            if (i>=diff && dp[i-diff]<100) {
                dp[i] = Math.min(dp[i-diff] +1, dp[i])
            }
        }
    }
    return dp[target]
}

console.log(calLPS(7))