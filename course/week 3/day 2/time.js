function TimeConvert(num) { 
    var minute = num % 60;
    var hour = 0;
    if (minute > 0){
        hour = (num - minute) / 60;
        num = hour +':'+minute;
    }
    else {
        if (minute == 0)
            num = num / 60 + ":0";
        else
            num = '0:'+num;
    }
  // code goes here  
  return num ; 
         
}
   
// keep this function call here 
console.log(TimeConvert(40));    