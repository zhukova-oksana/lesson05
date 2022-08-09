'use strict';

const isPrime = (number) => {
  let plain;
  let i = 0;
  while (i <= number) {
    if (number === 1) {
      plain = false;
      break;
    }

    if ((number % i) === 0) {
      if ((i === 1) || (i === number)) {
        plain = true;
      } else {
        plain = false;
        break;
      }
    }

    i += 1;
  }
  return plain;
}

const simple = isPrime(13);
console.log(simple);
