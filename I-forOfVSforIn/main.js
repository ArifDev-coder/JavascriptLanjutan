// FOR..OF
// const orng = ['felix', 'jefri', 'ricko', 'yahya', 'herda'];

// for(let i = 0; i < orng.length; i++) {
//     console.log(orng[i]);
// }

// orng.forEach(m => console.log(m));

// for( const o of orng ) { console.log(m) };

// String
// const nama = 'Arif Code';
// const nSplit = nama.split(" ");
// for(const n of nSplit) {console.log(n)};

// orng.forEach((o, i) => {
//     console.log(`${o} orang ke ${i+=1}`);
// });

// for(const [i, o] of orng.entries()) {
//     console.log(`${o} orang ke ${i+1}`);
// }

// NodeList
// const liNama = document.querySelectorAll('.nama');
// liNama.forEach(n => console.log(n.textContent));
// for(n of liNama) { console.log(n.innerHTML) };

// Arguments
// const arry = [1, 2, 3, 4, 5];
// console.log()
// function jumlahAngka() {
//     // return [1, 2, 3, 4, 5].reduce((a, i) => a + i);
//     // arguments.forEach(a => jumlah += a);
//     let jumlah = 0;
//     for(a of arguments) {
//         jumlah += a;
//     }
//     return jumlah
// }
// console.log(jumlahAngka(1, 2, 3, 4, 5));



// FOR..IN
const orng = {
    nama: 'Arif',
    umur: 14,
    kelas: 8,
    hobi: 'koding and gaming'
};

for( o in orng ) { console.log(`${o}: ${orng[o]}`) };