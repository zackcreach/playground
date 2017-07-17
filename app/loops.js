const appAll = document.querySelectorAll('.app');
let app1 = appAll[0];
let app2 = appAll[1];
let app3 = appAll[2];

export const loopFor = () => {
  for (let i = 10; i < 30; i++) {
    app1.innerHTML += "For Loop: " + i + "<br>";
  }
}

export const loopWhile = () => {
  let i = 0;
  while (i < 10) {
    app2.innerHTML += "While Loop: " + i + "<br>";
    i++;
  }
}

export const loopDoWhile = () => {
  // do {
  //
  // }
  // while {
  //   (i < 10)
  // }
}
