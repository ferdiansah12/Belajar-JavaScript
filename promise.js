// promise yaitu sebuah objek di js yang mempresentasikan sebuah proses yang belum selsai tapi akan selesai di masa depan (future). promise bisa berbeda di tiga status:
// > pending : sedang berjalan, belum selesai
// > fulfilled : berhasil di selesaikan
// > rejected : gagal di selesaikan
// dengan promise, bisa menangani hasil operasi asynchronous dengan cara yang lebih rapi dibandingkan dengan callback biasa (yang sering disebut"callback helld")

// cara membuat promise
// resolve() dipanggil kalau operasinya berhasil
// reject() dipanggil kalau operasinya gagal
const janji = new Promise ((resolve, reject) => {
    let sukses = true;

    if (sukses) {
        resolve("Berhasil!");
    }else {
        reject("Gagal!");
    }
});

// cara menggunakan promise 
// setelah membuat promise, lalu bisa menanganinya dengan then dan catch
// then () dipanggil saat promise berhasil
// catch () dipanggil saat promise gagal
janji
.then ((hasil) => {
    console.log(hasil); //output: Berhasil!
})
.catch((error) => {
    console.log(error);
});

// contoh kasus sederhana
// misalnya membuat fungsi untuk cek login user
function cekLogin(user) {
    return new Promise((resolve, reject) => {
        if (user === "admin") {
            resolve ("Login Berhasil!");
        } else {
            reject ("Login Gagal!");
        }
    });
}

// kalau input user adalah "admin", promise akan resolve, kalau tidak akan reject
cekLogin("admin")
.then((res) => console.log(res))
.catch((err) => console.log(err));

// promise dengan setTimeout
// bisa juga membuat simulasi asynchronous menggunakan setTimeout
function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Selesai!");
        }, ms);
    });
}

// promise ini baru selesai setelah 2 detik.4
delay(2000).then((hasil) => {
    console.log(hasil); // Output setelah 2 detik : Selesai!
});


function delay(milisecond) {
    return new Promise ((menangkap) => {
        setTimeout(() => {
            menangkap("Selesai!");
        }, milisecond);
    });
}

delay(2000).then((selesai) => {
    console.log(selesai);
});