

// # generies 

// # intead of using function overloading  is called generies

function getDetails({name,age}:{name:string,age:number}):number{

    return age

}

getDetails({name:'suresh',age:21})
console.log(getDetails({name:'suresh',age:21}))
// getDetails({name:'suresh',age:"21"}) 
type user = {
    uName : string,
    stack ?: string,
    rollNo ?: number
}


const userDetail : user ={
    uName : 'pranav',
    stack : 'MERN',
    rollNo : 7
}

// Merge two type using with & symbol

type admin = user & {
    company : string
}

interface users extends admin { // I merge Interface of users with type of admin. The admin merge with type of user
    name : string,
    rollNo : number
}

const newUser:users ={ 
    name : 'hari',
    rollNo :7,
    uName : 'haran',
    company :'amazone'
}


const adminDetails : admin =  {
    uName : 'sridhar',
    company : 'zoho'
}
// # generise
function getUseDetail<T>(userDetail : T):T{   // one function we can pass multiple datatypes
    return userDetail
}

const uNameVal = getUseDetail<user>(userDetail)
const uStack = getUseDetail<admin>(adminDetails)
const userVal = getUseDetail<users>(newUser)  
uStack.company

userVal.company

// Enum 

// enum for learning fetching the data we will success or faill or pending instead of these some time we will get number at that time we use this enum 


const enum statusType{    // here we can mention number ex : completed = 1. if we mention means It wil start from 1 otherwise its start from 0
    COMPLETED, // COMPLETED = 3
    FAILLED,
    PENDING
}

function getStatus(acceptId : string, status:statusType ){
        console.log(acceptId,'==',status)
}


getStatus('12345', statusType.COMPLETED)


// # as const  'It use for variable which want to assign read only we can use this' and also is called typecasting

let k = 'new one' as const // here we declare let we can change, using as we can change keyword . if we use as const that variable act like const and we can mention null, undefined also
// k = 'new'
// console.log(k)

// instead of using enum we can use

const StatusType = {
    COMPLETED : 'completed',
    FAILLED : 'failled',
    PENDING : 'pending'
} as const



function getStatus1(acceptId:string, status : keyof typeof StatusType){
    // StatusType.COMPLETED = 'hellow' // * we should not change the value of object for that we cam use "as const"
    console.log(acceptId, '==',StatusType[status])
}

getStatus1('12345',"COMPLETED")



// # utility types

interface worker {
  readonly  wName : string,
    wNo ? : number,
    rigNo? : number,
    stack? : string
} 

const workerNO1 : worker ={
    wName : 'reyas',
    wNo : 21
} as const // * if I want to allow to give every proper of this object we use 'as const'. but I want to give wName property to allow for read only means we use 'read only' in type or interface

const workerNo2 :Readonly <worker>  = {  // this variable we 
    wName : 'puthiyavan',
    wNo : 45
}
// console.log(workerNo2)

const workerNo3 : Partial<worker>= {
    wName : 'suresh',  // these two optional beacause of we use Partial
    wNo : 2 
}
const workerNo4 : Required <worker> ={  // creating type or interface inside we ? optinal method but when we creating obj that should be followed type of interface . We need that option prperty also for that we can use 'Required'
    wName : 'pranav',
    wNo : 5,
    rigNo : 234567,
    stack : 'flutter'
}

const workerNo5 : Pick<worker,("wName" | "wNo")> ={   // pick any one or more . If we want to particularly two are thre property inside of the object we can use Pick. Here we mention that, those property only we can access.
    wName : 'king',
    wNo : 4
}
 
// console.log(workerNo5)

const workerNo6 :Omit <worker,"rigNo"> ={
    wName : 'kiran',
    wNo : 8,
    stack : 'flutter'
}
// console.log(workerNo6)

// # Union type 

type StatusType = "Pending" | "Complete" | "Failure"   // *Union type apply and using like Omit or Pick

const status_ : Exclude<StatusType,"Failure"> = "Complete"  // * using Like Omit and Pick . Here we mention Failure so we can't assing the value of failure of this variable



// This is known obj we can know the property of this obj so we can mention the datatype of this obj
type knowObj = {
    name : string,
    phNo : number
}

type unKnowObj = Record<string, any>   // first parameter mention datatype of key and second parameter mention datatype of value 


const unknownDetails:unKnowObj ={
        name : 'suresh',
        place : 'Tirunelveli',
        rollNo : 7 ,
        like : ['reding','writing','gaming','sliping'],
        known :{
            language : ['HTML','CSS','NODE JS','JAVASCRIPT','MONGODB','TYPESCRIPT'],
            likePlace : ['homedown','coiambatore','kochi']
        }
}

console.log(unknownDetails)

