

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

function getUseDetail<T>(userDetail : T):T{   // one function we can pass multiple datatypes
    return userDetail
}

const uNameVal = getUseDetail<user>(userDetail)
const uStack = getUseDetail<admin>(adminDetails)
const userVal = getUseDetail<users>(newUser)  
uStack.company

userVal.company

