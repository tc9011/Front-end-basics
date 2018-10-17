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
function factorial(x) {
  if (x <= 0) {
    return 1;
  } else {
    return x * factorial(x-1);
  }
}

// tail recursive
function factorial(n) {
  return facRec(n, 1);
}

function facRec(x, acc) {
  if (x <= 1) {
    return acc;
  } else {
    return facRec(x-1, x*acc);
  }
}
