// object adalah data di js yang digunakan untuk menyimpan kumpulan data dalam bentuk pasangan key dan value. kalau array menggunakan index angka, object menggunakan nama properti key
// ada dua cara umum membuat object

// object literal {}
let mahasiswa = {
    nama : "ferdi",
    umur : 25,
    jurusan : "TI"
};
console.log(mahasiswa);

// menggunakan new Object()
let siswa = new Object();
    siswa.nama = "araara";
    siswa.umur = 18;
    siswa.kelas = "12 ipa";
console.log(siswa);

let user = {
    nama : "ferdi",
    alamat : "tangsel",
    email : "ferdi@gmail.com"
};
// Dot Notation
console.log(user.nama);
console.log(user.email); //Dot Notation jika sudah mengetahui propertynya yang bernama email

let user2 = {
    nama : "mutiara",
    "nama lengkap" : "mutiara mutiara",
    alamat : "jakarta",
    email : "mutiara@gmail.com",
    hp : "vivo",
    mobil : "jazz"
};
// bracket notation
// memakai bracket notation : 
// > kalau nama propertynya berupa string dinamis atau mengandung spasi
// > kalau ingin memilih property menggunakan variabel
console.log(user2["nama"]);
console.log(user2["alamat"]);
console.log(user2["nama lengkap"]);

// menambah property object
user2.kuliah = "Universitas Pamulang";
user2.jurusan = "Management";
user2.umur = 22;
console.log(user2);

// mengubah property object
user2.umur = 27;
user2["nama lengkap"] = "mutiara ara";
console.log(user2);

// menghapus property di object menggunakan delete untuk menghapus property
delete user2.hp;
console.log(user2);

// looping di object
// kalau di array memakai forEach, di object bisa memakai for ... in
for(let key in user2){
    console.log(key + " : " + user2[key]);
}


// contoh menggunakan object di dalam object dan menggunakan for, in

let user3 = {
    merk : "Toyota",
    model : "Avanza",
    muatan : "6 orang",
        mesin : {
            kapasitas : "150cc",
            "bahan bakar" : "bensin"
        }
};

for(let key in user3){
    console.log(key + " : " + user3[key]);
}

// menampilkan semua isi object ditampilkan
for (let key in user3) {
    if (typeof user3[key] === "object") {
        console.log(key + " :");

        for (let subKey in user3[key]){
            console.log(" " + subKey + " : " + user3[key][subKey]);
        }
    } else{
        console.log(key + " : " + user3[key]);
    }
}