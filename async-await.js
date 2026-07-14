// dengan async dan await, tidak perlu lagi membuat banyak then(), yang bersarang, alur kodenya jadi terasa lebih "linear", seperti menulis kode biasa
// > async digunakan untuk mendefinisikan function asynchonous
// > await digunakan untuk "menunggu" promise selesai sebelum melanjutkan eksekusi

// contoh sederhana
async function hello () {
    return "Halo Dunia!";
}

hello().then((hasil) => console.log(hasil));
// karena function hello bertipe async, maka otomatis dia mengembalikan promise

// contoh menggunakan await
// await digunakan didalam function async untuk menunggu hasil promise
function delay(ms) {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve("Selesai Setelah Delay!");
        }, ms);
    });
}

async function proses() {
    console.log("Mulai....");
    let hasil2 = await delay (2000); // Menunggu 2 detik
    console.log(hasil2);
    console.log("Selesai!");
}
proses();
// terlihat lebih bersih dan mudah dibandingkan menggunakan .then() berantai

// error handling dengan try...catch 
// saat menggunakan await, bisa menangani error dengan try..catch supaya lebih rapih
function login(user) {
    return new Promise ((resolve, reject) => {
        if (user === "admin") {
            resolve("Login Berhasil!");
        } else {
            reject ("Login Gagal!");
        }
    });
}

async function prosesLogin() {
    try {
        let hasil3 = await login("admin");
        console.log(hasil3);
    } catch (error3) {
        console.log(error3);
    }
}

prosesLogin();
// jika promise reject, maka akan langsung masuk ke blok catch

// catatan
// > await hanya bisa digunakan didalam function yang dideklarasikan dengan async
// > jika perlu menjalankan beberapa promise secara pararel, lebih baik digunakan Promise.all()

// contoh
async function ambilData() {
    let [data1, data2] = await Promise.all([
        fetch('https://api.example.com/data1'),
        fetch('https://api.example.com/data2')
    ]); 

    console.log(await data1.json());
    console.log(await data2.json());
}