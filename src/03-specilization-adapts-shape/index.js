const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
const add = (x, y) => x + y;

// First implementation
const arr1 = [0, 2, 4, 6, 8].map((item) => add(item, 1))

// Second implementation
const cadd = curry(add);
const arr2 = [0, 2, 4, 6, 8].map(cadd(1))

console.log(arr1, arr2)
