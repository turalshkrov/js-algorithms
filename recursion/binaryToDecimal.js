const binaryToDecimal = (binary) => {
  binary = Number(binary);
  if (String(binary).length === 1) {
    return binary;
  }
  binary = String(binary);
  return binary[0] * Math.pow(2, binary.length - 1) + binaryToDecimal(binary.slice(1, binary.length))
}

console.log(binaryToDecimal(111));