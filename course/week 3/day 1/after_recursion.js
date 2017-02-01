function fibonaci_reverse(n){
    return n == 1 ? 1 : n * fibonaci_reverse(n - 1);
}

function recurtion_two(a,b){
    return a > 1 ?  a * recurtion_two(a-b,b) : 1;
}

console.log("hasil fungsi fibonaci_reverse : ",fibonaci_reverse(5));
console.log("hasil fungsi recursion_two : ",recurtion_two(12,5));


