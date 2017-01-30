//Tugas 1
var total = 0; //Tentukan total sama dengan 0
for (var index = 1; index <= 100;index++){ // FOR setiap pertambahan 1 `index` dari 1 sampai dengan 100
    if (index % 2 !== 0) //IF `index` adalah ganjil:
        total += index; //TAMBAHKAN 'total' dengan 'index'
    else //ELSE IF 'index' adalah genap
        total -= index; //KURANGIK 'total' dengan 'index'
}//END FOR
console.log("TOTAL : "+total); //Tuliskan 'TOTAL : 'total'
