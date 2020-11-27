function fib(n) {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
}
const heapState = new Map();
let counter = 1;
function fib2(n) {
  let fiber = {
    arg: n,
    returnAddr: null,
    init: -1,
  };
  recursive: while (true) {
    if (fiber.arg < 2) {
      let sum = fiber.arg;
      while (fiber.returnAddr) {
        fiber = fiber.returnAddr;
        if (fiber.init === -1) {
          fiber.init = sum;
          if (heapState.get(fiber.arg - 2)) {
            fiber = {
              arg: fiber.arg - 2,
              returnAddr: fiber,
              init: heapState.get(fiber.arg - 2),
            };
          } else {
            // fib(n - 2)
            fiber = {
              arg: fiber.arg - 2,
              returnAddr: fiber,
              init: -1,
            };
            continue recursive;
          }
        }
        sum += fiber.init;
      }
      return sum;
    } else {
      console.log(counter++);
      // fib(n - 1)
      if (heapState.get(fiber.arg - 1)) {
        fiber = {
          arg: fiber.arg - 1,
          returnAddr: fiber,
          init: heapState.get(fiber.arg - 1),
        };
      } else {
        fiber = {
          arg: fiber.arg - 1,
          returnAddr: fiber,
          init: -1,
        };
      }
    }
  }
}
console.log(fib2(8));
