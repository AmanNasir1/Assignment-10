// Q1
// function telltime(){
//     var dates = new Date();
//     console.log(dates)
// }
// telltime();

// Q2

// function greet(){
//     var Fname = prompt("Enter Your First Name: ")
//     var Lname = prompt("Enter Your Last Name: ")
//     alert("Hello Mr/Mrs "+ Fname + " " +Lname + " :)")
// }
// greet()

// Q3

// function add(num1,num2){
//     var num1 = +prompt("Enter First Number: ")
//     var num2 = +prompt("Enter Second Number");
//     return num1 + num2
// }
// var res = add();
// alert(res)

// Q4

// function calculator(){
//     var num1 = +prompt("Enter Number 1: ");
//     var num2 = +prompt("Enter Number 2: ");
//     var op = prompt("Enter Your Operator: ");
//     if(op=== "+"){
//         return num1 + num2
//     }
//     else if(op === "-"){
//         return num1 - num2;
//     }
//     else if(op === "*"){
//         return num1 * num2;
//     }
//     else if(op === "/"){
//         return num1 / num2;
//     }
// }

// alert(calculator())

// Q5

// function sqNum(){
//     var num = +prompt("Enter Your Number: ")
//     return num*num
// }
// alert(sqNum());

// Q6
// var num1 = +prompt("Enter Your Number: ")
// function fact(num1){
   
//     if (num1 == 1){
//         return num1  
//     }
//     else{
//         return num1 * fact(num1-1)
//     }
// }
// alert(fact(num1));

// Q7

// function counting(){
//     var num1 = +prompt("Enter Beginning Number: ")
//     var num2 = +prompt("Enter Last Number: ")
//     for (i=num1;i<=num2;i++){
//         console.log(i)
//     }
// }

// counting();

// Q8

// function Hyp(){
//     var num1 = +prompt("Enter Base: ")
//     var num2 = +prompt("Enter Perpendicular: ")
//     function sq(num){
//         return num*num        
//     }
// var res = Math.sqrt(sq(num1) + sq(num2));
// console.log(res)
// }

// Hyp()


// Q9

// function Area(width,height){
//     res = width*height;
//     console.log(res)
// }

// Area(5,3)
// width = 5
// height = 3
// Area(width,height)

// Q10
// var str1 = prompt("Enter String: ").toLowerCase();
// var res = str1.length
// function palindrome(str1){
//     for(i=0;i<=res/2;i++){
//         if(str1[i] !== str1[res-1-i]){
//             return "Its Not a Palindrome"
//         }
//         else{
//             return "Its A Palindrome"
//         }
//     }
// }
// var final = palindrome(str1);
// console.log(final);

// Q11

// function uppercase(str){
//     var array1 = str.split(' ');
//     var newarr = [];
//     for(i=0;i<array1.length;i++){
//         newarr.push(array1[i].charAt(0).toUpperCase() + array1[i].slice(1))
//     }
//     return newarr.join(' ')

// }
// console.log(uppercase("the quick brown fox"))

// Q12

// function longestWord(string){
    var string = "Web Development Tutorial"
    var arr1 = string.split(' ');
    var longest = 0;
    var word = null
    // var firstlen = arr1[0].length;
    
    // console.log(first)
    for(i=0 ; i <= arr1.length ; i++){
        // console.log(arr1[i])
        if(arr1[i].length > longest){
            longest = arr1[i].length;
            word = arr1[i]
        }
        // return first
    }
    console.log(first)
// }
// console.log(longestWord("Web Development Tutorial"))