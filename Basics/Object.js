const obj1={1:"a", 2:"b"};
const obj2={3:"a", 4:"b"};

const obj3=Object.assign({}, obj1, obj2);
const obj4={...obj1, ...obj2};

console.log(obj3);
console.log(obj4);

console.log(Object.keys(obj1));
console.log(Object.values(obj1));
console.log(Object.entries(obj1));
