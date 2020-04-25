const just = (value) => {
  const map = (fn)  => Just(fn(value));
  const chain = (fn) => fn(value);
  const ap = (anotherMonad) => anotherMonad.map(value);
  return {
    map, chain, ap
  }

}

const nothing = () => {
  const map = nothing;
  const chain = nothing;
  const ap = nothing;
  return {
    map, chain, ap
  }
}

const maybe = {just, nothing, of: just};
