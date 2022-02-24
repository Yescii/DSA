const nums = [10, 20, 30, 40, 50];

let sum = 0;
// for (const value of nums) {
//   sum += value;
// }

let val = nums.reduce((sum, value) => {
  sum += value;

  return sum;
}, 0); //takes two params. function and initial value

// let val = nums.reduce((sum, value) => sum + value, 0); //takes two params. function and initial value

let avg = nums.reduce((avg, value, _, arr) => avg + value / arr.length, 0);

let avg2 = nums.reduce((avg, value, _, arr) => {
  avg += value / arr.length;
  console.log(avg);
  return avg;
}, 0); //takes two params. function and initial value

// console.log(val);
// console.log(sum);
// console.log(avg);

const names = ["LG", "Mimi", "Sadie", "Ripley"];

const str = names.reduce(
  (str, name, indx) => str + (indx > 0 ? ", " : "") + name,
  ""
);

let joinArr = names.join(", ");

// console.log(str);

console.log(joinArr);
