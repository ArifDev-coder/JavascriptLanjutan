// Rest Parameter
// function myFunc() {
    // return `a = ${a}, b = ${b}, myArgs = ${myArgs}`;
    // return myArgs;
    // return Array.from(arguments);
    // return[...arguments];
// }
// console.log(myFunc(1, 2, 3, 4, 5));

// function penjumlahan(...numbers) {
//     // let total = 0;
//     // for(const n of numbers) {
//     //     total += n;
//     // }
//     // return total;
    
//     return angka.reduce((a, b) => a + b);
// }
// console.log(penjumlahan(1, 2, 3 ,4 , 5));

// array destructuring
const kelompok1 = ['Arif', 'Bilal', 'Herda', 'Yahya', 'Adam'];
const [ketua, wakil, ...anggota] = kelompok1;
console.log(ketua);