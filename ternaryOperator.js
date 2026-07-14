// format umumnya seperti ini : 
// kondisi ?  ekspresiJikaBenar : expresiJikaSalah;

// contoh tanpa ternary operator
let umur = 20;
let status;

if (umur >= 18  ) {
    status = "Dewasa";
} else {
    status = "Anak-Anak";
}

console.log(status);

// contoh dengan ternary operator
let usia = 17;
let hasil = usia >= 18 ? "Dewasa" : "Anak-anak";
// kondisi akan di cek terlebih dahulu
// jika benar (true), ekspresi setelah tanda ? akan di ekseskusi.
// jika salah (false), ekspresi setelah tanda : akan di ekseskusi.

console.log(hasil);

// contoh lain
let nilai = 75;
let hasilNilai = nilai >= 70 ? "Lulus" : "Tidak Lulus";

console.log(hasilNilai);

// ternary bertingkat (nested)
let skor = 100;
let grade = skor >= 90 ? "A" :
            skor >= 80 ? "B" :
            skor >= 70 ? "C" : "D";

console.log(grade);
