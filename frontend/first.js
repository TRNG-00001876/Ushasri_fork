// //console.log("hello world");
// //Write a simple JavaScript program to join all elements of the following array into a string.
//    /*let array1=["hi","hello","welcome"];
// //let newArray=array1.join(" ");
// console.log(array1.join(" "));*/


// //Write a JavaScript program to compute the sum and product of an array of integers.
// let array1=[10,20,30,50,90,60];
// /*let sum=0;
// for(let i=0;i<=array1.length-1;i++)
// {
//  sum=sum+array1[i];
// }
// console.log(sum);*/
// const sum=array1.reduce((acc,cuu)=>acc+cuu);
// const mul=array1.reduce((acc,cuu)=>acc*cuu);
// console.log(mul);
// console.log(sum);

//Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.




//oops concept
/*
class Dog
{
    eat()
    {
        console.log("chicken");
    }
}
class Cat extends Dog
{
    drink()
    {
        console.log("milk");
    }
}

let ce=new Cat()
ce.drink();
ce.eat();*/
// console.log(ce.drink());
// console.log(ce.eat());
//02-05-2024
console.log("hello");
let user="usha\vsar\b\ni \n'varma'";
console.log(user);
let com=5>6;
console.log(com,typeof(com))

//type conversion
/*
let numbe=String(6)
console.log(numbe,typeof(numbe))
//type coversion
let sums=50+true
console.log(sums);
// Arithementic operators
let num1=19;
let num2=25
let result=num1+num2
console.log(result)*/

//FUNCTIONS--------------------------------------------------------------------------------
/*function sum()
{
   
    return "hello";
}


console.log(sum())*/
//Parameter function-----------------------------------------
function sample(users)
{
   
    return `hello ${users}`;
}
let users='usha';
let res=sample(users)
console.log(res)

