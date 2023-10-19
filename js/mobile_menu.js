//ЗАДАЧА  1 повернути рядок скільки разів він повторюється__________________________

// function repeatStr(n, s) {
//   let str = '';
//   for (let i = 0; i < n; i++) {
//     str += s;
//   }
//   return str;
// }
// ///////////// 2-й варіант
// // function repeatStr(n, s) {
// //   return s.repeat(n);
// // }
// console.log(repeatStr(6, 'Hi'));
// console.log(repeatStr(4, 'Yes'));

//ЗАДАЧА 2 якщо  парне помножити на 8 якщо не парне помножити на 9________________________
///моє рішення
// // function simpleMultiplication(number) {
// //   return !(number % 2) ? (number *= 8) : (number *= 9);
// // }
// ///рішення з інету
// function simpleMultiplication(n) {
//   return n * (n % 2 ? 9 : 8);
// }
// console.log(simpleMultiplication(3)); // 3 * 9
// console.log(simpleMultiplication(2)); // 2* 8

//ЗАДАЧА 3 порахувати скільки років тому батько був удвічі старший за сина (чи через скільки років він буде удвічі старший) ___________________________

// function twiceAsOld(dadYearsOld, sonYearsOld) {
//   // your code here
// }
// console.log(twiceAsOld(20, 10)); //0

// function booleanToString(b) {
//     return String(b);
//     // return b + ''
// }
// console.log(booleanToString(false));
// console.log(booleanToString(true));
