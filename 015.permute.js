const permute = nums => {
    if (nums.length === 0) {
        return []
    }
    if (nums.length===1) {
        return [[nums[0]]]
    }
    const res = []
    for (let i=0; i<nums.length; i++) {
        const cur = nums.shift()
        const restRes = permute(nums)
        const appended = restRes.map(t=>[cur, ...t])
        res.push(...appended)
        nums.push(cur)
    }
    return res
}

console.log(permute([1,2,3]))