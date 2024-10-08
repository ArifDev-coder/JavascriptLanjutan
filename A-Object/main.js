// Cara untuk membuat object pada javacript

// 1.Object Literal
// let mahaSiswa1 = {
//     nama: 'Arif',
//     energi: 10,
//     makan: function(porsi) {
//           this.energi = this.energi + porsi;
//         console.log(`Selamat datang ${this.nama}, selamat makan`)
//     },
// }
// let mahaSiswa2 = {
//     nama: 'Jepri',
//     energi: 23,
//     makan: function(porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Selamat datang ${this.nama}, selamat makan`)
//     },
// }

// mahaSiswa1.makan(9);
// console.log(mahaSiswa1);
// mahaSiswa2.makan(16);
// console.log(mahaSiswa2);



// 2.Function Declaration
// const methodMahasiswa = {
//     makan: function(porsi) {
//         this.energi += porsi;
//         console.log(`Selamat makan ${this.nama}, energimu sekarang ${this.energi}`);
//     },
//     main: function(jam) {
//         this.energi -= jam;
//         console.log(`Selamat bermain, energimu sekarang ${this.energi}`);
//     },
//     tidur: function(jam) {
//         this.energi += jam * 2;
//         console.log(`Selamat tidur ${this.nama}, energimu sekarang ${this.energi}`)
//     }
// }
// function Mahasiswa(nama, energi) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
//     mahasiswa.makan = methodMahasiswa.makan;
//     mahasiswa.main = methodMahasiswa.main;
//     mahasiswa.tidur = methodMahasiswa.tidur;
    
//     return mahasiswa;
// }

// let arif = Mahasiswa('Arif', 12);
// let jepri = Mahasiswa('Jepri', 34);

// jepri.main(10);


// 3.Constructor Function
// function Mahasiswa(nama, energi) {

//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function(porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan`);
//     }
//     this.main = function(jam) {
//         this.energi -= jam;
//         console.log(`Selamat bermain, energimu sekarang ${this.energi}`);
//     }
// }
// let arif = new Mahasiswa("Arif", 27);
// arif.main(5);

// console.log(arif);



// 4.Object.create();
// const methodMahasiswa = {
//     makan: function(porsi) {
//         this.energi += porsi;
//         console.log(`Selamat makan ${this.nama}, energimu sekarang ${this.energi}`);
//     },
//     main: function(jam) {
//         this.energi -= jam;
//         console.log(`Selamat bermain, energimu sekarang ${this.energi}`);
//     },
//     tidur: function(jam) {
//         this.energi += jam * 2;
//         console.log(`Selamat tidur ${this.nama}, energimu sekarang ${this.energi}`)
//     }
// }
// function Mahasiswa(nama, energi) {
//     let mahasiswa = Object.create(methodMahasiswa); // untuk menhubungkan object tertentu ke object yang lain
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
    
//     return mahasiswa;
// }

// let arif = Mahasiswa('Arif', 12);
// let jepri = Mahasiswa('Jepri', 34);

// jepri.main(10);
// arif.tidur(23);

// MEMBUAT PROTOTYPE
// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
// }

// Mahasiswa.prototype.makan = function(porsi) {
//     this.energi += porsi;
//     return `Selamat makan ${this.nama},  energimu sekarang ${this.energi}`;
// }
// Mahasiswa.prototype.main = function(jam) {
//     this.energi -= jam;
//     return `Selamat main ${this.nama},  energimu sekarang ${this.energi}`;
// }

// let arif = new Mahasiswa('Arif', 12);

// console.log(arif.makan(4));
// console.log(arif.main(4));


// VERSI Class
// class Mahasiswa {
//     constructor(nama, energi) {
//         this.nama = nama;
//         this.energi = energi;
//     }
//     makan(porsi) {
//         this.energi += porsi;
//         return `Selamat makan ${this.nama},  energimu sekarang ${this.energi}`;
//     }
//     mainn(jam) {
//         this.energi -= jam;
//         return `Selamat main ${this.nama},  energimu sekarang ${this.energi}`;
//     }
// }

// let arif = new Mahasiswa('arif', 12);

// console.log(arif.makan(23))
// console.log(arif);

let angka = [1,5,2,4];
console.log(angka.sort());
// let angka = new Array(); // ini yang akan bekarja di belakang layar