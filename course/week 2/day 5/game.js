var soal1 = {
    soal : "Siapa bapak proklamator anda ?",
    jawaban : "A",
    pilihan : {
        a : "soekarno",
        b : "soeharto",
        c : "habibi",
        d : "naruto"
    }
}

var soal2 = {
    soal : "Dimana ibukota negara Republik Indonesia ?",
    jawaban : "A",
    pilihan : {
        a : "jakarta",
        b : "pekanbaru",
        c : "banjarbaru",
        d : "lampung"
    }
}


var Tampilkan = function(){
    this.berhasil = function(){
        
    }
    this.soal = function(){
        
    }
}

var dataSoal = [soal1,soal2];

for(var index = 0; index < dataSoal.length;index++){
    var pilihanJawaban = "";
    pilihanJawaban += "a."+dataSoal[index].pilihan.a+" \n";
    pilihanJawaban += "b."+dataSoal[index].pilihan.b+" \n";
    pilihanJawaban += "c."+dataSoal[index].pilihan.c+" \n";
    pilihanJawaban += "d."+dataSoal[index].pilihan.d+" \n";
    var soal = "Soal no : "+(index + 1)+"\n"+dataSoal[index].soal+"\n"+pilihanJawaban;
    console.log(soal);
    
    var answer = prompt(soal);
    if (answer.toUpperCase() === dataSoal[index].jawaban){
        alert("benar");
    }
    else{
        alert("Jawaban salah");
        break;
    }
}




