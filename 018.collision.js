/*
 -1 5 1 3 -1 -4 -1 
 */

 const colide = nums=> {
    const stack = []
    for (let i=0; i<nums.length; i++) {
        const cur = nums[i]
        if (stack.length===0) {
            stack.push(cur)
            continue
        }
        
        if (cur>0) {
            stack.push(cur)
            continue
        }
   
        let top = stack[stack.length-1]
        if (top<0) {
            stack.push(cur)
            continue
        }

        //cur<0 top>0 
        while (stack.length>0) {
            top = stack[stack.length-1]
            if (top>0 && top+cur<0) {
                stack.pop()
            } else {
                break
            }
        }

        if (stack.length===0) {
            stack.push(cur)
            continue
        }
        if (top<0) {
            stack.push(cur)
            continue
        }
        if (top>0 && top+cur>0) {
            continue
        }
    }
    return stack
 }

 console.log(colide([-1, 5, 1, 3, -1, -4, -1]))
