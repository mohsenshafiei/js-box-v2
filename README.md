### JS-BOX

#### NOTE-1

- function should have a return value the thing that doesn't return something is a procedure.
- if a function calls another function it is not a function it is a procedure.
- function is a relation between input and the output
- function: the semantic relationship between input and computed output.

#### NOTE-2
- Side effects:
  * I/O
  * Database Storage
  * Network Calls
  * DOM
  * Timestamps
  * Random Numbers
  * CPU Heat
  * CPU Time Delay

- We cannot remove all side-effects we just try to reduce side-effects  
- Avoid them where possible. Make them obvious otherwise.
- Bring out all side-effect from your functions and put it somewhere that is obvious.
- if a function is pure we can prove it.
- calling one function inside another function makes it impure because we are using reference and that reference can change.
- Function purity is the level of confidence on a function.
- For working with side effects there are some approaches:
  * Try to extract the side-effect
  * Try to contain the side effect and put it in another function
- We can only reduce the surface that side-effect is happening
- passing a parameter by reference and changing it is a side effect but if we send it by value and change it, it is not a side-effect anymore.

#### NOTE-3

- Closure is when a function "remembers" the variables around it when that function is executed somewhere else.

#### NOTE-4
- Referential Transparency means, a function call can be replaced with it's return value and not affect any of the rest of the program.

#### NOTE-5
- Currying comes from the idea of, if I could only parse in one input at a time, how could I make multiple inputs go into a function?

#### NOTE-6
- Partial Application VS Currying
  * Both are specialization techniques
  * Partial application presets some arguments now, receives the rest on the next call
  * Currying doesn't preset any arguments, receives each argument one at a time

#### NOTE-7
- The only difference to use trampoline is you have to take any call would have been recursive and wrap it in a function and return it.

#### NOTE-8
- A functor is a value, and by value we mean could be a collection of values over which those values in it can be mapped.
- In fact any data structure for which we identified and defined a map operation that constitutes or gives the characteristic that it behaves as a functor.
