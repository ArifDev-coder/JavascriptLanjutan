// Asynchronous Javascript
// console.log('satu');
// setTimeout(() => {
//     console.log('dua');
// }, 5000);
// console.log('tiga');

// Callbacks
// Synchronous Callback
// function halo(name) {
//     alert(`Halo, ${name}`);
// }

// function tampilkanPesan(callback) {
//     const nama = prompt('Masukkan nama: ');
//     callback(nama);
// }
// tampilkanPesan(nama => alert(`Halo, ${nama}`));

// const ssw = [
//     {
//         "nama": "Achmad Zainul Arif",
//         "kelas": "8C",
//         "email": "arif@gmail.com",
//         "jurusan": "sistem informasi",
//         "noAbsen": 1
//     },
//     {
//         "nama": "Jefri",
//         "kelas": "8C",
//         "email": "jefri@gmail.com",
//         "jurusan": "kepolisian",
//         "noAbsen": 7 
//     },
//     {
//         "nama": "Felix",
//         "kelas": "8A",
//         "email": "jefri@gmail.com",
//         "jurusan": "3d modeling",
//         "noAbsen": 25
//     }
// ]
// console.log('==Start==');
// ssw.forEach(s => {
//     for(let i = 0; i <= 100000; i++){
//         let date = new Date();
//     }
//     console.log(s.nama);
// })
// console.log('==Finish==');

// Asyncronous Callback

// function getDataSiswa(url, success, error) {
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = () => {
//         if(xhr.readyState === 4) {
//             if(xhr.status === 200) {
//                 success(xhr.response);
//             }else if(xhr.status === 404) {
//                 error();
//             }
//         }
//     }
//     xhr.open('get', url);
//     xhr.send();
// }


// console.log('==Start==');
// getDataSiswa('siswa.json', result => {
    //     const ssw = JSON.parse(result);
    //     ssw.forEach(s => console.log(s.nama))
    // }, () => {});
// console.log('==Finish==');



// JQuery
console.log('==Start==');
$.ajax({
    url: 'data/siswa.json',
    success: (ssw) => {
        ssw.forEach(s => console.log(s.nama));
    },
    error: (err) => {
        console.log(err.responseText);
    }
})
console.log('==Finish==');