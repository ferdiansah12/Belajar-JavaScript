// contoh sederhana 
// > menyebarkan array
const angka = [1, 2, 3];
console.log(...angka);

// > mengabungkan dua atau lebih array
// denagan spread operator ini memudahkan menggabungkan beberapa array
const buah1 = ["apel", "jeruk", "manggis"];
const buah2 = ["durian", "anggur", "markisa"];

const semuaBuah = [...buah1, ...buah2];
console.log(semuaBuah);

// > dengan spread operator ini tidak hanya meng-copy dan bisa menambahkan data baru
const warnaAsli = ["hitam", "putih"];
const warnaSalinan = [...warnaAsli];

warnaSalinan.push("hijau");

console.log(warnaAsli);
console.log(warnaSalinan);

// spread pada object
const user = {
    nama : "ferdi",
    divisi : "Developer Web"
};

const userBaru = {
    ...user,
    umur : 25
};

console.log(userBaru);

// spread pada function arguments
// contoh ada kasus function yang menerima banyak parameter, spread operator bisa dipakai untuk memecah array menjadi argumen individual

function tambah(a, b, c) {
    return a + b + c;
}

const nomor = [1, 2, 3];

console.log(tambah(...nomor));

// spread operator ( ... ) ini sangat berguna untuk menyalin array atau object tanpa memengaruhi data aslinya, dan menggabungkan beberapa array atau object, serta  menyebarkan array ke dalam argument function