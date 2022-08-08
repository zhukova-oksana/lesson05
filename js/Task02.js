'use strict';

const isPrime = (number) => {
  let plain;
  for (let i = 1; i <= number; i +=1) {
    if ((number % i) === 0) {
      if ((i === 1) || (i === number)) {
        plain = true;
      } else {
        plain = false;
        break;
      }
    }
  }
  return plain;
}

const simple = isPrime(11);
console.log(simple);
