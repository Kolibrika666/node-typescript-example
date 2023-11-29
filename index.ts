function isPrimeTs(num: number): boolean {
  for (let i: number = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return false;
}
console.log(isPrime(7));
