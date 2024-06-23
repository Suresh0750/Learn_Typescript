let developer = 'MERN Stack'  // it's atomatically take that type is call intertypes
let sample : string = 'Hari'

sample = 'suresh' //# we can't assign number
// console.log(sample)

let subscribe:number = 0

// subscribe = 'suresh' 
subscribe = 21
// console.log(subscribe)

let arr : string[] = ['str','str1','str3']

arr = ["0"]

// console.log(arr)
let checkBol :boolean = true

checkBol = false
// console.log(checkBol)

let checkBolArr : boolean[] = [true,false,true]

// checkBolArr = [0,true] // # its wrong
// console.log(checkBolArr)

let emptyArr : [] = []
// emptyArr = [1,2,3]

// console.log(typeof(emptyArr))

// console.log(emptyArr)

// # object 
let obj: {} = {}

// console.log(obj)

let obj1:{name:string;age:number,isMarried:boolean} = {  // If we mention the property we have to give value of inside of object
    name : 'suresh',
    age : 21,
    isMarried: true
}


//# interface 

interface Details{
    name : string,
    age : number,
    isMarried : boolean,
    getItem : ()=> void
}

let obj2 : Details = {
    name :'pranav',
    age : 21,
    isMarried : true,
    getItem(){
        console.log(this.name)
    }
}

console.log(obj2)

interface manageMent{
    departMent : string,
    rollNo : number,
    additionInfo? : string  // if we use ? that property is optional for including in object
}

let obj3 : manageMent ={
    departMent : 'MERN Stack',
    rollNo : 7,
}


type hotal = {
    dish  : string | number,   // we can add multiple data type like this |.
    totalNo? : number
}

let hotelTr : hotal = {
    dish : 'meals',
    totalNo : 5
}

let suresh : hotal ={
    dish : 780,
}

// Union / optional
let arr1 : (string | number)[] = ['suresh','pranav','srirag',0,7,8] // In array we can add multiple datatype like this

let arr2 = ['srirag','hari','saravanan','madhav',true,false,21,23,24,25] // inter types taks the data type of (string | number|boolean)


// # optional ?

type student = {
    name : string,
    rollNo : number,
    isPresent ?: boolean    // here we use boolean ? this symbol. That means this property is not nessasary 
}

let obj4 : student = {
    name : 'suresh',
    rollNo : 7
}


// Function 

function getUserName (userName:student){
    return userName.name
}

// getUserName(obj4)

// Inline data type of function 


function getUser({name,age,isOk}:{name:string,age:number,isOk :boolean}):number{ // getUser() : number here we mention data type it will refer the return value of data type 
    return age 
};

getUser({name : 'srirag',age:20,isOk : true})


function getFew(obj : student,hotelTr:hotal): (number | string )[]{  // if return value array means we can mention (number| string)[]
    return [hotelTr.dish,obj.name,obj.rollNo]
}

getFew(obj4,hotelTr)


function funcThree(obj4:student,hotal:hotal):void{   // In function if we did not return any value meanse we can use void
        console.log(obj4.name,hotal.totalNo)
}


funcThree(obj4,hotelTr)


// difference of type and interface

//* Interface we can only use obj but type we can use variable and obj and array


type Status = string   

type key = string []
type newObj = {
    name : string,
    age : 23,
    getItem : ()=> void
}
let key1 :Status = 'data type string'

// console.log(key1)
let keyArr : key = ['suresh','pranav','madhav','srirag', 'arun','hari']

// console.log(keyArr)

//# Union
type paymentMethod = 'pending' | 'completed'| '' | 'Not yet'   // type we can mention what value should be present here


let piza : paymentMethod = 'pending' 
// console.log(piza)

// function overloading

function  add(num1:number,num2:number) : number
function add(num1:string,num2:string) : string  
function add(num1:any,num2:any) : any {   // # here any means it means any data type we can't add array and object for that we can mention seperatley like "function add(num1:string,num2:string) : string "  this.
    return num1 + num2
}

add(2,2)
add('2','2')

function multiple (num1 : number,num2:number): void{
     console.log(num1*num2)
}

multiple(2,2)
multiple(2,2)


