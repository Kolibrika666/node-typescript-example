function isPrimeTs(num: number): boolean | undefined {
  for (let i: number = 2; i < num; i++) {
    return num % i === 0 ? false : true;
  }
}
console.log(isPrime(7));
