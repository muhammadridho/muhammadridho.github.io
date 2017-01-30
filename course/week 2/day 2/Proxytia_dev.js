
//SET variable untuk data pemain dan monster
var nama = "ridho";
var peran ="Ksatria";
var tahun_lahir = 1998;
var umur = 2016 - tahun_lahir;
var playerHealth = tahun_lahir * Math.random();
var monsterHealth = tahun_lahir * Math.random();
var kodeMonster = Math.floor(Math.pow(100,Math.random()));

if (nama === undefined){
    console.log("Nama tidak boleh kosong"); // TAMPILKAN 'nama' tidak boleh kosong
    //SET 'nama' dan 'peran' jika 'nama' kosong
    nama ="Tanpa nama"; //SET nama jika nama kosong / undefined
    peran = "kacung";
    
    if (peran === undefined) 
        console.log("Pilih peranmu untuk memulai game");//TAMPILKAN peringatan bahwa pemain tidak memiliki peran
    
}
else{
    console.log("Selamat datang di Dunia Proxytia, "+nama);
    /*
    MENGGANTI IF dengan SWITCH : 
    > Agar lebih efesien
    > Mengurangi kesalahan input peran yang dipilih :
        > Jika user menginput 'peran' contoh  ksatria  atau Ksatria , langsung dirubah ke uppercase agar tidak terjadi masalah
        > Tidak lagi menggunakan if(peran === 'Ksatria') || (peran === 'ksatria')
    */
    switch(peran.toUpperCase()){ //PILIH Peran pemain
        case "KSATRIA":
           console.log("Halo Ksatria "+nama+", kamu dapat menyerang dengan senjatamu!");
        break;
        case "TABIB":
            console.log("Halo Tabib "+nama+", kamu akan membantu temanmu yang terluka.");
        break;
        case "PENYIHIR":
            console.log("Halo Penyihir"+nama+", ciptakan keajaiban yang membantu kemenanganmu!");
        break;
        default:
            console.log("Pilih peranmu untuk memulai game"); 
            peran = "kacung";
        break;
    }
} //END IF 

//MULAI GAME
for (var index = 1;index <= tahun_lahir;index++){
    if (index % umur === 0){ // jika indeks perulangan adalah kelipatan umur
        console.log(peran + ' ' + nama + ' menyerang monster!');
        monsterHealth -= umur; // Kurangi monsterHealth dengan umur
    }
    else if (index % kodeMonster === 0){ //jika indeks perulangan adalah kelipatan kodeMonster
       console.log('monster menyerang ' + peran + ' ' + nama + '!');
       playerHealth -= kodeMonster;
    }
    else if ((index % umur === 0 && index % kodeMonster === 0)){ //jika indeks perulangan adalah kelipatan umur dan kodeMonster sekaligus:
        console.log('Health keduanya bertambah');
        playerHealth += kodeMonster; // Tambahkan playerHealth dengan kodeMonster
        monsterHealth += umur; // Tambahkan monsterHealth dengan umur
    }
}

/*
JIKA 'playerHealth' lebih besar dari pada 'monsterHealth' maka PLAYER MENANG
JIKA 'monsterHealth' lebih besar dari pada 'playerHealth'  maka MONSTER MENANG
*/
console.log(playerHealth > monsterHealth ? 'Selamat, ' + peran + ' ' + nama + ' memenangkan pertarungan!' : 'Sayang sekali, ' + peran + ' ' + nama + ' dikalahkan monster...');



