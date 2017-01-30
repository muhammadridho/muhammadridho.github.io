//Membuat 3 buah object
var objSenin = {
    hari : 'senin',
    hadir : 'masuk',
    alasan : ''
}

var objSelasa = {
    hari : 'selasa',
    hadir : 'masuk',
    alasan : ''
}

var objRabu = {
    hari : 'rabu',
    hadir : 'absen',
    alasan : 'dinas luar'
}


var dataAbsen = [objSenin,objSelasa,objRabu]; //GABUNGKAN 3 Object menjadi 1 Array
var tidakMasuk = 0;

for (var index = 0; index < dataAbsen.length;index++){
    console.log("Hari :",dataAbsen[index].hari)
    console.log("Kehadiran :",dataAbsen[index].hadir);
    
    if (dataAbsen[index].hadir !== 'masuk'){
        tidakMasuk += 1;
        console.log("Alasan: "+dataAbsen[index].alasan);
    }
    console.log(" ")
    
    
}

console.log("Total hari kerja minggu ini : ",dataAbsen.length,"hari");
console.log("Total Masuk : ",dataAbsen.length - tidakMasuk," hari");
console.log("Total Tidak Masuk : ",tidakMasuk," hari"); 