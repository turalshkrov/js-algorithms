const range = (a, b) => {
  if (b - a === 1) {
    return [b];
  }
  return [a, ...range(a + 1, b)];
}

console.log(range(2, 8));