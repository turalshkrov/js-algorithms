const array = [1, 3, 9, 6, 5 ,7 ,8 ,2, 4];

const merge = (arrL, arrR) => {
  const result = [];
  let iR = 0;
  let iL = 0;
  while (iL < arrL.length && iR < arrR.length) {
    if(arrL[iL] < arrR[iR]){
      result.push(arrL[iL]);
      iL += 1;
    } else {
      result.push(arrR[iR]);
      iR += 1;
    }
  }
  while (iL < arrL.length) {
		result.push(arrL[iL]);
		iL++;
	}

	while (iR < arrR.length) {
		result.push(arrR[iR]);
		iR++;
	}
  return result;
}

const mergesortRec = (array) => {
  if (array.length === 1) {
    return array
  }
  if (array.length > 1) {
    const mid = Math.floor(array.length / 2)
    const arrayL = array.slice(0, mid);
    const arrayR = array.slice(mid, array.length);
    return merge(mergesortRec(arrayL), mergesortRec(arrayR));
  } 
}

console.log(mergesortRec(array))