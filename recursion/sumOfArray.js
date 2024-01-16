const sumOfArray = (array) => {
  if (array.length === 1) {
    return array[0]
  }
  const lastIndex = array.length - 1;
  return sumOfArray(array.slice(0, lastIndex)) + array[lastIndex];
}

console.log(sumOfArray([1, 2, 3, 4, 5, 6]));