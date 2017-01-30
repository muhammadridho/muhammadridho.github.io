//Tugas 3
var bintang = ''; //SIMPAN karakter koaong pada 'bintang'
for (var index1 = 1;index1 <= 10;index1 ++){ //FOR setiap pertambahan 1 pada 'index1' dari 1 sampai 10
    for (var index2 = 0;index2 <= index1;index2++){ //FOR setiap pertambahan 1 pada 'index2' dari 0 sampai 'index1'
        bintang += "*"; //TAMBAHKAN `bintang` dengan karakter "*"
    }//END FOR
    console.log(bintang);//TULISKAN 'bintang'
    bintang = ''; // SIMPAN karakter kosong pada `bintang`
}//END FOR