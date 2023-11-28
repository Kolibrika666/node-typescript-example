function isPrime(num) {
  for (i = 2; i < num; i++) {
    return num % i === 0 ? false : true;
  }
}
console.log(isPrime(7));
