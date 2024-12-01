function Node (val, left, right)  {
    this.val = val 
    if (left) {
      this.right = left 
    }
    if (right) {
      this.right = right
    }
}
const findInorder = (arr, val, left, right) =>{
  for (let i=left; i<=right; i++) {
    if (arr[i]===val) {
      return i - left
    }
  }
  return -1
}
/*
   3 9 20 15 7
   9 3 15 20 7
*/
const construct = (preorder, inorder) => {

  const dfs = (pL, pR, inL, inR) =>{
    const val = preorder[pL]
    const root = new Node(val)
    if (pL===pR) {
      return root
    } 

    const cnt = findInorder(inorder, val, inL, inR)

    console.log('A', cnt, val, inL, inR)
    console.log(pL+1, pL+1+cnt-1, inL,inL+cnt-1)
    console.log(pL+1+cnt-1+1, pR, inL+cnt, inR)
    if (cnt<0) {
      return
    }
    if (cnt>0) { 
      root.left = dfs(pL+1, pL+1+cnt-1, inL,inL+cnt-1)
    }
    
    if (pL+1+cnt-1+1>preorder.length-1) {
    } else {
        root.right = dfs(pL+1+cnt-1+1, pR, inL+cnt, inR)
    }
    /* 
    if (cnt<inR - inL) {
      root.right = dfs(pL+1+cnt-1+1, pR, inL+cnt, inR)
    }
    */
    return root 
  }
  return dfs(0, preorder.length-1, 0, preorder.length-1)
}


const root = construct([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])
console.log(root.left, root.right)

/*
const root = construct([3, 9], [9, 3])
console.log(root)
*/
/*
    3 
  9
*/

/*
const root1 = construct([3, 9], [3,9])
console.log(root1)
*/

/*
    3 
       9
*/