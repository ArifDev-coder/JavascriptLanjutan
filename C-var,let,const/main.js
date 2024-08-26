// VAR   // Hoisting
// var v;
// console.log(v);
// var v = 10;
// function varTest() {
//     for(var i = 0; i<10; i++) {
//         console.log(i);
//     } // -> block prgram
//     console.log(i);
// }
// varTest();
// (function() {
//     for(var i = 0; i < 10; i++) {
//         console.log(i);
//     }
// }())



// LET & CONST
// console.log(l); // Akan error
// let l = 10;
for(let i = 0; i < 10; i++) {
    console.log(i);
}

const i = [1, 2, 3];
i.push(4);
console.log(i);