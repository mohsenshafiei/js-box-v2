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
