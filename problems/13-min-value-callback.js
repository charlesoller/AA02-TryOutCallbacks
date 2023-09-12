/*******************************************************************************
Write a function `minValueCallback` that accepts an array and an optional callback as arguments.
If a callback is not passed in, then the function should return the smallest
value in the array. If a callback is passed in, then the function should return
the result of the smallest value being passed into the given callback.

Examples:
console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3

*******************************************************************************/

function minValueCallback(array, cb) {
    let number = 0;

    if(cb === undefined){
      return Math.min(...array);
    }

    // } else {
    //     for (let i = 0; i < array.length; i++){
    //       number = cb(Math.min(...array))
    //     }
    // }

    let num = cb(array[0]);
    for (let i = 1; i < array.length; i++){
      if(cb(array[i]) < num){
        num = cb(array[i])
      }
    }

    return num;
}

console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
  module.exports = minValueCallback;
} catch(e) {
  return null;
}
