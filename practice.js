
//function to change para using the innerHTML
function myFunction(){
    document.getElementById("change").innerHTML="paragraph changed"
}

//use of document.write
function click(){
    document.write("you clicked the button")
}

// use of alert function
function tell(){
    alert("clicked the button");
}

//use of variables and the console log
let x,y,z;
x=5;
y=6;
z=x+y;
console.log(z);

//operators
var a,b,c;
a=5;
b=4;

//add
c=a+b;
console.log("the c with addtion is");
console.log(c);

//mul
c=a/b;
console.log("the c with mul is");
console.log(c);

//sub
c=a-b;
console.log("the c with sub is");
console.log(c);

//div
c=a/b;
console.log("the c with div is");
console.log(c);

// function for the javascript


document.getElementById("Myfun").innerHTML=func(77);
function func(f){
    return (5/9) * (f-32);
}

const person ={
    fname: "suraj",
    lname: "Aherrao",
    age: 21,
    returnage: function(){
        return this.age;
    }
};

document.getElementById("obj").innerHTML= person.fname +" "+ person.lname + " and age is " + person.returnage();


function displayDate(){
    document.getElementById("eve").innerHTML=Date();
}

function myFunction(){
    var text = document.getElementById("up").innerHTML;
    document.getElementById("up").innerHTML = text.toUpperCase();
}

function visit(){
    var text = document.getElementById("vst").innerHTML;
    document.getElementById("vst").innerHTML = text.replace("ahmdabad","mumbai");
}

const ar=["apple","orange","banana"];
let flen=ar.length;
let text="<ul>";
for(var i=0;i<flen;i++){
text+= "<li>" +ar[i]+ "<li>";
}
text+="<ul>";

document.getElementById("arr").innerHTML=text;

const vv=[10,40,177,18,100];
document.getElementById("low").innerHTML=myArrayLow(vv);
document.getElementById("high").innerHTML=myArrayHigh(vv);

function myArrayLow(a){
    return Math.min.apply(null,a);
}

function myArrayHigh(a){
    return Math.max.apply(null,a);
}

const ap=["apple","mango","apple",'cherry'];
let po=ap.lastIndexOf("apple") +1;

document.getElementById("posi").innerHTML = "the last position of the apple in text is " + po;

const aa=[1,15,34,18];
const bb=aa.map(Myfunction);

document.getElementById("ma").innerHTML = bb;

function Myfunction(values){
    return values+18;
}

const htime= new Date().getHours();
let greeting = "hello";
if(htime<12){
    greeting = "Good Morning";
}
else if(htime>18){
    greeting= "Good evening"; 
}
else {
    greeting="good Afternoon";
}
document.getElementById("gr").innerHTML=greeting;

function er() {
    const message = document.getElementById("p0");
    message.innerHTML = "";
    let x = document.getElementById("er").value;
    try { 
      if(x.trim() == "")  throw "is empty";
      if(isNaN(x)) throw "is not a number";
      x = Number(x);
      if(x > 10)   throw "is too high";
      if(x < 5)  throw "is too low";
    }
    catch(err) {
      message.innerHTML = "Input " + err;
    }
    finally {
      document.getElementById("demo").value = "";
    }
}


class car{
    constructor(name,year){
        this.name=name;
        this.year=year;
    }
    age(x){
        return x - this.year;
    }
}

let date=new Date();
let ye=date.getFullYear();
console.log(ye);
let myCar= new car("ford",2014);

document.getElementById("cl").innerHTML="my car age is " + myCar.age(ye);

const apples = {name: 'Apples'};
const bananas = {name: 'Bananas'};
const oranges = {name: 'Oranges'};

const fruits=new Map();

fruits.set(apples, 500);
fruits.set(bananas, 300);
fruits.set(oranges, 200);

document.getElementById("mapp").innerHTML = fruits.get(apples);

document.getElementById("c2").style.color="blue";
document.getElementById("c2").style.fontFamily="Arial"

function mOver(obj){
    obj.innerHTML="thank you";
}

function mOut(obj){
    obj.innerHTML="Mouse over me";
}