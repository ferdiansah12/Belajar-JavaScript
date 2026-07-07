let nama = "Ferdiansah"
console.log(nama);

// Menggunakan var yaitu cara lama
var Nama = "Ferdiansah2";
console.log(Nama);

// ciri ciri var
// bersifat function-scoped yaitu (hanya dikenali di dalam fungsi temapt dia di buat)
// bisa di-reassign yaitu (nilai bisa diubah)
// bisa di-redeclare yaitu (bisa dideklarasikan ulang tanpa error)

// contoh
var x = 10;
var x = 20; //tidak error
console.log(x); //20

// yang saya tangkap dengan reassign itu yaitu (mengubah isi kotak,tetapi kotaknya tetap sama)
// redeclare yaitu (kenapa 10 hasilnya tidak 10 karena saya meniban dengan variabel 20 jadi hasilnya 20)

// saya mencoba var
var x = 10;
console.log("Nilai Pertama:", x);

var x = 50;
console.log("Nilai Kedua:", x);

var x = 120;
console.log("Nilai Ketiga:", x);

// saya mencobanya lagi
var x = 10;
x = x + 30;
x = x - 20;
x = x * 2;
console.log(x);

// ciri - ciri let
// bersifat block-scoped yaitu (hanya dikenali di dalam blok tempat dia di buat)
// bisa di-reassign yaitu (nilai bisa diubah)
// tidak bisa di-redeclare yaitu (tidak bisa dideklarasikan ulang tanpa error)
let umur = 25; 
console.log(umur);

// contoh
let y = 10;
y = 20; // boleh di ubah
console.log(y);
// let y = 30; // error! tidak boleh di deklarasikan ulang

// contoh block-scoped
{
    let z = 100;
    console.log(z); // 100
}
// console.log(z); // error! z tidak dikenali di luar blok

// const juga diperkenalkan di ES6 dan digunakan untuk variabel yang nilainya tidak boleh di ubah
const PI = 3.14;
console.log(PI);

// contoh
// const nama = "Ferdiansah";
// nama = "ferdiansah"; // error! tidak boleh di ubah

// contoh
const angka = [1, 2, 3];
angka.push(4); // boleh menambahkan elemen ke array
console.log(angka); // [1, 2, 3, 4]

// kapan menggunakan var, let, dan const?
// Gunakan var (kecuali ada alasan khusus (misal untuk kompatibilitas dengan kode JavaScript lama)), jika Anda ingin variabel yang bersifat function-scoped dan dapat di-redeclare.
// Gunakan let (jika nilai variabelnya berubah di masa depan), jika Anda ingin variabel yang bersifat block-scoped dan dapat di-reassign.
// Gunakan const (jika nilai variabel tidak akan berubah)jika Anda ingin variabel yang bersifat block-scoped dan tidak dapat di-reassign.