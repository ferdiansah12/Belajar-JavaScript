
// Operator Aritmatika dalam JavaScript
let a = 10;
let b = 5;
console.log("Hasil Penjumlahan:", a + b); // Penjumlahan
console.log("Hasil Pengurangan:", a - b); // Pengurangan
console.log("Hasil Perkalian:", a * b); // Perkalian
console.log("Hasil Pembagian:", a / b); // Pembagian
console.log("Hasil Modulus:", a % b); // Modulus
console.log("Hasil Perpangkatan:", a ** b); // Perpangkatan
console.log("Hasil Increment:", ++a); // Increment
console.log("Hasil Decrement:", --b); // Decrement

// OPERATOR PERBANDINGAN
console.log(5 == '5'); // true (sama dengan (nilai saja))
console.log(5 === '5'); // false (sama dengan (nilai dan tipe data))
console.log(5 != '5'); // false (tidak sama (nilai saja))
console.log(5 !== '5'); // true (tidak sama (nilai dan tipe data))
console.log(5 > 3); // true (lebih besar dari)
console.log(5 < 3); // false (lebih kecil dari)
console.log(5 >= 5); // true (lebih besar atau sama)
console.log(5 <= 5); // true (lebih kecil atau sama)

// OPERATOR LOGIKA
let x = true;
let y = false;
console.log(x && y); // false (AND)
console.log(x || y); // true (OR)
console.log(!x); // false (NOT)

// OPERATOR PENUGASAN
let angka = 10;
angka += 5; // angka = angka + 5
console.log(angka); // 15
console.log(angka -= 3); // angka = angka - 3
console.log(angka *= 2); // angka = angka * 2
console.log(angka /= 4); // angka = angka / 4
console.log(angka %= 3); // angka = angka % 3

// OPERATOR TYPEOF
console.log(typeof "Ferdi"); // string
console.log(typeof 25); // number
console.log(typeof true); // boolean
console.log(typeof {}); // object

//OPERATOR TERNARY
let umur = 18;
let status = (umur >= 17) ? "Dewasa" : "Anak-anak";
console.log(status); // Dewasa