console.log('Hello dari Node.js!');

// TIPE DATA PRIMITIVE
// String
let nama = "Ferdiansah";
console.log(nama);

// Number
let umur = 25;
let tinggi = 169;
console.log(umur,tinggi);

// Boolean
let isOnline = true;
let isLogin = false;
console.log(isOnline,isLogin);

// Undefined
let alamat = "Jl. Cendrawasih";
console.log(alamat);

// Null
let data = null;
console.log(data);

// Symbol (ES6) di kombinasikan dengan hasil nyata
let id = Math.floor(10000 + Math.random() * 90000);
console.log(id);

// BigInt (Es11)
let angkaBesar = 123456789012345678901234567890n;
console.log(angkaBesar);

// TIPE DATA NON-PRIMITIVE
// Object
let mahasiswa = { 
    nama: "Ferdiansah",
    umur: "25",
    jurusan: "Teknik Informatika"
};
console.log(mahasiswa);

// Array
let buah = ["apel", "Jeruk", "Mangga"];
console.log(buah);

// Function
function sapa() {
    console.log("Halo semuanya!!");
}
sapa();

// Mengetahui Tipe Data
console.log(typeof "Hello");
console.log(typeof 100);
console.log(typeof true);
console.log(typeof {});
console.log(typeof []);
console.log(typeof null);
console.log(typeof function(){});

