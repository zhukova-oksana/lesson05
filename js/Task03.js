'use strict';

const getString = (str) => {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i -= 1) {
    newString += str[i];
  }
  return newString;
}

console.log(getString('Привет мир'));
