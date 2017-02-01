function palindrome(str) {
 var normal = str.replace(/\W/g,'').toLowerCase();
 var reverse = normal.split("").reverse().join("");
 
 return normal;
}

console.log(palindrome("teWAGwgggs"));