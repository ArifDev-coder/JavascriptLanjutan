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

// let num = ['satu', 'dua', 'tiga', 'empat'];
// let jumlahHuruf = num.map(nama => nama.length);
// console.log(jumlahHuruf);
// let jumlahHuruf = num.map(number => ({
//     number,
//     jumlahHuruf: number.length
// }));
// console.table(jumlahHuruf);


// KONSEP THIS PADA ARROW FUNCTION

// const Siswa = function () {
//     this.nama = 'Arif';
//     this.umur = 14;
//     this.sayHello = function () {
//         console.log(`Halo,  nama saya ${this.nama}, umur saya ${this.umur}`);
//     }
// }

// const arif = new Siswa();

// Arrow function
// const Siswa = function () {
//     this.nama = 'Arif';
//     this.umur = 14;
//     this.sayHello = () => {
//         console.log(`Halo,  nama saya ${this.nama}, umur saya ${this.umur}`);
//     }
// }

// const arif = new Siswa();
// arif.sayHello();

// Object Literal
// const siswa1 = {
//     nama: 'Arif',
//     umur: 14,
//     sayHello: () => {
//         console.log(`Halo,  nama saya ${this.nama}, umur saya ${this.umur}`);
//         console.log(this);
//     }
// }
// siswa1.sayHello();