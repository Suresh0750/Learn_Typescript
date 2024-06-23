// # covered topic
// # any | unknown | never | void | null
var unknownDetail = {
    name: 'suresh',
    place: 'Tirunelveli',
    rollNo: 7,
    like: ['reding', 'writing', 'gaming', 'sliping'],
    known: {
        language: ['HTML', 'CSS', 'NODE JS', 'JAVASCRIPT', 'MONGODB', 'TYPESCRIPT'],
        likePlace: ['homedown', 'coiambatore', 'kochi']
    }
};
var unknownDetail2 = {
    name: 'suresh',
    place: 'Tirunelveli',
    rollNo: 7,
    like: ['reding', 'writing', 'gaming', 'sliping'],
    known: {
        language: ['HTML', 'CSS', 'NODE JS', 'JAVASCRIPT', 'MONGODB', 'TYPESCRIPT'],
        likePlace: ['homedown', 'coiambatore', 'kochi']
    }
};
console.log(unknownDetail2);
// # unknown method 
var unKnownVariable = 90; // * unknown method for avoiding any because if we use any is the it impact the process of typscript and is not efficient
var newVar = unKnownVariable; // here we can use typecasting. That means we can use "as datatype"
newVar.toString(); // if we use the methoud the auto suggestion would be show.
// # never and void
// * never and void both like similar that means inside of the function If we don't want to use return. but never we can use that if that function running infinity time means and another useage we not use return we can use throw ex ; that function could be throw the error message
// * void we like never. Inside of the function we don't want to return but we can use console.log .
function errorMsg(message) {
    throw message;
}
// errorMsg('failed payment')
function logFun(message) {
    console.log(message);
}
logFun('hellow world');
var newObj = {
    institude: 'brototype',
    getItem: function () {
        return 'hellow';
    },
    setItem: function (message) {
        console.log(message);
    },
    putItem: function (msg) {
        throw msg;
    },
};
newObj.setItem('check the function using void and check void and never');
// # topic null
var checkNull = null; // (or 'string value')
