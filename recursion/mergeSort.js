const array = [1, 3, 9, 6, 5 ,7 ,8 ,2, 4];

const mergeRec = (array) => {
  if (array.length === 1) {
    return array;
  }
  if (array.length > 1) {
    const mid = Math.floor(array.length / 2);
    const leftArray = array.slice(0, mid);
    const rightArray = array.slice(mid, array.length);
    return merge(mergeRec(leftArray), mergeRec(rightArray));
  }
}

const merge = (leftArray, rightArray) => {
  const result = [];
  let iR = 0;
  let iL = 0;
  while (iL < leftArray.length && iR < rightArray.length) {
    if (leftArray[iL] < rightArray[iR]) {
      result.push(leftArray[iL]);
      iL++;
    } else {
      result.push(rightArray[iR]);
      iR++
    }
  }
  while (iL < leftArray.length) {
    result.push(leftArray[iL]);
    iL++;
  }
  while (iR < rightArray.length) {
    result.push(rightArray[iR]);
    iR++;
  }
  return result;
}

console.log(mergeRec(array));