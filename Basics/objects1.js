const mySym = Symbol("kumar");

const myObj={
    name:"ashwai",
    "newId":"ashwani kumar",
    branch:"cse",
    course:"btech",
    rollNo:"2107262",
    [mySym]:"newAshwani"
};

console.log(myObj.branch);
console.log(myObj["newId"]);
console.log(myObj[mySym]);
console.log(typeof myObj[mySym]);
console.log(myObj);