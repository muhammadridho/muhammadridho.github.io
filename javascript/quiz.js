/*

Welcome in my super not clean code, 
Code : Vanilla JS , for basic and get element
     : JQuery, for Animation
Wanna look another thing : https://github.com/muhammadridho/muhammadridho.github.io

*/

$(document).ready(function(){
   
//Variable 
var nomorSekarang = 1;
var pilihan = "";
var nilaiBenar = 0;

    
//Data Soal
var soalPertama = {
    soal : "Siapakah Nama Bapak Proklamator Indonesia ?",
    jawaban : "A",
    pelajaran :["social","history"],
    pilihan : ["Soekarno","Jokowi"]
}

var soalKedua = {
    soal : "Dimanakah letak Ibukota indonesia ?",
    jawaban : "B",
    pelajaran : ["social"],
    pilihan : ["Konohagakure","Jakarta"]
}

var soalKetiga = {
    soal : "Dibawah ini hewan mana yang termasuk karnivora ?",
    jawaban : "B",
    pelajaran : ["science","nature"],
    pilihan : ["Kambing","Serigala"]
}

var soalKeempat = {
    soal : "Cari jawaban dari soal berikut ini : 1 + 1 * 2 ?",
    jawaban : "A",
    pelajaran : ["math"],
    pilihan : ["3","4"]
}

var soalKelima = {
    soal : "Apakah 0,99999… (jumlah 9 tidak terhingga) lebih kecil dari 1?",
    jawaban : "A",
    pelajaran : ["logic"],
    pilihan :["Tidak","Ya"]
}

//Masukan Data Soal
var BankSoal = [soalPertama,soalKedua,soalKetiga,soalKeempat,soalKelima];
    

//Menampilkan Pilihan Data 
function tampilkanPilihan (dataSoal,nomor){
    document.getElementById("opsiA").innerHTML = dataSoal[nomor - 1].pilihan[0];
    document.getElementById("opsiB").innerHTML = dataSoal[nomor - 1].pilihan[1];
}
  
    
//Menampilkan Nomor Soal yang Tersedia
for(var index = 1;index <= BankSoal.length; index++){
        //ULANGI perulangan sebanyak 'jumlah_soal'
        $('#nomor').append("<li id='nomor"+index+"'>"+index+"</li>");
        $('li:nth-child('+index+')').hide(0).delay(500).fadeIn(index * 1000);
        
        //JIKA saat 'index' adalah 1 => Jadikan nomor saat ini dengan menambahkan kelas 'active'
        if (index === 1){
            $('#nomor1').addClass('active');
            tampilkanPilihan(BankSoal,1);
        }
    
        
}
//Melakukan loading animasi saat pertama kali
transisiSoal();
    
function transisiSoal(){
    
    //Animasi saat pergantian soal
    $('h1').hide(0).delay(200).fadeIn(1000);
    $('#soal').hide(0).delay(200).fadeIn(2000);
    $('#opsiA').hide(0).delay(200).fadeIn(3000);
    $('#opsiB').hide(0).delay(200).fadeIn(3000);
    
    $("#jenis").empty(); //Bersihkan list kategori pelajaran
    
    for (var index = 0; index < BankSoal[nomorSekarang - 1].pelajaran.length; index++){
        //Menambahkan kategori ke halaman sesuai dengan soal
        switch(BankSoal[nomorSekarang - 1].pelajaran[index]){
            case "social":
                $('#jenis').append('<li class="social">'+BankSoal[nomorSekarang -1].pelajaran[index]+'</li>').hide(0).delay(500).fadeIn(index * 1000);;
                
            break;
            case "science":
                $('#jenis').append('<li class="science">'+BankSoal[nomorSekarang -1].pelajaran[index]+'</li>').hide(0).delay(500).fadeIn(index * 1000);;
            break;
            case "nature":
                $('#jenis').append('<li class="nature">'+BankSoal[nomorSekarang -1].pelajaran[index]+'</li>').hide(0).delay(500).fadeIn(index * 1000);;
            break;
            case "math":
                $('#jenis').append('<li class="math">'+BankSoal[nomorSekarang -1].pelajaran[index]+'</li>').hide(0).delay(500).fadeIn(index * 1000);;
            break;
            case "history":
                $('#jenis').append('<li class="history">'+BankSoal[nomorSekarang -1].pelajaran[index]+'</li>').hide(0).delay(500).fadeIn(index * 1000);;
            break;
            case "logic":
                $('#jenis').append('<li class="logic">'+BankSoal[nomorSekarang -1].pelajaran[index]+'</li>').hide(0).delay(500).fadeIn(index * 1000);;
            break;
            default:
                $('#jenis').append("<li>"+BankSoal[nomorSekarang -1].pelajaran[index]+"</li>").hide(0).delay(500).fadeIn(index * 1000);;
            break;
        }
        
    }
        
}

/*
    JIKA user benar tambahkan class  'benar'[warna jadi hijau] dan untuk nomor selanjutnya ditambahkan kelas 'active'
    JIKA user salah tambahkan class  'salah'[warna jadi merah] dan untuk nomor selanjutnya ditambahkan kelas 'active'
    Kemudian panggil method 'transisi soal'
*/
    
var kondisi = function(){
        this.jawabanBenar = function(namaId,namaIdSelanjutnya){
                $(namaId).addClass('benar');
                $(namaIdSelanjutnya).addClass('active');
                nilaiBenar += 20;
                transisiSoal();    
        }
        
        this.jawabanSalah = function(namaId,namaIdSelanjutnya){
                $(namaId).addClass('salah');
                $(namaIdSelanjutnya).addClass('active');
                transisiSoal();
        } 
}

var jika = new kondisi();



var jikaSoal = function(){
   
    this.lanjut = function(kondisi){
        //JIKA nomor sekarang tidak sama dengan 5 rubah soal dan tambahkan soal
        if (nomorSekarang !== 5){
        nomorSekarang += 1;
        document.getElementById("soal").innerHTML = BankSoal[nomorSekarang - 1].soal;
        document.getElementById("nomorSoal").innerHTML =nomorSekarang;
        }else {
            nomorSekarang += 1;
        }
        //Mengembil keputusan jika nomor sekarang benar atau salah
        switch(nomorSekarang){
            case 2:
                if (kondisi == "benar")
                    jika.jawabanBenar('#nomor1','#nomor2');
                else
                    jika.jawabanSalah("#nomor1");
                
            break;
            case 3:
                if (kondisi == "benar")
                    jika.jawabanBenar('#nomor2','#nomor3');
                else
                    jika.jawabanSalah("#nomor2",'#nomor3');
            break;
            case 4:
                if (kondisi == "benar")
                    jika.jawabanBenar('#nomor3','#nomor4');
                else
                    jika.jawabanSalah("#nomor3",'#nomor4');
            break;
            case 5:
                if (kondisi == "benar")
                    jika.jawabanBenar('#nomor4','#nomor5');
                else
                    jika.jawabanSalah("#nomor4",'#nomor5');
            break;
            case 6:
                if (kondisi == "benar"){
                    $('#nomor5').addClass('benar');
                    nilaiBenar += 20;
                }
                else
                    $('#nomor5').addClass('salah');
                this.selesai();
            break;
            default:
                
            break; 
        }
        tampilkanPilihan(BankSoal,nomorSekarang);
     
    }
    //
    this.selesai = function(){
       document.getElementById("score").innerHTML = nilaiBenar;
        $('.latar').delay(3000).addClass('terbuka');
    }
    
}

var soalnya = new jikaSoal(); //



    
$('#pilih').click(function(){
    //JIKA user mengklik 'a' atau 'b' 
    if (document.getElementById("a").checked === true || document.getElementById("b").checked === true){
        
        //Masukkan kedalam pilihan
        if (document.getElementById("a").checked === true) pilihan = "A";
        if (document.getElementById("b").checked === true) pilihan = "B";
    
        //Ambil kondisi Jawaban
        if (pilihan == BankSoal[nomorSekarang - 1].jawaban){
        
            //PANGGIL function 'soalnya.lanjut()' dengan parameter jawabannya benar
            soalnya.lanjut("benar");
            
        }//ENDIF jawaban benar
        else {
            //PANGGIL function 'soalnya.lanjut()' dengan parameter jawabannya salah
            soalnya.lanjut("salah");
        }
     
    }//END IF untuk jika user mengklik salah satu pilihan
    else {
        
        //Tampilkan pesan jika user mengklik pilihan
        alert("anda belum mengklik apapun")
    }
       
})

});





