// Executiong Context, Hoisting, Scope

// var nama = 'Arif';
// console.log(nama);

// creating phase => fase kreasi - pada Global Context
// nama var = undefined
// nama function = fn()
// fase ini disebut hoisting
// window => global object
// this => window

// execution phase

// var Orang = 'Arif';
// var Umur = 14;
// console.log(sayHello());

// function sayHello() {
//     return `Halo nama saya ${Orang}, saya umur ${Umur} tahun.`;
// }

// function membuat local execution context
// yang di dalamnya terdapat creation dan execution phase
// window
// arguments
// hoisting


// var nama = 'Zainul Arif';
// var userName = "ArifDev-coder";

// function cetakURL() {
//     console.log(arguments)
//     var githubURL = 'https://github.com/';
//     return githubURL + userName;
// }
// console.log(cetakURL('flaxencraft'));



// function a() {
//     console.log('ini a');
//     function b() {
//         console.log('ini b');
//         function c() {
//             console.log('ini c');
//         }
//         c();
//     }
//     b();
// }
// a();


// function satu() {
//     var nama = 'Zainul';
//     console.log(nama);
// }
// function dua() {
//     console.log(arguments);
//     console.log(nama);
// }
// console.log(nama);
// var nama = 'Arif';
// satu();
// dua('Achad');
// console.log(nama);


//  ====================================================================

// Closure
// Lexical Scope
// function init() {
//     // let nama = 'Arif';  // closure
//     return function tampilNama(nama) {
//         // let nama = 'Zainul' // bukan closure
//         console.log(nama);
//     }
// }
// let panggilNama = init();
// panggilNama('Arif');
// panggilNama('Zainul');

// function ucapkanSalam(waktu) {
//     return function(nama) {
//         console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan`);
//     }
// }
// let selamatPagi = ucapkanSalam('Pagi');
// let selamatSiang = ucapkanSalam('Siang');
// let selamatMalam = ucapkanSalam('Malam');

// selamatPagi('Arif');
// selamatMalam('Achad');

let add = (function() {
    let counter = 0;
    return function() { return ++counter} ;
})();


console.log(add(1));
console.log(add());
console.log(add());
console.log(add());
console.log(add());