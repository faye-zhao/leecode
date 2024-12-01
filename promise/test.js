const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const {promiseRace, promiseAll} = require('../polyfillPromises');

describe('Promise.race', () => {
  it('returns a promise', () => {
    const promise = promiseRace([]);
    expect(promise).to.be.an.instanceof(Promise);
  })

  it('returns resolved promise', async () => {
    const promise1 = new Promise((resolve, reject) => {
      setTimeout(resolve, 500, 'one');
    });
    const promise2 = new Promise((resolve, reject) => {
      setTimeout(resolve, 100, 'two');
    });

    const promise = await promiseRace([promise1, promise2]);
    assert.deepEqual(promise, 'two');
  })

  it('rejects on first rejected promise', async () => {
    const promise1 = new Promise((resolve, reject) => {
      setTimeout(resolve, 500, 'one');
    });
    const promise2 = new Promise((resolve, reject) => {
      setTimeout(reject, 100, 'error');
    });

    try {
      await promiseRace([promise1, promise2]);
    } catch (e) {
      assert.deepEqual(e, 'error');
    }
  })
})
  
describe('Promise.all', () => {
  it('returns a promise', () => {
    const promise = promiseAll([]);
    expect(promise).to.be.an.instanceof(Promise);
  })

  it('returns all resolved promises', async () => {
    const promise1 = Promise.resolve(3);
    const promise2 = Promise.resolve(42);
    const promise3 = new Promise((resolve, reject) => {
      setTimeout(resolve, 100, 'foo');
    });

    const promise = await promiseAll([promise1, promise2, promise3]);
    assert.deepEqual(promise, [3, 42, "foo"]);
  })
  
  it('returns all resolved promises in original order', async () => {
    const promise1 = new Promise((resolve, reject) => {
      setTimeout(resolve, 100, 'foo');
    });
    const promise2 = Promise.resolve(3);
    const promise3 = Promise.resolve(42);


    const promise = await promiseAll([promise1, promise2, promise3]);
    assert.deepEqual(promise, ['foo', 3, 42]);
  })

  it('rejects on a rejected promise', async () => {
    const promise1 = Promise.resolve(3);
    const promise2 = Promise.resolve(42);
    const promise3 = new Promise((resolve, reject) => {
      setTimeout(reject, 100, 'error');
    });

    try {
      await promiseAll([promise1, promise2, promise3]);
    } catch (e) {
      assert.deepEqual(e, 'error');
    }
  })

})