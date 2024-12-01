/*
   10 

4 6 8 10
9 
25
*/
const countPrime = n => {
    const isPrime = new Array(n+1).fill(true)

    isPrime[0] = false
    isPrime[1] = false 

    for (let i = 2; i<Math.sqrt(n)+1; i++) {
        if (!isPrime[i])  {
            continue
        }
        for (let j = i*i; j<=n; j+=i) {
            isPrime[j] = false
        }
    }

    for (let i = 2; i<=n; i++) {
        if (isPrime[i]) {
            console.log(i)
        }
    }
}

//countPrime(10)
countPrime(15)