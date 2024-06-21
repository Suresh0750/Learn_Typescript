
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


let arr1 : (string | number)[] = ['suresh','pranav','srirag',0,7,8] // In array we can add multiple datatype like this
