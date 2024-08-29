// let total = 0, count = 1;
// while(count <= 10) {
//     total += count;
//     count += 1;
// }
// console.log(total);

// console.log(sum(range(1, 10)));

// for(let i = 0; i < 10; i++) {
//     console.log(i);
// }

// function repeateLog(n) {
//     // untuk bilangan negatif
//     if (n < 0) {
//         for(let i = 0; i >= n; i--) {
//             console.log(i);
//         }
//     }else {
//         for(let i = 0; i <= n; i++) {
//             console.log(i);
//         }
//     }
//     return;
// }
// repeateLog()

// function repeat(n, action) {
//     if (n < 0) {
//         for(let i = 0; i >= n; i--) {
//             action(i);
//         }
//     }else {
//         for(let i = 0; i <= n; i++) {
//             action(i);
//         }
//     }
// }
// repeat(-10, console.log);

const num = [1, -2, 22, 23.3, -133, 49, 65.3, 2, 8, 3.5];

// const newNum = [];

// // mencari angka >= 3
// for(let i = 0; i <= num.length; i++) {
//     if (num[i] >= 3) {
//         newNum.push(num[i]);
//     }
// }

// filter
// const newNum = num.filter(n => n >= 3);
// console.log(newNum);

// map
// kalikan semua angka dengan 2
// const newNum = num.map(n => n * 2);
// console.log(newNum);

// reduce 
// jumlahkan seluruh elemen pada array
// 0 + 1 + -2 + 22 + 23.3 + -133 + 49 + 65.3 + 2 + 8 + 3.5
// const newNum = num.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // ->  nilai awal
// console.log(newNum);

// method chaining
// cari angka > 5
// kalikan 3
// jumlahkan
const result = num.filter(n => n > 5)
    .map(n => n * 3)
    .reduce((acc, cur) => acc + cur);
console.log(result)