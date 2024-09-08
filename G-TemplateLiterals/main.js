// Template Literals / Template String

// const nama = 'Arif';
// const umur = 14;

// console.log('Halo nama saya ' + nama + ', dan saya' + umur + ' tahun.')
// console.log(`Halo nama saya ${nama}, dan saya ${umur} tahun.`);


// Embedded Expressions
// sayHello = () => `Halo nama saya ${nama}, dan saya ${umur} tahun.`
// const x = 10

// console.log(`${1 + 1}`);
// console.log(`${sayHello()}`);
// console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`); // -> operator ternary

// HTML Fragments
// const Siswa = {
//     nama: 'Achmad Zainul Arif',
//     umur: 14,
//     phone: 32343434,
//     email: 'anjayjs12@gmail.com'
// };
// const el = `
// <div class="siswa">
//     <h2>Nama Siswa : ${Siswa.nama}</h2>
//     <span class="phone">Nomor Hp Siswa: ${Siswa.phone}</span>
// </div>
// `

// 2. looping
// const sws = [
//     {
//         nama: 'Arif',
//         umur: 12,
//     },
//     {
//         nama: 'Zainul',
//         umur: 14,
//     },
//     {
//         nama: 'Achmad',
//         umur: 45,
//     }
// ]
// const el = `
// <div class="siswa">
//     <h2>Nama Siswa : ${sws.nama}</h2>
//     ${sws.map(m => `<ul>
//             <li>Nama: ${m.nama}</li>
//             <li>Umur: ${m.umur}</li>
//         </ul>`).join('')}
// </div>
// `

// 3. Conditionals
// ternary
// const lagu = {
//     judul: 'Death Bed',
//     penyanyi: 'Powfu, beabadoobee',
//     feat: 'coffee for your head'
// }
// const el = `<div class="lagu">
//     <ul>
//         <li>${lagu.judul}</li>
//         <li>${lagu.penyanyi} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
//     </ul>
// </div>`

// 4. Nested
// HTML Fragments bersarang
// const ssw = {
//     nama: 'Arif',
//     kelas: 8,
//     Ekstrakurikuler: [
//         `Taekwondo`,
//         `Pemprograman`
//     ]
// }

// function cetakEkstrakurikuler(Ekstrakurikuler) {
//     return `
//         <ol>
//             ${Ekstrakurikuler.map(mk => `<li>${mk}</li>`).join('')}
//         </ol>
//     `
// }

// const el = `<div class="ssw">
//     <h2>Nama: ${ssw.nama}</h2>
//     <span class="Kelas">Kelas: ${ssw.kelas}</span>
//     <h4>Ekstrakurikuler: </h4>
//     ${cetakEkstrakurikuler(ssw.Ekstrakurikuler)}
// </div>`

// document.body.innerHTML = el;

// Tagged Templates
// const nama = 'Arif';
// const umur = 14;

// function coba(strings,...values) {
//     // let result = '';
//     // strings.forEach((str, i) => {
//     //     result+= `${str}${values[i] || ''}`;
//     // });
//     // return result;
//     return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');
// }

// const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun.`;
// console.log(str);

// Highlight
const nama = 'Arif';
const umur = 14;
const email = 'email@email.com'

function Highlight(strings,...values) {
    return strings.reduce((result, str, i) => `${result}${str}<span class=hl>${values[i] || ''}</span>`, '');
}

const str = Highlight`Halo, nama saya ${nama}, saya ${umur} tahun. Email saya adalah ${email}`;

document.body.innerHTML = str;