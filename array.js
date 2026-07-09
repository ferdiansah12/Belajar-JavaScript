// ada dua cara membuat array
// menggunakan tanda kurung siku []
let buah = ["apel", "jeruk", "mangga", "pisang", "nanas", "durian"];
console.log(buah);

// menggunakan new Array() dan cara ini lebih umum di rekomendasikan
let angka = new Array(1, 2, 3, 4, 5);
console.log(angka);

// mengakses data array
let hewan = ["kucing", "kelinci", "burung"];
// setiap array memiliki index dimulai dari 0
console.log(hewan[0]); // kucing
console.log(hewan[1]); // kelinci
console.log(hewan[2]); // burung

// mengubah data array
// bisa mengubah data array dengan menunjuk index tertentu
let hewan2 = ["kucing", "kelinci", "burung"];
hewan2[1] = "sugar glider"; // mengubah kelinci menjadi sugar glider
console.log(hewan2); // ["kucing", "sugar glider", "burung"]

// properti penting .length
// length digunakan untuk mengetahui jumlah data array
console.log(hewan2.length); // 3


let hp = ["samsung", "oppo", "vivo", "xiaomi"];
// method-method umum pada array
// 1. push() untuk menambahkan data array di akhir
hp.push("infinix");
console.log(hp); // ["samsung", "oppo", "vivo", "xiaomi", "infinix"]

// 2. pop() untuk menghapus data array di akhir
hp.pop();
console.log(hp); // ["samsung", "oppo", "vivo", "xiaomi"]

// 3. shift() untuk menghapus data array di awal
hp.shift();
console.log(hp); // ["oppo", "vivo", "xiaomi"]

// 4. unshift() untuk menambahkan data array di awal
hp.unshift("iphone");
console.log(hp); // ["iphone", "oppo", "vivo", "xiaomi"]

// 5. forEach() melakukan sesuatu untuk setiap elemen dalam array
hp.forEach(function(item, index){
    console.log(index, item);
});

// atau pakai arrow function
hp.forEach((item, index) => console.log(index, item));

// 6. map() membuat array baru dengan memproses setiap elemen
let angkaBaru = angka.map(function(x) {
    return x * 2;
});
console.log(angkaBaru);

// 7. filter membuat array baru dengan menyaring elemen sesuai kondisi
let angkaGanjil = angka.filter(function(x){
    return x % 2 !== 0;
});
console.log(angkaGanjil);

// contoh kasus penggunaan array
// ingin menyimpan daftar nama siswa
let siswa = ["udin", "ferdi", "ara", "mutiara"];
// menambahkan sisawa baru
siswa.push("dodi");
// menghapus siswa terakhir
siswa.pop();
// menampilkan semua siswa
siswa.forEach(function(nama){
    console.log(nama);
});


