/*
OUTPUT :
2 - I love coding
4 - I love coding
6 - I love coding
8 - I love coding
10 - I love coding
12 - I love coding
14 - I love coding
16 - I love coding
18 - I love coding
20 - I love coding
20 - I will become fullstack developer
18 - I will become fullstack developer                                                                              
16 - I will become fullstack developer
14 - I will become fullstack developer
12 - I will become fullstack developer
10 - I will become fullstack developer
8 - I will become fullstack developer
6 - I will become fullstack developer
4 - I will become fullstack developer
2 - I will become fullstack developer
*/

var num = 2, count = 2,finish = 20; //SET variable for 'number','counter' and 'finish'

while(num <= finish){
    console.log(num+" - "+" I Love coding")
    num += count;
}

//RESET 
num = 20;
finish = 2;

while(num >= finish){
    console.log(num+" - "+" I Will become fullstack developer")
    num -= count;
}