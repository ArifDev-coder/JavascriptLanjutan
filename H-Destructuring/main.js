// Destructuring Variabel / Assignment

// Destructuring Array

const perkenalan = ['Hello', 'Nama', 'Saya', 'Arif'];

// const [salam, satu, dua, nama] = perkenalan;
// skipping items
// const [salam, , , nama] = perkenalan;
// console.log(salam);
// console.log(nama);

// swap items
// let a = 1;
// let b = 2;
// console.log(a, b);
// [a, b] = [b, a];
// console.log(a, b);

// return value pada function
// function coba() {
//     return[1, 2];
// }
// const [a, b] = coba();
// console.log(a);

// Rest parameter
// const [a, ...values] = [1, 2, 3, 4];
// console.log(a, values)


// Destructuring Object
// const ssw = {
//     nama: 'Arif',
//     umur: 14
// }

// const {nama, umur} = ssw;
// console.log(nama);

// Assignment tanpa deklarasi object
// ({nama, umur} = {nama: 'Arif', umur: 14});
// console.log(nama);

// Assign ke variabel baru
// const ssw = {
//     nama: 'Arif',
//     umur: 14
// }

// const {nama: n, umur: u} = ssw;
// console.log(n);

// Memberikan Deafault value
// const ssw = {
//     nama: 'Arif',
//     umur: 14,
//     email: 'achad@gmail.com'

// }

// const { nama, umur, email = 'Not Verify Email!' } = ssw
// console.log(email)

// Memberi nilai default + assign ke veriabel baru
// const ssw = {
//     nama: 'Arif',
//     umur: 14,
//     email: 'achad@gmail.com'

// }

// const { nama: n, umur: u, email: e = 'Not Verify Email!' } = ssw;
// console.log(email);

// Rest Parameter
// const ssw = {
//     nama: 'Arif',
//     umur: 14,
//     email: 'achad@gmail.com'

// }

// const { nama, ...value } = ssw;
// console.log(value);

// Mengambil field pada object, setelah dikirim sebagai parameter untuk function
// const ssw = {
//     id: 1,
//     nama: 'Arif',
//     umur: 14,
//     email: 'achad@gmail.com'

// }

// function getIdSsw({ id }) {
//     return id;
// }
// console.log(getIdSsw(ssw));

// This is arch linux write


function c(values) {
    console.log(values);
}


// Destructuring Function

// function kalkulasi(a, b) {
//     return [a + b, a - b, a * b, a / b];
// }

// const [jumlah, kali] = penjumlahanPerkalian(2, 5);
// c(jumlah);
// c(kali);

// const [tambah, kurang, kali, bagi, sisaBagi = 'Operasi tidak ditemukan!'] = kalkulasi(4, 5);
// c(tambah);
// c(kurang);
// c(kali);
// c(bagi);
// c(sisaBagi);

// function kalkulasi(a, b) {
//     return {
//         tambah: a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a / b
//     }
// }

// const { bagi, kurang, tambah, kali } = kalkulasi(10, 2);
// c(tambah);
// c(kurang);
// c(kali);
// c(bagi);

// Destructuring function arguments

// const sws1 = {
//     nama: 'Aarif',
//     umur: 14
// }
// function ctkSws(sws1) {
//     return `Halo, nama saya ${sws1.nama}, saya umur ${sws1.umur} tahun.`
// }
// c(ctkSws(sws1));

const sws1 = {
    nama: 'Aarif',
    umur: 14,
    nilai: {
        tugas: 80,
        uts: 85,
        uas: 90
    }
}
function ctkSws({nama, umur, nilai: {tugas, uts, uas}}) {
    return `Halo, nama saya ${nama}, saya umur ${umur} tahun. Nilai UAS saya ${uas}, nilai uts saya ${uts}`;
}
c(ctkSws(sws1));