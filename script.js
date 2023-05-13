// const mainHeader = document.getElementById('test');

// window.onload = mainHeader.style.animationDuration = 'Math.ceil((Math.random() + 1) * 3)';
// // window.onload = randomDuration;

// // function randomDuration() {
// //   for (let i = 0; i < 1; i++) {
// //     mainHeader.style.animationDuration = 'Math.ceil((Math.random() + 1) * 3)';
// //     // window.onload(console.log('hey'));
// //   }
// // }

const arr1 = [-52, 56, 30, 29, -54, 0, -110];

var min = function (list) {
  list.sort((first, second) => (first > second ? 1 : -1));
  return list[0];
};

var max = function (list) {
  list.sort((first, second) => (first > second ? -1 : 1));
  return list[0];
};
