Problem-1---> Prime Problem

let number=5;
let count=0;
for(let i=1;i<=number;i++){
   if(number%i==0){
       count++;
   }
}
if(count==2){
   console.log("Not Prime");
}
else{
   console.log("Prime");
}


Problem 2---->Pallindrome Problem

let str="mom";
let bag="";
for(let i=str.length-1;i>=0;i--){
    bag=bag+str[i];
}
if(bag==str){
   console.log("Not a Pallindrome");
}
else{
   console.log("Pallindrome");
}
