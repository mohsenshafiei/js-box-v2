const trempoline = (fn) => (...args) => {
  let result = fn(...args);
  while (typeof result === "function")  {
    result = result();
  }
  return result;
}
// this version stack will overflow
const rec = (x) => rec(x)

// this version stack never overflow
const newRec = trempoline(function newRec(x) { return () => newRec(x) })

console.log(newRec(46));
