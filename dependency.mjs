// Mengimpor modul lodash, khususnya fungsi-fungsi utilitasnya
import _ from "lodash";

// Mendeklarasikan variabel source yang berisi string "Khaiqal Satrio"
const source = "Khaiqal Satrio";

// Menggunakan fungsi capitalize dari lodash untuk mengubah huruf pertama menjadi kapital
const target = _.capitalize(source);

// Menampilkan hasil yang sudah dimodifikasi
console.info(target);
