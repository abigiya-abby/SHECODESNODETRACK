let colors;
colors=['Red','Orange','Green','Blue','Purple','White'];
console.log("Printing the array using for loop")
//using for loop, printing each element of the array
for(let i=0; i<colors.length; i++){
    console.log(`${i+1}: `,colors[i]);
}
//using for..in
console.log("Printing the array using for..in loop")
for(color in colors){
    console.log(`${color}.`,colors[color]);
}
//using while
console.log("Printing the array using while loop")
let i =0;
while(i < colors.length){
    console.log(`${i+1},`,colors[i]);
    i++;
}
//using do...while
console.log("Printing the array elements using do..while");
if(colors.length >0){
    let a=0;
do{
    console.log(colors[a]);
    a++;
}while(a < colors.length)}
