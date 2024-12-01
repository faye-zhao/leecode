/*
const  input = [[10, 20], [50,60], [10, 40], [5,15], [5,10], [25,55]]
*/

/*
   1 3 5
   2
 */
const binarySearch0 = (val, array) => {
    let l = 0
    let r = array.length-1
    let mid
    while (l<=r) {
        mid = Math.floor((l+r)/2)
        if (array[mid] === val) {
            return mid
        } if (array[mid] <val) {
            l = mid +1
        } else {
            r = mid -1
        }
    }
    return l
}

console.log(binarySearch0(6, [1, 3, 5]))

console.log(binarySearch0(2, [1, 3, 5]))

console.log(binarySearch0(1, [1, 3, 5]))

console.log(binarySearch0(0, [1, 3, 5]))


const binarySearch = (val, array) => {
    let l = 0
    let r = array.length-1

    while (l<r) {
        const mid = Math.floor((l+r)/2)
        if (array[mid].time <val) {
            l = mid +1
        } else {
            r = mid -1
        }
    }
    return l
}

class Book {
    constructor() {
        this.sorted = []
    }

    checkOverlap(start, end) {
        if (this.sorted.length===0) {
            return false
        }

        let curSum 
        for (let i=0; i<this.sorted.length; i++) {
            const cur = this.sorted[i]
            curSum += cur.cnt 
            if (curSum>=2) {
                return true
            }
        }
        return false
    }

    book(start, end) {
        //check overlap 
        const overlaped = this.checkOverlap(start, end )
        if (this.sorted.length===0) {
            this.sorted.push({time: start, cnt: 1})
            this.sorted.push({time: end, cnt: -1})
        }
        let startIndex = binarySearch(start, this.sorted)
        this.sorted.splice(startIndex, 0, start)

        const endIndex = binarySearch(end, this.sorted)
        this.sorted.splice(endIndex, 0, end)
    }
}

const book = () => {
    input.forEach((order)=>{
        Book.book(order[0], order[1])
    }) 
}

