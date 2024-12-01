const promiseRace = (promises) => {
  return new Promise((resolve, reject)=>{
    promises.forEach(promise=> {
        promise.then(resolve).catch(reject)
    })
  }) 
}

const promiseAll = (promises) => {
  return new Promise((resolve, reject)=>{
    let curResolved = 0
    const results = new Array(promises.length).fill(0)
    if (promises.length===0) {
      resolve([])
      return
    }
    promises.forEach((promise, index)=> {
        promise.then(value=>{
          results[index] = value
          curResolved++
          if (curResolved===promises.length) {
            resolve(results)
          }
        }).catch(reject)
    })
  })
}

module.exports = {
  promiseRace,
  promiseAll,
};
