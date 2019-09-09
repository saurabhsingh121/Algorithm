function findFactorialRecursive(number) {
  if (number === 2) {
    return 2;
  }
  return number * findFactorialRecursive(number - 1);
}

console.log("====================================");
console.log(findFactorialRecursive(6));
console.log("====================================");
