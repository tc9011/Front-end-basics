// tail call
function f() {
  return g(x);
}

function f3(x) {
  if (x > 0) {
    return m(x);
  }
  return n(x);
}

// these are not tail calls
function f1() {
  let y = g(x);
  return y;
}

function f2() {
  return g(x) + 1;
}
