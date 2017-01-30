var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];



function dataHandling2(data){
    
    data.splice(1,1,"Roman Alamsyah Elsharawy");
    //["0001", "Roman Alamsyah Elsharawy", "Bandar Lampung", "21/05/1989", "Membaca"];
    data.splice(4,1,"Pria","SMA Internasional Metro");
    //["0001", "Roman Alamsyah Elsharawy", "Bandar Lampung", "21/05/1989", "Pria","SMA Internasional Metro"];
    
    console.log(data);
    //TAMPILKAN data
    
    var dataTanggal = data[3].split("/");
    //PISAHKAN dataTanggal menjadi [21] [05] [1989] 
    
    //KELOMPOKAN 'kode' berdasarkan nama bulan
    switch(dataTanggal[1]){ 
        case "01": console.log("Januari"); break;
        case "02": console.log("Februari"); break;
        case "03": console.log("Maret"); break;
        case "04": console.log("April"); break;
        case "05": console.log("Mei"); break;
        case "06": console.log("Juni"); break;    
        case "07": console.log("Juli"); break;
        case "08": console.log("Agustus"); break;
        case "09": console.log("September"); break;
        case "10": console.log("Oktober"); break;
        case "11": console.log("November"); break;
        case "12": console.log("Desember"); break;
    }
    
    
    
    //Buat array yang menampung susunan tanggal
    var susunTanggal = [];
    susunTanggal[0] = dataTanggal[2];
    susunTanggal[1] = dataTanggal[0];
    susunTanggal[2] = dataTanggal[1];
    
    //GABUNG array menjadi sebuahh string
    console.log(susunTanggal);
    console.log(susunTanggal.join("-"));
    
    //BATASI penggunaan nama di data
    data.splice(1,1,data[1].slice(0,14));
    
    console.log(data[1]);
    
}

dataHandling2(input);