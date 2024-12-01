function Node (val, left, right)  {
    this.val = val 
    if (left) {
      this.right = left 
    }
    if (right) {
      this.right = right
    }
}

const preorder = root => {
    let cur = root 
    const stack = []
    const res = []
    while (cur || stack.length>0) {
        //console.log(cur, stack)
        if (cur) {
            while (cur) {
                res.push(cur.val)
                stack.push(cur.right)
                cur = cur.left
            }
        } else {
            cur = stack.pop()
        }
    }

    return res
}

const root = new Node(5)
root.left = new Node(3)
root.right = new Node(8)
root.right.left = new Node(6)
/*
     5
  3     8
*/

const res = preorder(root)
console.log(res)
/*
        5  
   2         7
 1    4    6   8 

*/