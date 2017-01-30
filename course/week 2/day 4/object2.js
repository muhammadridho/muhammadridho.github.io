var teman = function(nama,kabar,pekerjaan){
   
    //Simpan Parameter ke dalam object
    this.nama = nama === undefined ? "Tanpa nama" : nama;
    this.kabar = kabar === undefined ? "Biasa saja" : kabar;
    this.pekerjaan = pekerjaan === undefined ? "Tidak kerja" : pekerjaan;
    
    //Method Sapa
    this.sapa = function(namaTeman){
        console.log("Halo "+namaTeman+", apa kabar ?");
    }
    
    //Method Balas Sapa
    this.balasSapa = function(namaTeman){
        console.log("Halo "+namaTeman+", kabarku "+this.kabar);
    }
    
    //Method Tanya pekerjaan
    this.tanyaPekerjaan = function(){
        console.log("Apa pekerjaanmu saat ini ?")
    }
    
    //Method Balas Pekerjaan
    this.balasPekerjaan = function(){
        console.log("Pekerjaanku saat ini adalah "+this.pekerjaan);
    }
    
    this.berpisah = function(Teman){
        console.log("Senang bertemu denganmu "+Teman.nama+",semoga kamu sukses menjadi "+Teman.pekerjaan);
    }
}


var budi = new teman('Budi', 'baik', 'developer');
var tono = new teman('Tono', 'baik', 'chef');


budi.sapa(tono.nama);
tono.balasSapa(budi.nama);
budi.tanyaPekerjaan();
tono.balasPekerjaan();
budi.berpisah(tono);