function Node (val, left, right)  {
    this.val = val 
    if (left) {
      this.right = left 
    }
    if (right) {
      this.right = right
    }
}

const inorder = root => {
    let cur = root 
    let res = []
    let stack = []
    while (cur || stack.length>0) {
        if (cur) {
          while (cur) {
            stack.push(cur)
            cur = cur.left
          }
        } else { 
          cur = stack.pop()
          res.push(cur.val)
          cur = cur.right
        }
    }

    return res 
}

const root = new Node(5)
root.left = new Node(3)
root.right = new Node(8)
root.right.left = new Node(6)

const res = inorder(root)
console.log(res)

/*
     5

  3      8
       6
*/