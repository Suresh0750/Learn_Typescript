
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

console.log(obj)

let obj1:{name:string;age:number,isMarried:boolean} = {  // If we mention the property we have to give value of inside of object
    name : 'suresh',
    age : 21,
    isMarried: true
}


