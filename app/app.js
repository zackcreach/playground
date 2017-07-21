// Loop fun
// import {loopFor, loopWhile, loopDoWhile} from 'loops.js';

// window.onload = () => {
//   loopFor();
//   loopWhile();
//   loopDoWhile();
// }



// Selector fun
// import selected from 'selectors';
//
// const colorAry = ['blue', 'red', 'yellow', 'black', 'purple'];
// const appList = document.querySelector('app');
//
// new selected(colorAry, appList);


// Test
var x = 6;
var y = 4;
var a = function(b) {
  return function(c) {
    return y + b + c;
  }
};
x = 2;
y = 5;
var fn = a(x);
x = 1;
y = 3;
var unknown = 5;
console.log(fn(unknown));



function scaleImage(width, height, maxdim) {
var scale = Math.min(maxdim / width, maxdim / height);

return [scale * width, scale * height];
}

console.log(scaleImage(2000,44080,500));
