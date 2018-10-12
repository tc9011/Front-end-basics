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



// recursive without tail call
function recursive(x) {
  if (x <= 0) {
    return 1;
  } else {
    return x * tailRecursive(x - 1);
  }
}

// tail recursive
function factor(n) {
  return recursive(n, 1);
}

function recursive(x, acc) {
  if (x <= 0) {
    return acc;
  } else {
    return recursive(x - 1, x * acc);
  }
}
