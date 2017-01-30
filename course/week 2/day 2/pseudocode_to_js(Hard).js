//Tugas 1
var total = 0; //Tentukan total sama dengan 0
for (var index = 1; index <= 100;index++){ // FOR setiap pertambahan 1 `index` dari 1 sampai dengan 100
    if (index % 2 !== 0) //IF `index` adalah ganjil:
        total += index; //TAMBAHKAN 'total' dengan 'index'
    else //ELSE IF 'index' adalah genap
        total -= index; //KURANGIK 'total' dengan 'index'
}//END FOR
console.log("TOTAL : "+total); //Tuliskan 'TOTAL : 'total'


//Tugas 2
var pagar = " "; //SIMPAN karakter kosong pada 'pagar'
for (var index1 = 1;index1 <= 10;index1++){ // FOR setiap pertambahan 1 pada `index1` dari 1 sampai 10
    for (var index2 = 0;index2 <= 10;index2++){ //FOR setiap pertambahan 1 pada `index2` dari 0 sampai 10
        pagar += "#"; //TAMBAHKAN 'pagar' dengan karakter "#"
    }//END FOR
    console.log(pagar); //TULISKAN 'pagar'
    pagar= " ";//SIMPAN karakter kosong pada 'pagar'
}

//Tugas 3
var bintang = " "; //SIMPAN karakter koaong pada 'bintang'
for (var index1 = 1;index1 <= 1;index1 ++){ //FOR setiap pertambahan 1 pada 'index1' dari 1 sampai 10
    for (var index2 = 0;index2 <= index1;index2++){ //FOR setiap pertambahan 1 pada 'index2' dari 0 sampai 'index1'
        bintang += "*"; //TAMBAHKAN `bintang` dengan karakter "*"
    }//END FOR
    console.log(bintang);//TULISKAN 'bintang'
    bintang = " "; // SIMPAN karakter kosong pada `bintang`
}//END FOR


