// cara export dijs
// dan ada dua cara melakukan export di js

// 1. namde export
// bisa mengekspor beberapa hal dari satu file

export function tambah(a, b) {
    return a + b;
}

export function kurang(a, b) {
    return a - b;
}

console.log(tambah(1, 1));
console.log(kurang(1, 1));

// 2. default export
// bisa mengekpor satu nilai utama dari file

export default function greet(nama){
    console.log(`Halo, ${nama}!`);
}

greet("ferdi");
