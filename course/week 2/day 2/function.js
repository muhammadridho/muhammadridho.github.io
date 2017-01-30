
/* 
Tugas Pertama : Menampilkan tulisan halo function
*/

function shoutOut(){
    return "Halo function !";
}

console.log(shoutOut());


/* 
Tugas Kedua : mengembalikan nilai berupa hasil kali dari dua parameter yang dikirim.
*/


function calculateMultiply(number1,number2){
    return (number1 === undefined || number2 === undefined ? "number 1 and number 2 must fill" : number1 * number2);
}
var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian);

/* 
Tugas Ketiga : mengembalikan nilai berupa hasil kali dari dua parameter yang dikirim.
*/

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

function processSentence (name,age,address,hobby){
    return (
        name === undefined ||  age === undefined || address === undefined || hobby === undefined ? 
            "Semua data wajib diisi" : "Nama saya "+name+" umur saya "+age+" tahun, alamat saya di "+address+", dan saya punya hobby yaitu "+hobby);
    
}

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"x
