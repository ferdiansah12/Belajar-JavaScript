// cara import di js
// untuk menggunakan apa yang sudah di ekspor, perlu import di file lain

// 1. cara import dari named export
import {tambah, kurang} from './moduleExport-Import.js';

console.log(tambah(5, 3));
console.log(kurang(5, 3));

// dan bisa mengimpor sekaligus
import * as math from './moduleExport-Import.js';

console.log(math.tambah(10, 5));

// 2. import dari default export
import greet from './moduleExport-Import.js';

greet("nadin");

// perhatikan :
// default export tidak perlu menggunakan {} saat di-import
// named export harus menggunakan {} saat di import

// kesimpulan 
// module di js memungkinkan membagi kode ke dalam file" kecil yang lebih terorganisir. dengan menggunakan export import, dan bisa memanfaatkan kembali fungsi, variabel, atau objek dari file lain dengan mudah