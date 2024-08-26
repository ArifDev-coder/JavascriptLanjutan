// Executiong Context, Hoisting, Scope

var nama = 'Arif';
console.log(nama);

// creating phase => fase kreasi - pada Global Context
// nama var = undefined
// nama function = fn()
// fase ini disebut hoisting
// window => global object
// this => window

// execution phase


var Orang = 'Arif';
var Umur = 14;
console.log(sayHello());

function sayHello() {
    return `Halo nama saya ${Orang}, saya umur ${Umur} tahun.`;
}