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