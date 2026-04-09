//Always prefer === in real code
console.log(5 == "5");
console.log(5 === "5");

if("hi") console.log("Hello");

console.log("10" == 10);
console.log("10" === 10);

console.log(false == "0");
console.log(false === "0");

if(0){
    console.log("Yes");
}else{
    console.log("No");
}

/*
Golden Rules
== → does type conversion
=== → no conversion, strict check

Falsy values:

false, 0, "", null, undefined, NaN
Everything else → truthy
*/

console.log(null == undefined);   // true
console.log(null === undefined);  // false

