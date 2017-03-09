const readline = require('readline');


const ask = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Masukkan Kata : '
})


ask.prompt()
ask.on('line',cekHuruf);


function cekHuruf(input){
  if (input === ''){
    console.log('Error');
  }else{
    input = input.split(' ');
    for (let i = 0;i < input.length; i++){
      input[i] = piclet(input[i]);
    }

  console.log(input.join(' '));
  }
  ask.prompt()
}

function piclet(input){
  let pattern = /[aiueo]/gi
  let ditemukan = input.search(pattern);
  if (ditemukan > 0){
      return input.slice(ditemukan)+''+input.slice(0,ditemukan)+'ay';
  }
  else{
      if (ditemukan === 0){
          return input;
      }
      return "Error";
  }
}
