function cek(){
    for(var index = 0;index < 2;index++){
       var jawaban = document.getElementById("coba").value;
        if (jawaban === "salah"){
            alert("selesai");
            break;
        }
    }
}