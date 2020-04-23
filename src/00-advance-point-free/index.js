const mod = (y) => (x) => x % y
const eq = (y) => (x) => x === y
const compose = (fn1, fn2) => (arg) => fn1(fn2(arg))
const negate = (fn) => (arg) => !fn(arg);
const isOdd = compose(eq(1), mod(2));
const isEven = negate(isOdd);

console.log(isOdd(3))
console.log(isOdd(5))
console.log(isOdd(8))
console.log(isEven(8))
