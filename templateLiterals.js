// template literals yaitu cara baru untuk membuat string di js yang lebih flexible, mudah dibaca, mendukung interpolasi(menyisipkan variable ke dalam string),
// dan mendukung string multi-baris tanpa perlu \n
// menggunakan beatrick (``) bukan tanda kutip ('') atau ("") biasa

// sintaks dasar
// gunakan beatrick (``) untuk membuat string
// untuk memasukan variabel atau ekspresi, gunakan ${}
const nama = "ferdi";
const kalimat = `Halo nama saya ${nama}`;
console.log(kalimat);

// interpolasi variable
// bisa menyisipkan variable didalam string dengan ${}
const nama2 = "mutiara";
const umur = 22;
const perkenalan = `Halo, nama saya ${nama2}, umur saya ${umur}tahun`;
console.log(perkenalan);

// expression di dalam template literals
// bukan cuma variable, dan bisa juga menjalankan ekspresi di dalam ${}
const a = 10;
const b = 10;
console.log(`Hasil penjumlahan: ${a + b}`);

// multiline string (tanpa \n)
// biasanya untuk membuat string banyak baris, harus pakai \n dengan template literals, cukup tulis biasa
const bio = `Nama : ferdi
umur : 25
asal : tangsel`;
console.log(bio);

// HTML Fragments
const title = "Belajar JS";
const content = "Template Literals itu keren!";

const html = `
    <div>
    <h1>${title}</h1>
    <p>${content}</p>
    </div>
`;

console.log(html);

// kesimpulan
// template literals memudahkan kita untuk membuat string yang dinamis,
// menyisikan variable atau ekspresi ke dalam string, membuat multi-baris
// dengan lebih mudah, dan membuat template HTML di js