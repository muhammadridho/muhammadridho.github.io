var nama = "ridho";
var peran ="Ksatria";


if (nama === undefined || null){
    console.log("Nama tidak boleh kosong");
    if (peran === 'Ksatria'){
         console.log("Halo Ksatria Tanpa nama, kamu dapat menyerang dengan senjatamu!");
    }
    else if (peran === 'Tabib'){
         console.log("Halo Tabib Tanpa nama, kamu akan membantu temanmu yang terluka.");
    }
    else if (peran === 'Penyihir'){
        console.log("Halo Penyihir Tanpa nama, ciptakan keajaiban yang membantu kemenanganmu!");
    }
    else {
       console.log("Pilih peranmu untuk memulai game"); 
    }
}
else{
    console.log("Selamat datang di Dunia Proxytia, "+nama);
    if (peran === 'Ksatria'){
         console.log("Halo Ksatria "+nama+", kamu dapat menyerang dengan senjatamu!");
    }
    else if (peran === 'Tabib'){
         console.log("Halo Tabib "+nama+", kamu akan membantu temanmu yang terluka.");
    }
    else if (peran === 'Penyihir'){
        console.log("Halo Penyihir"+nama+", ciptakan keajaiban yang membantu kemenanganmu!");
    }
    else {
       console.log("Pilih peranmu untuk memulai game"); 
    }
}








