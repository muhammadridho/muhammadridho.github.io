function FirstReverse(str) { 
    var data = "";
    for (var i = (str.length-1) ;i >= 0;i--){
        data += str[i];
    }
  // code goes here  
  return data; 
         
}
   
// keep this function call here 
console.log(FirstReverse("coba"));    