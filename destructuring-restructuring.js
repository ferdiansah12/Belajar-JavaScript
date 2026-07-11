// Destructuring Array

// tanpa destructuring
const angka = [1, 2, 3];

const satu = angka [0];
const dua = angka[1];
const tiga = angka[2];

console.log(satu,dua,tiga);

// dengan destructuring
// kelebihanya lebih cepat dan lebih bersih
const nomor = [4, 5, 6];

const [empat, lima, enam] = nomor;

console.log(empat, lima, enam);

// skip item di array
const baju = [7, 8, 9, 10];

const [baju7, , baju9] = baju;

console.log(baju7);
console.log(baju9);

// destructuring + rest pada array
const kaos = ["kaos 1", "kaos 2", "kaos 3", "kaos 4"];

const [kaos1, ...kaosLainya] = kaos;

console.log(kaos1);
console.log(kaosLainya);

// destructuring object
// tanpa destructuring
const user1 = {
    nama : "ferdi",
    umur : 25
};

const nama = user1.nama;
const umur = user1.umur;

console.log(nama, umur);

// dengan destructuring
const motor = {
    type : "aerox",
    kapasitas_volume : "150cc"
};

const { type, kapasitas_volume } = motor;

console.log(type, kapasitas_volume);

// mengganti nama variabel saat distructuring
// kadang ingin mengganti nama variabel yang berbeda
const merkGuitar = {
    guitarCort : "SFX-ME",
    guitarCort2 : "SFX-MEM-OP"
    
};

const {guitarCort: typeCort, guitarCort2: typeCort2} = merkGuitar;

console.log(typeCort);
console.log(typeCort2);

// destructuring + rest pada object
// mengambil sebagian property dan sisanya dikumpulkan
const mahasiswa = {
    namaPanggilan : "ferdi",
    namaLengkap: "ferdiansah",
    nim : 192039213,
    fakultas : "IT"
};

const {namaPanggilan, ...infoDetail} = mahasiswa;

console.log(namaPanggilan);
console.log(infoDetail);

// restructuring yaitu kebalikan dari destructuring, menggabungkan beberapa variabel menjadi satu object atau array

const namaDepan = "Ferdi";
const namaBelakang =  "ansah";

const user5 = {namaDepan, namaBelakang};

console.log(user5);

// contoh restructuring ke array

const celana1 = 1;
const celana2 = 2;
const celana3 = 3;

const celana = [celana1, celana2, celana3];

console.log(celana);