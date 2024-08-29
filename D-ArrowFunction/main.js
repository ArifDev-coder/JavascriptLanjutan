// Funcion Expression
// const tampilNama = function (nama) {
//     return nama;
// }
// console.log(tampilNama('Arif'));


// Arrow Funtion
// const tampilNama = nama => {return `Halo, ${nama}`};
// console.log('Arif');

// implisit return
// const tampilNama = (nama, waktu) => `Halo ${nama}, selamat ${waktu}`;
// console.log(tampilNama('Arif', 'Pagi'));

// const tampilNama = () => `Hello world!`;
// console.log(tampilNama());

let num = ['satu', 'dua', 'tiga', 'empat'];
// let jumlahHuruf = num.map(nama => nama.length);
// console.log(jumlahHuruf);
let jumlahHuruf = num.map(number => ({
    number,
    jumlahHuruf: number.length
}));
console.table(jumlahHuruf);