/*
Tugas : 1
sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
Di dalam perulangan, periksa setiap angka counter:
Apabila angka counter adalah angka genap, tuliskan GENAP
Apabila angka counter adalah angka ganjil, tuliskan GANJIL
*/

for (var num = 0;num <= 100 ; num++){
    if (num % 2 == 0)
            console.log(num+" adalah angka Genap");
    else 
            console.log(num+" adalah angka Ganjil")
}

/*
Tugas : 2
sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 2
Di dalam perulangan, periksa setiap angka counter:
Apabila angka merupakan kelipatan 3 maka tampilkan angka tersebut adalah kelipatan 3

*/
for (var num = 0;num <= 100; num+=2){
    if (num % 3 === 0)
            console.log(num+" adalah kelipatan 3");
    else    
        console.log("");
}

/*
Tugas : 3
sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 5
Di dalam perulangan, periksa setiap angka counter:
Apabila angka merupakan kelipatan 6 maka tampilkan angka tersebut adalah kelipatan 6

*/
for (var num = 0;num <= 100; num+=5){
    if (num % 6 === 0)
            console.log(num+" adalah kelipatan 6");
    else    
        console.log("");
}

/*
Tugas : 3
sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 9
Di dalam perulangan, periksa setiap angka counter:
Apabila angka merupakan kelipatan 10 maka tampilkan angka tersebut adalah kelipatan 10

*/
for (var num = 0;num <= 100; num+=9){
    if (num % 10 === 0)
            console.log(num+" adalah kelipatan 10");
    else    
        console.log("");
}


