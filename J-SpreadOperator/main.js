// ...
// SPREAD OPERATOR
// memecah iterables menjadi single element

// const orng = ['Arif', 'Zainul', 'Achmad'];
// console.log(...orng[0]);

// Menggabungkan 2 atau lebig Array
// const sy = ['Arif', 'Zainul', 'Achmad'];
// const dsn = ['sandhik', 'galih'];
// const orng =[...sy, 'Herda', ...dsn];
// const orng = sy.concat(dsn);
// console.log(orng);

// Mengcopy array
// const sy = ['Arif', 'Zainul', 'Achmad'];
// const sy1 = [...sy];
// sy1[0] = 'JS';
// console.log(sy1);

// const liSaya = document.querySelectorAll('li');
// const sya = [];
// for(let i = 0; i < liSaya.length; i++) {
//     sya.push(liSaya[i].textContent);
// };
// const saya = [...liSaya].map(m => m.textContent);
// console.log(saya);

const nama = document.querySelector('.nama');
const hrf = [...nama.textContent]
    .map(h => `<span>${h}</span>`)
    .join(' ');
nama.innerHTML = hrf;
// Tutor gae felix