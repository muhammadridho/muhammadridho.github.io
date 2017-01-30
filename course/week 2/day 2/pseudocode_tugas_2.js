//Tugas 2
var pagar = ''; //SIMPAN karakter kosong pada 'pagar'
for (var index1 = 1;index1 <= 10;index1++){ // FOR setiap pertambahan 1 pada `index1` dari 1 sampai 10
    for (var index2 = 0;index2 <= 10;index2++){ //FOR setiap pertambahan 1 pada `index2` dari 0 sampai 10
        pagar += "#"; //TAMBAHKAN 'pagar' dengan karakter "#"
    }//END FOR
    console.log(pagar); //TULISKAN 'pagar'
    pagar= '';//SIMPAN karakter kosong pada 'pagar'
}