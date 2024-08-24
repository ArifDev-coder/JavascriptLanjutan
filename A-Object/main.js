// Cara untuk membuat object pada javacript
// 4.Object.create();

// 1.Object Literal
// let mahaSiswa1 = {
    //     nama: 'Arif',
//     energi: 10,
//     makan: function(porsi) {
    //         this.energi = this.energi + porsi;
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
// function Mahasiswa(nama, energi) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     mahasiswa.makan = function(porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan`);
//     }
//     mahasiswa.main = function(jam) {
//         this.energi -= jam;
//         console.log(`Selamat bermain, energimu sekarang ${this.energi}`);
//     }
//     return mahasiswa
// }

// let arif = Mahasiswa('Arif', 12);
// let jepri = Mahasiswa('Jepri', 34);

// jepri.main(10);


// 3.Constructor Function
function Mahasiswa(nama, energi) {

    this.nama = nama;
    this.energi = energi;

    this.makan = function(porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selamat makan`);
    }
    this.main = function(jam) {
        this.energi -= jam;
        console.log(`Selamat bermain, energimu sekarang ${this.energi}`);
    }
}
let arif = new Mahasiswa("Arif", 27);
arif.main(5);

console.log(arif);