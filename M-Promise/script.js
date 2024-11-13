// Menggunkan Jquery
// $.ajax({
//     url: 'http://www.omdbapi.com/?apikey=dca61bcc&s=avengers',
//     success: movies => console.log(movies)
// })


// Menggunakan javascript murni
// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//     if (xhr.status === 200) {
//         if (xhr.readyState === 4) {
//             console.log(JSON.parse(xhr.response));
//         }
//     }else {
//         console.log(xhr.responseText);
//     }
// }

// xhr.open('get', 'http://www.omdbapi.com/?apikey=dca61bcc&s=avengers');
// xhr.send();

// Fetch javascript
// fetch('http://www.omdbapi.com/?apikey=dca61bcc&s=avengers')
//     .then(response => response.json())
//     .then(response => console.log(response));

// Promise
// Object yang merepresentasikan keberhasilan / kegagalan sebuah event yang asynchronous di masa yang akan datang
// janji (terpenuhi / ingkar)
// states (fullfilled / rejected / pending)
// callback (resolve / reject / finally)
// aksi (then / catch)


// contoh 1
// let ditepati = false;
// const janji1 = new Promise((resolve, reject) => {
//     if(ditepati) {
//         resolve('Janji telah ditepati!')
//     }else{
//         reject('Ingkar janji :(');
//     }
// });
// janji1
//     .then(response => console.log(`OKe! ${response}`))
//     .catch(response => console.log(`Not Oke! ${response}`))

// contoh 2
// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//     if(ditepati) {
//         setTimeout(() => {
//             resolve(`Ditepati setelah beberapa waktu!`);
//         }, 2000);
//     }else {
//         setTimeout(() => {
//             resolve(`TIdak ditepati setelah beberapa waktu!`);
//         }, 2000);
//     }
// });

// console.log('mulai');
// // console.log(
// //     janji2
// //         .then(() => console.log(janji2))
// // )

// janji2
// .finally(() => console.log('selesai menunggu!'))
// .then(response => console.log(`OKe! ${response}`))
// .catch(response => console.log(`Not Oke! ${response}`))

// console.log('selesai');

// Promise.all()
const content = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            judul: 'Javascript Lanjutan',
            creator: 'Sandhika Galih',
            nama_chanel: 'Web Programing Unpas'
        }])
    }, 1000)
});

const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            kota: 'Pasuruan',
            temperatur: 23,
            kondisi: 'Mendung'
        }])
    }, 500)
})

// content.then(response => console.log(response));
// cuaca.then(response => console.log(response));

Promise.all([content, cuaca])
// .then(response => console.log(response))
    .then(response => {
        const [content, cuaca] = response; // spread operator
        console.log(content);
        console.log(cuaca);
    });