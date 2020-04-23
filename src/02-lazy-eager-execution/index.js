const repeaterLazy = (count) => () => "".padStart(count, "A");

const repeaterEager = (count) => {
  let str = "".padStart(count, "A");
  return () => str
}

const repeaterEagerImpure = (count) => {
  let str;
  return () => {
    if (str === undefined) str = "".padStart(count, "A");
    return str
  }
}
const repeaterMemoize = (count) => memoize(() => "".padStart(count, "A"))

const measurePerformance = (fn) => () => (console.time(), fn(), console.timeEnd())

measurePerformance(repeaterLazy(1000000000))();
measurePerformance(repeaterEager(1000000000))();
