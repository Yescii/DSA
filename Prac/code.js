// num1 = 125;
// num2 = 1221221;

// console.log(num1 + "--------");
// console.log(num1 % 10);
// console.log(Math.floor(num1 % 10));

// console.log(num1 + "--------");
// console.log(num2 % 10);
// console.log(Math.floor(num2 % 10));
let x = 121;

// while (x != 0) {
//   let res = x % 10;
//   console.log(res);

//   rev = rev *10 + (x %10);
//   x = Math.floor(x/10);
// }

console.log("Modular 150");

console.log(150 % 10);
// var isPalindrome = function(x) {
//     if(x < 0 || (x % 10 == 0 && x != 0)) { x <= 0 || x % 10 == 0
//         return false;
//     }
//     let oldX = x, rev = 0;
//     while(x != 0) {
//        rev = rev * 10 + (x % 10);
//        x = Math.floor(x/10);
//     }
//     return rev === oldX;
// };

// let s = "stock";
// let idx = 3;

// console.log(`the '${s}' string index of ${idx} is ${s[idx]}`);

// let g = "goo";
// g += "gle";
// console.log(g);

// for(let i = 0; i < s.length; i++){
//     let next = i+1;
//     let curr = i;
//     if(s[curr] === s[next] || val.includes(s[i])){
//         longStr = (val.length > longStr) ? val.length : longStr;
//         val = '';
//     }
//      else{ // (s[curr] != s[next])
//         val += s[curr];

//     }
// }

// // 1st
// for(let i = 0; i < s.length; i++){
//     let next = i+1;
//     let curr = i;
//     if(s[curr] != s[next]){
//         val += s[curr];

//     }else{
//         longStr = (val.length > longStr) ? val.length : longStr;
//         val = '';
//     }
// }
// return longStr;

// if(s.length > 0 && val.length == 0) return 1;
//     return longStr;

var lengthOfLongestSubstring = function (s) {
  let val = "";
  let longStr = 0;

  for (let i = 0; i < s.length - 1; i++) {
    // let next = i + 1;
    // let curr = i;
    // if (!s[next]) {
    //   longStr = val.includes[s[curr]] ? longStr : longStr + 1;
    //   break;
    // } (
    //   s[curr] === s[next] ||
    //   (val.includes(s[curr]) )
    // )else if {
    //   s[curr] === s[curr - 1] ? val += s[curr] :
    //   // longStr = val.length > longStr ? val.length : longStr;
    //   // console.log(val);
    //   // val = "";
    // } else {
    //   ;
    // }
  }

  return s.length > 0 && longStr == 0 ? 1 : longStr;
};
let t = "abbcdb";
let s = "pwwkew";
console.log("-=-=-=-=-=");
console.log(lengthOfLongestSubstring(t));
console.log(s);
