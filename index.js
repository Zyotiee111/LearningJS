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
    // console.log(arr[i])
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

//Array methods
// let myArr = ["Fan", "Camera", 34, null,true];
// console.log(myArr.length);
// myArr.pop();
// console.log(myArr);

// myArr.push("jyoti");
// console.log(myArr);

// myArr.shift("jyoti");
// console.log(myArr);


// myArr.unshift("jyotie");
// console.log(myArr);


//string methods
// let myStr = "jyoti is love";
// console.log(myStr.length);
// console.log(myStr.indexOf("love"));
// console.log(myStr.lastIndexOf("is"));
// console.log(myStr.slice(0,5));
// d =myStr.replace("love","fire")
// console.log(d, myStr)

//Js dates
// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.getMonth);
// console.log(myDate.getSeconds);


//dom

let elem = document.getElementById('click');
// console.log(elem);

let elemclass = document.getElementsByClassName("container");
// console.log(elemclass);
//elemclass[0].style.background = "yellow";
// elemclass[0].classList.add("bg-primary");
// elemclass[0].classList.add("text-success");
// console.log(elemclass[0].innerHTML);
// console.log(elemclass[1].innerText);

tn = document.getElementsByTagName('div');
console.log(tn);
createdElement = document.createElement('p');
createdElement.innerText = "THis is created para";
tn[0].appendChild(createdElement);
createdElement2 = document.createElement('b');
createdElement2.innerText = "THis is bold";
tn[0].replaceChild(createdElement2, createdElement);
// removeChild(element)---> removes an elemnt
//selecting using query

// sel = document.querySelector('.container')
// console.log(sel)
// //events (mouse up ,mosue down)
// function clicked(){
//     console.log("The button was clicked");
// }
// window.onload = function(){
//     console.log("the document was loaded");

// firstconainer.addEventListener('click',function(){
//     console.log("clicked on container");
// })
// firstconainer.addEventListener('mouseover',function(){
//     console.log("Mouse on container");
// })
// firstconainer.addEventListener('mouseout',function(){
//     console.log("Mouse out of container");
// })

// firstconainer.addEventListener('click',function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> we have clicked </b>"
//     console.log("clicked on container");
// })
// let prevhtml =  document.querySelectorAll('.container')[1].innerHTML;
// firstconainer.addEventListener('mouseup',function(){
//     document.querySelectorAll('.container')[1].innerHTML = prevhtml;
//     console.log("mouse up when clicked on container");
// })
// firstconainer.addEventListener('mousedown',function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> we have clicked </b>"
//     console.log("mouse down when clicked on container");
// })

//set time out and set interval
//arrow functions

// function summ(a,b){
//     return 5;
// }
// summ = (a,b)=>{
//     return a+b
// }
logkaro = ()=>{
    console.log("i m log")
    document.querySelectorAll('.container')[1].innerHTML = " set interval fired"
}
clr = setTimeout(logkaro , 2000)
clr = setInterval(logkaro , 2000);