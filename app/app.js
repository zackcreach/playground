// Loop fun
// import {loopFor, loopWhile, loopDoWhile} from 'loops.js';

// window.onload = () => {
//   loopFor();
//   loopWhile();
//   loopDoWhile();
// }



// Selector fun
import selected from 'selectors';

const colorAry = ['blue', 'red', 'yellow', 'black', 'purple'];
const appList = document.querySelector('app');

new selected(colorAry, appList);
