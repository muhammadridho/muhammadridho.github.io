

//Tugas ke 3
var tahun = 2017; //Masukkan sebuah tahun
if (tahun % 4 === 0){
    if (tahun % 100 !== 0){
        console.log(tahun+" tahun adalah tahun kabisat");
    }
    else {
        if (tahun % 400 === 0)
            console.log(tahun+" adalah tahun kabisat"); 
        else
            console.log(tahun+" adalah bukan tahun kabisat");     
    }//END IF
}//END IF
else{
    console.log(tahun+" adalah bukahn tahun kabisat")
}//ENDIF
