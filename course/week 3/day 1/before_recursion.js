function fibonaci_reverse(n){
    var x = 1;
    for (var index = n;index > 1;index--){
        x  *= index; 
    }
    return x;
}

function recurtion_two(a,b){
  var c = a;
  var d = a;
    while (c > 2){
        d *= a - b;
        a = a - b;
        c -= b;
    }

  return d;
       
}

console.log("hasil fungsi fibonaci_reverse : ",fibonaci_reverse(5));
console.log("hasil fungsi recursion_two : ",recurtion_two(12,5));





