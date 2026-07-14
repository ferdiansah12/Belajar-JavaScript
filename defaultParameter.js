// contoh default tanpa parameter
function nyapa(nama) {
    if (nama === undefined) {
        nama = "Guest";
    }
    console.log(`Halo, ${nama}`);
}

nyapa();
nyapa("ferdi");

// contoh default pakai parameter
function greet (nama = "tamu") {
        console.log(`Halo, ${nama}`);
    }

greet();
greet("mutiara");

// cara kerja default parameter
function hitungLuas(panjang = 1, lebar = 1) {
    return panjang * lebar;
}

console.log(hitungLuas());
console.log(hitungLuas(5));
console.log(hitungLuas(5, 10));

// default parameter dengan Expression
function tambah(a, b = a) {
    return a + b;
}

console.log(tambah(5)); // output: 10 (karena b = a)
console.log(tambah(5, 3));