var contoh = "hello world!";


/* 
Disini ada 3 cara yang dapat saya terapkan :
1. Dengan Perulangan
2. Dengan menggunakan fungsi yang sudah terdapat pada javascript
3. Dengan Call Stack
*/


//Cara Pertama

var balikan = function(kalimat){
    var hasil = ""; //BUAT 'data' kosong
    for (var index = kalimat.length - 1;index >= 0;index--){ //ULANGI dari jumlah array lalu hitung kebelakang (0)
        hasil += kalimat[index];//Masukkan kalimat[index angka] ke  'data' kosong tadi
    }
    return hasil; //TAMPILKAN Hasil tadi
}

console.log("Contoh Pertama : "+balikan(contoh));

//Cara Kedua
//PECAHKAN STRING lalu BALIK Array kemudian GABUNG arraynya menjadi sebuah strinh
console.log("Contoh Kedua : "+contoh.split('').reverse().join('')); 


//Cara ke 3
//ULANGI PEMANGGILAN FUNGSI hingga n bernilai 0 , kemudian TAMPILKAN array[nomor]
function terbalik(n){
    return contoh[n]+(n === 0 ? "" : terbalik(n - 1) );
}

console.log("Contoh ketiga : "+terbalik(contoh.length-1));


