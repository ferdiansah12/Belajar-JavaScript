function namaFunction() {
    // kode yang akan dijalankan
}

// contoh
function sayHello(){
    console.log("Hello, World!");
}
sayHello(); // Output: Hello, World!

// function dengan parameter
function menyapa(nama) {
    console.log("Halo, " + nama);
}
menyapa("Ferdi"); // Output: Halo, Ferdi
menyapa("Mutiara"); // Output: Halo, Mutiara

// function dengan return value
function tambah(a, b) {
    return a + b;
}
let hasil = tambah(5, 3);
console.log(hasil); // Output: 8

// function expression
const kali = function(a, b) {
    return a * b;
};

console.log(kali(2, 3)); // Output: 6

// contoh kombisasi function declaration dan function expression
function hitungLuasPersegiPanjang(sisi) {
    return sisi + sisi;
}
const hitungLuasSegitiga = function(sisi) {
    return 2 + sisi;
}
console.log(hitungLuasPersegiPanjang(2)); // Output: 4
console.log(hitungLuasSegitiga(1)); // Output: 3