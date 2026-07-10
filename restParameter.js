// > menangkap banyak argument dalam function
// biasanya function menerima argument tertentu 
function tambah (a, b){
    return a + b;
}

// contoh masalah banyak argument, dengan pakai rest parameter
function jumlahkan(...angka){
    let total = 0;
        for (let nilai of angka) {
            total += nilai;
        }
    return total;
}

console.log(jumlahkan(1, 2));
console.log(jumlahkan(1, 2, 3, 4));

// rest parameter harus diakhiri
function cekData(nama, ...hobi){
    console.log("Nama :", nama);
    console.log("Hobi : ", hobi);
}

cekData("Ferdi", "futsal", "renang");

// rest parameter pada destructring
// rest juga bisa bisa dipakai ketika memecah array atau object

// array destructuring
const angka = [1, 2, 3, 4, 5];

const [pertama, kedua, ...sisanya] = angka;

console.log(pertama);
console.log(kedua);
console.log(sisanya);

// object destructuring
const user = {
    nama : "ferdi",
    umur : 25,
    hobby : "mancing"
};

const {nama, ...infoLainnya} = user;

console.log(nama);
console.log(infoLainnya);