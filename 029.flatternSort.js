/*
Write a function which takes input as given and provides output as given.

Input -> [11,10,1,2,3,4,[5,6,7,[8,9]]]

Output -> [1,2,3,4,5,6,7,8,9,10,11]
*/

const sort = (arr) => {
    //find pivot 
    if (arr.length<=1) {
        return arr
    }
    const left = []
    const right = []
    const pivot = arr[0]
    arr.forEach((ele, index)=>{
        if (index!==0)
        if (ele<pivot) {
            left.push(ele)
        } else {
            right.push(ele)
        }   
    })
    const leftSorted = sort(left)
    const rightSorted = sort(right)
    return [...leftSorted, pivot, ...rightSorted]
}

const flatternAndSort = (inputs) => {
    const res = []
    const dfs = (arr) => {
        arr.forEach(ele=>{
            //if (typeof ele === 'object') {
            if (Array.isArray(ele)) {
                dfs(ele)
            } else {
                res.push(ele)
            }
        })
    }
    dfs(inputs)
    
    return sort(res)
}



const inputs = [11,10,1,2,3,4,[5,6,7,[8,9]]]
console.log(flatternAndSort(inputs))

/*
On application load, a timer should start that will increment by 1 every 1 second
Create 2 buttons. First button will pause the timer, second will reset the timer
*/