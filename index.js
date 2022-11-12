import { nameOfFunction } from "./d.js";

var name = "Walid11@gmail.com"
let age = "12"

const arr = [];
arr.push(1)
console.log(arr)

console.log("Hello " + name + " !")
console.log(`Hello ${name} !`)

console.log(name.endsWith("s"))
console.log(name.startsWith("W"))
console.log(name.replaceAll("W", "w"))
const arrOfString = name.split(",")
console.log(arrOfString)
console.log(name[name.length - 1] === "s")
console.log(name.includes('@') && name.includes('.'))
const myString = "This is my test string: AA.12.B.12 with some other chars";
const res = /[A-Z]{2}\.\d{2}\.[A-Z]{1}\.\d{2,3}/.test(myString);
console.log(res);
console.log(myString.includes('/[A-Z]{2}\.\d{2}\.[A-Z]{1}\.\d{2,3}/'))
console.log(name.substring(0, 2))
console.log(name.slice(0, 2))



function sum(a, b) {
    return a + b;
}
nameOfFunction('mehdi')
const returnedValue = sum(1, 2)
console.log(returnedValue)

const arrowSum = (a, b) => {  console.log('a :', a); return a + b; }
const sumValue = arrowSum(5, 10)
console.log(sumValue)

const arrowWithOnePar = a => console.log(a)
arrowWithOnePar('Workshop')


let names = ['mohamed', 'ali', 'amine'];
let capNames =[];
for (let i=0; i<names.length; i++) {
  let x= names[i].toUpperCase()
 capNames.push(x)
}




const a=(a) => names.forEach(name=> {console.log(a);
    console.log(names)
    return name.toUpperCase()

})
a(2)
let num = [1, 2, 3];
const showEachOne = () => num.forEach( (n,i,num)=> n+1);
console.log(num
)

let s = 0;
const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction);


function myFunction(item) {
  item= item+1;
}
console.log(numbers)
const indexOne=num[0]
const index2=num[1]

const [c,b]=num
console.log(indexOne)
console.log(c)

const obj={
    x:"hhhß",
    age:"hhh"
}
const n=obj.name

const{x}=obj
console.log(x)

const spread= [...names,...numbers]
console.log(spread)