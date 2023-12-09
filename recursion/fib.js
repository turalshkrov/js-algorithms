const fib = (n) => {
  const fibArray = [0, 1];
  if (n < 2) {
    return fibArray.slice(0, n)
  } else {
    for (let i = 2; i < n; i++) {
      fibArray.push(fibArray[i - 1] + fibArray[i - 2])
    }
    return fibArray
  }
}

const fibRec = (n) => {
  if (n < 1) {
    return []
  } else if(n === 1) {
    return [ 0 ]
  } else if (n === 2) {
    return [ 0, 1 ]
  } else {
    return [...fibRec(n - 1), fibRec(n - 1)[n - 2] + fibRec(n - 1)[n - 3]]
  }
}

console.log(fib(0)); // []
console.log(fib(1)); // [ 0 ]
console.log(fib(4)); // [ 0, 1, 1, 2 ]
console.log(fib(6)); // [ 0, 1, 1, 2, 3 ,5 ]

console.log(fibRec(1)); // [ 0 ]
console.log(fibRec(3)); // [ 0, 1, 1 ]
console.log(fibRec(8)); // [ 0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibRec(10)); // [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]