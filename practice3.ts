
// # covered topic
// # any | unknown | never | void | null


type obj = Record <string,any> // * here it mention the datatype or key is string , the datatype of value is any (that means it's allow all datatype ex: string,number,array, obj,boolean)



const unknownDetail:obj ={
    name : 'suresh',
    place : 'Tirunelveli',
    rollNo : 7 ,
    like : ['reding','writing','gaming','sliping'],
    known :{
        language : ['HTML','CSS','NODE JS','JAVASCRIPT','MONGODB','TYPESCRIPT'],
        likePlace : ['homedown','coiambatore','kochi']
    }
}


type unKnownObj = {
    [index:string] : any
}

const unknownDetail2:unKnownObj ={
    name : 'suresh',
    place : 'Tirunelveli',
    rollNo : 7 ,
    like : ['reding','writing','gaming','sliping'],
    known :{
        language : ['HTML','CSS','NODE JS','JAVASCRIPT','MONGODB','TYPESCRIPT'],
        likePlace : ['homedown','coiambatore','kochi']
    }
}


console.log(unknownDetail2)

// # unknown method 

const unKnownVariable : unknown = 90  // * unknown method for avoiding any because if we use any is the it impact the process of typscript and is not efficient

let newVar = unKnownVariable as number  // here we can use typecasting. That means we can use "as datatype"

newVar.toString()    // if we use the methoud the auto suggestion would be show.




// # never and void


// * never and void both like similar that means inside of the function If we don't want to use return. but never we can use that if that function running infinity time means and another useage we not use return we can use throw ex ; that function could be throw the error message
// * void we like never. Inside of the function we don't want to return but we can use console.log .


function errorMsg (message : string) : never{
        throw message
}

// errorMsg('failed payment')

function logFun (message : string): void{
    console.log(message)
}
logFun('hellow world')


type objUseFun = {
    institude : string,
    getItem (): string  // method
    setItem : (message:string)=> void  // method  we can use these two method
    putItem :(msg: number)=> never;
}


const newObj : objUseFun = {
    institude : 'brototype',
    getItem(){
        return 'hellow'
    },
    setItem(message){
        console.log(message)
    },
    putItem( msg) {
        throw msg
    },
}

newObj.setItem('check the function using void and check void and never')


// # topic null

const checkNull : string | null = null // (or 'string value')


