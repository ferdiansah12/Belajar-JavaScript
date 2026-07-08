// bentuk dasar arrow function
const namaFunction = () => {
    // kode yang akan dijalankan    
};


//  penulisan biasa
function sayHello() {
    console.log("Halo, Dunia!");
}
sayHello(); // Output: Halo, Dunia!

// penulisan arrow function
const sayHello2 = () => {
    console.log("Halo Ferdi.");
};
sayHello2(); // Output: Halo Ferdi.


// arrow function dengan parameter
const menyapa = (nama) => {
    console.log("Halo, " + nama + "!"); 
};
menyapa("Ferdi");

// arrow function tanpa parameter
const helloWorld = () => {
    console.log("Hello, World!");
};
helloWorld();

// contoh
const namaSaya = (namaDepan, namaBelakang) => {
    console.log("Halo " + namaDepan + namaBelakang);
};
namaSaya("Ferdi","ansah");

const greet = (nama) => {
    console.log("hai, " + nama);
};
greet("Ferdi");

// arrow function dengan return otomatis
const tambah = (a, b) => a + b;
console.log(tambah(5, 3));
// jika satu baris langsung return, tidak perlu pakai {} dan return
// kalau tidak pakai {}, javascript otomatis menganggap hasil dari ekpresi itu sebagai nilai return

// jika pakai {} harus manual pakai return
const kali = (a, b) => {
    return a * b;
}
console.log(kali(2, 4));

// arrow function mengembalikan object
const buatUser = (nama, umur) => ({
    nama: nama,
    umur: umur
});

console.log(buatUser("Mutiara", 22)); // Output: { nama: 'Mutiara', umur: 22 }
