// if statement (true digunakan untuk mengeksekusi kode jika suatu kondisi bernilai benar)
let umur = 20;
if (umur >= 17){
    console.log("Kamu sudah dewasa.");
}

// if-else statement (jika kondisi if tidak terpenuhi, maka kode didalam else akan dijalankan)
let nilai = 70;
if (nilai >= 75){
    console.log("Lulus");
} else {
    console.log("Tidak Lulus");
}

// if-else if-else statement (digunakan untuk mengecek beberapa kondisi secara berurutan)
let skor = 85;

if (skor >= 90) {
    console.log("Nilai A");
}else if (skor >= 80){
    console.log("Nilai B");
}else if (skor >= 70){
    console.log("Nilai C");
}else {
    console.log("Nilai D");
}

// switch statement (switch digunakan untuk memeriksa banyak kemungkinan nilai dengan cara yang lebih bersih di banding banyak if-else)
let hari = 3;
let namaHari;

switch (hari) {
    case 1:
        namaHari = "Senin";
        break;
    case 2:
        namaHari = "Selasa";
        break;
    case 3:
        namaHari = "Rabu";
        break;
    default:
        namaHari = "Hari tidak valid";
}
console.log(namaHari);

// for loop (digunakan untuk mengulang sesuatu dalam jumlah yang pasti)
for (let i = 1; i <= 5; i++){
    console.log("Perulangan ke-" + i );
} 

// while loop (digunakan untuk mengulang selama kondisi bernilai true)
let i = 1;

while (i <= 5) {
  console.log("Angka " + i);
  i++;
}

// do-while loop (mirip while, tetapi akan menjalankan blok kode minimal satu kali sebelum memeriksa kondisi)
let j = 1;

do {
    console.log("Nomor" + j);
    j++;
} while (j <= 5);

// continue (digunakan untuk melewati satu iterasi dan lanjut ke iterasi berikutnya.)
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue; // Lewati iterasi saat i = 3
  }
  console.log(i);
}
// Output: 1, 2, 4, 5

// break (digunakan untuk menghentikan perulangan secara paksa.)
for (let i = 1; i <= 5; i++) {
  if (i === 4) {
    break; // Hentikan loop saat i = 4
  }
  console.log(i);
}

// Output: 1, 2, 3
