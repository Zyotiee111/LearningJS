 // 1. Ways to print in js
//  console.log("hello World");
//  alert("me");
// document.write("This is document")


//2. Js APIs
    // console.log("hello world",4+6, "another log")
    // console.warn("this is warning")
    // console.error("This is error")

//3. Variables
    var num = 1

//4. Data types
var str1 = "this is string"

//5.Objects
var marks ={
    r: 34,
    s:99,
    j:100,
}
// console.log(marks);
 
//6.Booleans

var a = true
var b= false;
// console.log(a,b);

//7. undefined
var und;
// console.log(und);

//8. null
var a = null
// console.log(a)

//7. 2 types of data types, listed above except objects are primitive
// another: reference types: arrays and objects

 var arr = [1,2,3,4,5, "string"]
// console.log(arr);

//function
//for loop
// arr.forEach(function(element){
//     console.log(element)
// })

for (var i = 0; i<arr.length; i++){
    if(i==2){
        //break;
        continue;
    }
    console.log(arr[i])
}

// let j = 0;
// const ac =1; //while 

// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }


// do{
//     console.log(arr[j]);
//     j++;
// }while(j<arr.length)